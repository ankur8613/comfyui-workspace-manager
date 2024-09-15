import { Workflow } from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import JSZip from "JSZip";
import { genFolderRelPath } from "../db-tables/DiskFileUtils";
import { sanitizeRelPath } from "../utils/OsPathUtils";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export const downloadWorkflowsZip = async (selectedList: Array<Workflow>) => {
  try {
    const exportName = `ComfyUI_workspace_workflows_${formatTimestamp(Date.now())}`;
    const zip = new JSZip();
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");

    // Log the selection for debugging
    console.log("Selected workflows for zip:", selectedList);

    for (const workflow of selectedList) {
      let folderPath;
      try {
        if (twoWaySyncEnabled) {
          folderPath = workflow.parentFolderID ?? "";
        } else {
          folderPath = await genFolderRelPath(workflow.parentFolderID ?? null)
            .then(async (path) => {
              return sanitizeRelPath(path ?? "");
            })
            .catch((err) => {
              console.error("Error generating folder path:", err);
              return "";
            });
        }

        // Ensure the folder path exists in the zip
        const folder = zip.folder(folderPath);
        // Log the folder path for debugging
        console.log(`Adding workflow to folder: ${folderPath}`);

        // Adding the JSON file to the corresponding folder
        if (folder) {
          folder.file(`${workflow.name}.json`, workflow.json);
        } else {
          console.error("Failed to create folder in zip for workflow:", workflow.name);
        }
      } catch (error) {
        console.error("Error processing workflow:", workflow.name, error);
      }
    }

    // Generate the zip and trigger the download
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(content);
      a.download = `${exportName}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href); // Clean up
      console.log("Download initiated for zip file:", exportName);
    }).catch((error) => {
      console.error("Error generating zip file:", error);
    });

  } catch (error) {
    console.error("Error in downloadWorkflowsZip:", error);
  }
};
