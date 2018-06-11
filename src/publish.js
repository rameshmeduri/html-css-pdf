const pug = require('pug');
var path = require('path');
var filePath = path.resolve(__dirname, '../input/template.pug');
var compiledFunction = pug.compileFile(filePath);
var htmlStr = compiledFunction({
  name: 'Timothy'
});
console.log(htmlStr);
const HTMLToPDF = require('html5-to-pdf');
const inst = new HTMLToPDF({
  inputBody: htmlStr,
  outputPath: './output/report.pdf',
  include: [],
  renderDelay: 100,  
  options: {
    pageSize: 'A3',
    landscape: true,
    printBackground: true
  }
});

inst.build((err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

