// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == 'MIT') {
    data.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) This project covered under the MIT license.`
    return data;
  }
  else if (data.license == 'Apache') {
    data.badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) This project covered under the Apache license.`
    return data;
  }
  else if (data.license == 'ISC') {
    data.badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) This project covered under the ISC license.`
    return data;
  }
  else {
    data.badge = ('')
    return data;
  }
}

module.exports = renderLicenseBadge;
