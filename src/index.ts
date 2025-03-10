import readline from "readline";

import { fetchFiles } from "./fetch_files";
import { ascii } from "./ascii";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(ascii());

// Sends input to fetchFiles function
rl.question("Complete directory path: ", (path: string) => {
  path = path.trim();

  if (path.length <= 0) {
    console.error("Error parameter passed is empty.");
    rl.close();

    return;
  }

  console.log(`${fetchFiles(path)}`);

  rl.close();
});
