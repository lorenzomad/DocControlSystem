var express = require('express');
var router = express.Router();
let extractText = require('../docfunctions/extractText.js')
let diff = require('../docfunctions/diff.js')


const generateDiff = async (file1, file2) => {
  text1 = await extractText(file1);
  text2 = await extractText(file2);

  textDiff = diff(text1, text2)
  
}

generateDiff('test_docs/trial_document.docx', 'test_docs/trial_document_2.docx')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

