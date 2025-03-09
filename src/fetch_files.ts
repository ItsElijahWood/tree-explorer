import fs from "fs";
import path from "path";

// Fetch the files, then into 
// the tree format 
export function fetchFiles(directory: string, depth: number = 0): string[] {
  const files = fs.readdirSync(directory);
  let tree: string[] = [];

  files.forEach(file => {
    const dirFile = path.join(directory, file);
    const stats = fs.statSync(dirFile);
    const indentation = ' '.repeat(depth * 2);
   
    if (stats.isDirectory()) {
      if (file.includes("node_modules") || file.includes("vendor") || file.includes(".git")) return;
      tree.push(`${indentation} ${file}/\n`);
      tree = tree.concat(fetchFiles(dirFile, depth + 1));
    } else {
      tree.push(`${indentation} ${file}\n`);
    }
  });

  return tree;
}