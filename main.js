#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: 'quest',
        type: 'input',
        message: 'Enter your sentence to count words?',
    }]);
const sentence = answer.quest.trim().split(" ");
console.log(sentence);
console.log(`Here is your sentence Length ${sentence.length}`);
