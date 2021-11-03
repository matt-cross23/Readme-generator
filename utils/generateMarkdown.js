// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License Badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    // cases for other options
    default:
      return ""
    }
}

// TODO: Create a function that returns the license link in the table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0':
return '(https://opensource.org/licenses/Apache-2.0)'
default: 
return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'Apache License 2.0':
    return "License"
    case '':

    default:
      return ""
  }
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  // licenseLink
  const licenseSection = renderLicenseSection(data.license)
  const LicenseLink = renderLicenseLink(data.license)

  return `${licenseBadge}
  # **${data.title}**

  ## Table Of Contents

  1.[Description]#(description)
  2.[Installation]#(installation)
  3.[Usage]#(Usage)
  4.[License]#($License)
  5.[Contributing]#(Contributing)
  6.[Tests]#(Tests)
  7.[Questions] #(Questions)
  


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## ${licenseSection}
  ${LicenseLink}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  This site was built by [${data.question}] https://github.com/${data.question} 
  Contact me at: ${data.question2}
  :grinning:
  `;
}

module.exports = generateMarkdown;
