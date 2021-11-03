// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    /* Pass your questions in here */
    {
      type: "input",
      message: "What Is The Title Of Your Project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please Describe Your Project",
      name: "description",
    },

     {
      type: "checkbox",
      message: "Please Enter Criteria for Table of Content",
      name: "table",
      choices:["Description", 
      "Installation", 
      "Usage", 
      "Contributing", 
      "Tests", 
      "Questions"]
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
      choices: ['Apache License 2.0', 'BSD 3-Clause license', 'BSD 2-Clause license', 'GNU General Public License v3 (GPL)', 'MIT license', 'Mozilla Public License 2.0', 'Eclipse Public License version 1.0']
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
      message: "Enter Your Github Username",
      name: "question",
      },
      {
        type: "input",
        message: "Enter Your Email",
        name: "question2",
        }
  ];


// TODO: Create a function to initialize app
  function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
      const generatedReadMe = generateMarkdown(answers);
  console.log(generatedReadMe)
  
      // TODO: Create a function to write README file
      fs.writeFile("./dist/README.MD", generatedReadMe, function (err) {
       err ? console.log("error") : console.log("You've created a Readme!");
    })
  });
  }

// Function call to initialize app
 init()
