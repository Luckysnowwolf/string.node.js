import path from "path";
import {add, subtract, reverse}from "./stringUnits.ts"
import fs from "fs";

console.log(add(5, 3))
console.log(subtract(5, 2))
const sentence = ("its better to know node then to not know it");

const reversedSentence = reverse(sentence);
fs.writeFileSync('reversed.txt', reversedSentence);

const filePath = path.join(__dirname, 'reversed.txt');
console.log(`Reversed sentence saved at: ${filePath}`);


function reverseString (str: string): string {
return str.split("").reverse().join("");
}
const textRevers =
reverseString ("its good to learn node to be able to code more effectivly and fast when you get it down and know how to use it");
console.log(reverseString);
