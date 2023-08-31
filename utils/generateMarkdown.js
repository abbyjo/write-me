//Function to render license
function renderLicenseBadge(license) {
  if (license === "None") {return ""
} else if (license === "MIT") {return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if (license === "Apache 2.0") {return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (license === "ISC") {return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
} else if (license === "MPL 2.0") {return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}
}

//Function to render license section
function renderLicenseSection(license) {
  if (license === "None") {return ""
} else {return `This project is covered under the ${license} license.`}

}

// Function to generate markdown for README
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
  If you have any additional questions you can reach me at <a href="https://github.com/${data.github}"> my Github page </a> or at ${data.email}! 

`;
}

module.exports = {generateMarkdown}
