// pull file system module
const fs = require('fs');

generateLiveLink = liveLink => {
    if (!liveLink) {
        return '';
    }
    else {
        return `
## Live Project URL

${liveLink}`
    }
}

markdownGenerator = (data) => {
    const { name, description, screenshot, runApplication, liveLink, badge, usage, email, github, contributing, test} = data;
    return `# ${name}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Screenshot](#screenshot)

* [Questions](#questions)


## Description

${description}

## Project Installation

${runApplication}


## End Usage

${usage}


## How to contribute

${contributing}


## Testing Setup

${test}


## Screenshot

![Generated Readme Screenshot](${screenshot} "Generated Readme Screenshot")

${generateLiveLink(liveLink)}


## Questions

Send questions to ${email} or check out my [GitHub profile.](www.github.com/${github})


# License

${badge}
`
}

readmeGenerator = markDown => {
    fs.writeFile('./dist/readme.md', markDown, err => {
        if (err) {
            reject(err);
            return;
        }
    })
}

module.exports = {markdownGenerator, readmeGenerator};