
function generateReadme(data) {
    // Licenses 
    let license = `${data.license}`;
    let licenseURL = '';

    if (license === 'GNU AGPLv3') { licenseURL = 'https://choosealicense.com/licenses/agpl-3.0/'; }
    if (license === 'Mozilla Public License 2.0') { licenseURL = 'https://choosealicense.com/licenses/mpl-2.0/'; }
    if (license === 'Apache License 2.0') { licenseURL = 'https://choosealicense.com/licenses/apache-2.0/'; }
    if (license === ' MIT License') { licenseURL = 'https://choosealicense.com/licenses/mit/'; }
    if (license === ' The Unlicense') { licenseURL = 'https://choosealicense.com/licenses/unlicense/'; }
}