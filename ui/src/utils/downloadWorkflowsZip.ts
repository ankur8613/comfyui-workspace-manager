import { Workflow } from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import JSZip from "JSZip";
import { genFolderRelPath } from "../db-tables/DiskFileUtils";
import { sanitizeRelPath } from "../utils/OsPathUtils";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export const downloadWorkflowsZip = async (selectedList: Array<Workflow>) => {
  try {
    const exportName = `ComfyUI_workspace_files_${formatTimestamp(Date.now())}`;
    const zip = new JSZip();
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");

    console.log("Selected items for zip:", selectedList);

    for (const workflow of selectedList) {
      let folderPath;
      try {
        if (twoWaySyncEnabled) {
          folderPath = workflow.parentFolderID ?? "";
        } else {
          folderPath = await genFolderRelPath(workflow.parentFolderID ?? null)
            .then(async (path) => sanitizeRelPath(path ?? ""))
            .catch((err) => {
              console.error("Error generating folder path:", err);
              return "";
            });
        }

        const folder = zip.folder(folderPath);
        console.log(`Adding files to folder: ${folderPath}`);

        // Example: Add different types of files dynamically
        for (const file of workflow.files) {  // Assuming `workflow.files` is an array of files with different types
          const fileType = file.type || "application/octet-stream";  // Default to binary type if not specified
          const fileContent = await fetchFileContent(file.url);  // Function to fetch the file content
          
          // Add the file to the zip folder with its correct name and extension
          folder?.file(`${file.name}.${file.extension}`, fileContent, { binary: true });
        }

      } catch (error) {
        console.error("Error processing workflow:", workflow.name, error);
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(content);
      a.download = `${exportName}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);  // Clean up
      console.log("Download initiated for zip file:", exportName);
    }).catch((error) => {
      console.error("Error generating zip file:", error);
    });

  } catch (error) {
    console.error("Error in downloadWorkflowsZip:", error);
  }
};

// Utility function to fetch the file content based on URL (this will depend on your implementation)
async function fetchFileContent(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch file content from ${url}`);
  return await response.blob();  // Returns the file content as a Blob
}
