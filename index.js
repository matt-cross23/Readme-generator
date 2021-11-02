// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
// Add Questions to array and use template literals to pull data
const questions = [];
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "How are we",
      name: "class",
    },
    {
      type: "input",
      message: "What is your sign?",
      name: "yup",
    },
  ])
  .then((answers) => {
    const readMeContentanswers = generateReadMe(answers);

    // TODO: Create a function to write README file
    generateReadMe = ({title, description, table, installation, usage, license, contributing, tests, questions}) =>

    fs.writeFile("./README.MD", generateReadMe, function (err) {
        const readMeanswers = generateReadMe(answers)
      
     err ? console.log("error") : console.log("You've created a Readme!");

  })
});
// TODO: Create a function to initialize app
 function init()

// Function call to initialize app
init()
