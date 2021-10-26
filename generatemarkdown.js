function generateMarkdown(data) {

     // License Logic
        let license = `${data.license}`;
        let licenseText = '';
        let licenseURL = '';

        if (license === 'GNU AGPLv3') {
            licenseText = 'GNUAGPLv3';
            licenseURL = 'https://choosealicense.com/licenses/agpl-3.0/'; };
        if (license === 'Mozilla Public License 2.0') { 
            licenseText = 'MozillaPublicLicense2.0';
            licenseURL = 'https://choosealicense.com/licenses/mpl-2.0/'; };
        if (license === 'Apache License 2.0') { 
            licenseText = 'ApacheLicense2.0';           
            licenseURL = 'https://choosealicense.com/licenses/apache-2.0/';};
        if (license === 'MIT License') { 
            licenseText = 'MITLicense';        
            licenseURL = 'https://choosealicense.com/licenses/mit/'; };
        if (license === 'The Unlicense') { 
            licenseText = 'TheUnlicense';    
            licenseURL = 'https://choosealicense.com/licenses/unlicense/'; };
    
    //Template for markdown 
    let template =
`# ${data.title}
## Description
${data.description}
![badge](https://img.shields.io/badge/license-${licenseText}-brightorange)
`;
    //Table of Contents
    let tableOfContents =
`## Table of Contents`;
  if (data.install) {
    tableOfContents +=
      `
  * [Installation](#installation)`
  };
  if (data.instructions) {
    tableOfContents +=
      `
  * [Usage](#usage)`
  };
  if (data.contribution) {
    tableOfContents +=
      `
  * [Contribution](#contribution)`
  };
  if (data.test) {
    tableOfContents +=
      `
  * [Testing](#testing)`
  };
  template += tableOfContents;

  //add contact info and license
  template +=
    `
  * [Questions](#questions)`;
    template +=
    `
  * [License](#license)
    
    `;
  //installation
  if (data.install) {
    template +=
      `
## Installation
    
  _Instructions for installation:_
  ${data.install}`
  };

  //usage
  if (data.instructions) {
    template +=
      `
      
## Usage
  _Instructions for use:_
  ${data.instructions}`
  };

//usage
if (data.screenshot) {
    template +=
        `
        
## Screenshot
![Screenshot](${data.screenshot})`
    };


  //contributions
  if (data.contributions) {
    template +=
      `
      
## Contribution
  _Are contributions welcome?_
  ${data.contributions}`
  };

  //testing
  if (data.test) {
    template +=
      `
      
## Testing
  _Instructions for testing application:_
  ${data.test}`
  };

  //questions
  template +=
      `
      
## Questions
      
  _For further questions:_
  ${data.contact}
  
  _Contact Info:_
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: [${data.email}](mailto:${data.email})`;
  
  template +=
    `
    
## License
      
  _This application uses the ${data.license} license._
      
  For more information please view the [license description](${licenseURL}).
  
  `;
  return template;
}

module.exports = generateMarkdown;