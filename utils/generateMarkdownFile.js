// pull file system module
const fs = require('fs');

generateLiveLink = liveLink => {
    if (!liveLink) {
        return '';
    }
    else {
        return `
## Link to Live URL

${liveLink}
        `

    }
}

generateMarkdown = (data) => {
    const { name, description, screenshot, runApplication, liveLink, badge, usage, email, github, contributing, test} = data;
    return `# License

${badge}


# ${name}


## Description

${description}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Screenshot](#screenshot)

* [Questions](#questions)


## Installation

${runApplication}


## Usage

${usage}


## Contributing

${contributing}


## Testing

${test}


## Screenshot of Generated Document

![Generated Readme Screenshot](${screenshot} "Generated Readme Screenshot")

${generateLiveLink(liveLink)}


## Questions

Send questions to email ${email} or check out my [GitHub profile.](www.github.com/${github})
    `
}

generateReadme = markDown => {
    fs.writeFile('./dist/readme.md', markDown, err => {
        if (err) {
            reject(err);
            return;
        }
    })
}

module.exports = {generateMarkdown, generateReadme};