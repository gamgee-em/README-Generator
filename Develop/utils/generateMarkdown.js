// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === 'Apache' ? `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-lightgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
  : license === 'MIT' ? `[![License: MIT](https://img.shields.io/badge/License-MIT-hotpink.svg)](https://opensource.org/licenses/MIT)`
  : license === 'Modzilla' ? `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)`
  : 'None Provided';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


module.exports = renderLicenseBadge;
