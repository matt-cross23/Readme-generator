// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// License Badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    // cases for other options
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      case "BSD 2-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      case "MIT license":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      case "Eclipse Public License version 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
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
    case "BSD 3-Clause License":
      return "(https://opensource.org/licenses/BSD-3-Clause)"
      case "BSD 2-Clause License":
      return "(https://opensource.org/licenses/BSD-2-Clause)"
    case "GNU GPL v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
      case "MIT license":
      return "(https://opensource.org/licenses/MIT)"
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)"
      case "Eclipse Public License version 1.0":
      return "(https://opensource.org/licenses/EPL-1.0)"
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
    case 'BSD 3-Clause license':
    return "License"
      case "BSD 2-Clause License":
      return "Licenses"
    case "GNU GPL v3":
      return "License"
      case "MIT license":
      return "License"
    case "Mozilla Public License 2.0":
      return "License"
      case "Eclipse Public License version 1.0":
      return "License"
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

  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#Usage)
  4.[License](#License)
  5.[Contributing](#Contributing)
  6.[Tests](#Tests)
  7.[Questions](#Questions)
  


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
