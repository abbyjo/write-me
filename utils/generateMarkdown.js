// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
    //note 2 self: 'data' passed in will be the answers user provides in a data object
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  ## Description <br> 
  ${data.description} <br>
  ## Table of Contents <br>
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Questions](#questions) <br>
  ## Installation <br>
  ${data.description} <br>
  ## Usage <br>
  ${data.usage} <br>
  ## License <br>
  ${renderLicenseSection(data.license)} <br>
  ## Contributing <br>
  ${data.contribution} <br>
  ## Tests <br>
  ${data.test} <br>
  ## Questions <br>
  If you have any additional questions you can reach me at <a href="https://github.com/${data.github}" or ${data.email}! 

`;
}

module.exports = generateMarkdown;
