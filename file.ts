import fs from "fs";

const data: string = "hello, node.js!";
fs.writeFileSync("exemple.text", data);
console.log("file is wrirren successfully!");