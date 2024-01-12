const fs = require('fs');
const licenseFile = './LICENSE';
const distFile = './dist/shell.css';

// get version
var pjson = require('../package.json');

// prepend license to dist file
const license = fs.readFileSync(licenseFile, 'utf8');
const dist = fs.readFileSync(distFile, 'utf8');

const version = pjson.version;
const header = `/*
===========================================================================================
.oooooo..o oooo                  oooo  oooo            .oooooo.    .oooooo..o  .oooooo..o 
d8P'    \`Y8 \`888                  \`888  \`888           d8P'  \`Y8b  d8P'    \`Y8 d8P'    \`Y8 
Y88bo.       888 .oo.    .ooooo.   888   888          888          Y88bo.      Y88bo.      
 \`"Y8888o.   888P"Y88b  d88' \`88b  888   888          888           \`"Y8888o.   \`"Y8888o.  
     \`"Y88b  888   888  888ooo888  888   888  8888888 888               \`"Y88b      \`"Y88b
oo.d8P  888   888  888    .o  888   888          \`88b    ooo  oo     .d8P oo     .d8P 
8""88888P'  o888o o888o \`Y8bod8P' o888o o888o          \`Y8bood8P'  8""88888P'  8""88888P'
===========================================================================================
Version ${version}

${license}
*/
`;
fs.writeFileSync(distFile, header + dist);