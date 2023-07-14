const path = require('path');
// console.log(path.sep);
const filePath = path.join('/content', 'path.text');

// console.log(filePath);

const base = path.basename(filePath);
// console.log(base);

const resolve = path.resolve(__dirname, 'content', 'path.txt');
console.log(resolve);