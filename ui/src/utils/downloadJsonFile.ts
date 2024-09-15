export function downloadJsonFile(jsonStr: string, fileName: string) {
  try {
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.json`;
    
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);  // Clean up the URL
    console.log("Download initiated for JSON file:", fileName);
  } catch (error) {
    console.error("Error downloading JSON file:", error);
  }
}
