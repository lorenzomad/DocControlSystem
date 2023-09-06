var express = require('express');
var router = express.Router();
let extractText = require('../docfunctions/extractText.js')
let diff = require('../docfunctions/diff.js')


const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+ '.docx')
  }
})

const upload = multer({ storage: storage })


const generateDiff = async (file1, file2) => {
  text1 = await extractText(file1);
  text2 = await extractText(file2);

  return diff(text1, text2)
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* POST files for diff request. */
router.post('/diff', upload.array('files[]', 2), function(req, res, next) {
  console.log(req.files)
  const document1 = req.files[0].path
  const document2 = req.files[1].path

  const documentDiff = generateDiff(document1, document2)

  
  documentDiff.then(data => {
    console.log(data);
    res.json( {diff: data});
  })
});

module.exports = router;

