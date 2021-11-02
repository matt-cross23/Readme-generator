// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What Is The Title Of Your Project?",
      name: "Project-Title",
    },
    {
      type: "input",
      message: "Please Describe Your Project",
      name: "description",
    },
    {
      type: "checkbox",
      message: "Select Options Listed in Your Table of Contents?(Optional)",
      name: "table",
      choices['Title', 'Description', 'Installation', "Usage", "License", "Contributions", "Tests", "Questions"]
    },
      {
      type: "input",
      message: "How Do You Install Your Project?",
      name: "installation",
    }, 
       {
      type: "input",
      message: "Who Should Be Given Credit? Please Link Their Github Profile",
      name: "credit",
    }, 
       {
      type: 'list',
      message: 'Which License/s Would You Like To Use?',
      name: 'license',
      choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
    },
      {
    type: "input",
      message: "How to Contribute To Your Project",
      name: "contributing",
    },
      {
   type: "input",
      message: "Please Provide Test Code Or Examples",
      name: "tests",
    },
      {
      type: "input",
      message: "Enter Ypur Github Username and Email",
      name: "question",
      }
  ]);
};
  // TODO: Create an array of questions for user input
  // Add Questions to array and use template literals to pull data
const questions = [${console.log(question)}];

  .then((answers) => {
    const readMeContentanswers = generateReadMe(answers);

    // TODO: Create a function to write README file
    generateReadMe = ({title, description, table, installation, usage, license, contributing, tests, questions}) =>
    "#Title 
     ${title}
     #Description 
     ${description} 
     #Table-of-Contents
     ${table}
     #Installation
     ${installation}
     #Usage
     ${usage}
     #License
     ${license}
     #Contributing
     ${contributing}
     #Tests
     ${tests}
     #Questions
     ${question}
     "
  

    fs.writeFile("./README.MD", generateReadMe, function (err) {
        const readMeAnswers = generateReadMe(answers)
      
     err ? console.log("error") : console.log("You've created a Readme!");

  })
});
// TODO: Create a function to initialize app
 function init()

// Function call to initialize app
init()
