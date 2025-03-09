import { fetchFiles } from "./fetch_files";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Sends input to fetchFiles function
rl.question("Full path to the directory: ", (path: string) => {
  console.log(`${fetchFiles(path)}`);

  rl.close();
});