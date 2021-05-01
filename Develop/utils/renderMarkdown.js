const fs = require('fs');

const renderLicenseBadge = license => {
  return license === 'Apache' ? `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-lightgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
  : license === 'MIT' ? `[![License: MIT](https://img.shields.io/badge/License-MIT-hotpink.svg)](https://opensource.org/licenses/MIT)`
  : license === 'Modzilla' ? `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)`
  : 'None Provided';
};

module.exports = renderMarkUp = (response) => {
  const markUp = 
`# __${response.projectTitle}__
## __Description__
${response.description}
## __Table of Contents__
* [Dependencies](#dependencies)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Badges](#badges)
* [ScreenShot](#screenshot)
* [Contributors](#contributors)
* [Contact Information](#questions)
* [Demo](#demo)
## __Dependencies__
${response.dependencies}
## __Tests__
${response.tests}
## __Installation__
  ${response.installation}
## __Usage__
${response.usage}
## __License__
__Copyright ${response.copyright_year} ${response.copyright_holder}__
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## __Badges__
${renderLicenseBadge(response.license)}
## __ScreenShot__
![Screenshot of Application](${response.image})
## __Contributors__
${response.contributors}
## __Questions__
If you would like to contribute to the project please contact me below: 
* [GitHub](https://github.com/${response.github})
* [E-mail](mailto:${response.email})
## __Demo__
![Application Demo](link to image / GIF)`

  fs.writeFile('../README.md', markUp, (err) => {
      err ? console.error(err) : console.log('File Written!');
  });
};