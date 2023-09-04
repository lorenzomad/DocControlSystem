let reader = require('any-text');

const extractText = (filepath) => {
    // extracts the text from the provided document.
    let text = []
    reader.getText(filepath).then(function (data) {
        console.log(data);
        text.push(data)
      });
    return text
}
