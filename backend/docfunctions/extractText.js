let reader = require('any-text');

const extractText = async (filepath) => {
    // extracts the text from the provided document.
    
    let data = await reader.getText(filepath)
    return data
}
module.exports = extractText