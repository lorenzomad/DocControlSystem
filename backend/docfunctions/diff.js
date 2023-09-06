const Diff = require('diff');


const diff = (lhs, rhs) => {
    // creates the diff of the left side to the right side sentence
    const diff = Diff.diffWords(lhs, rhs);
       
    return diff;
}


module.exports = diff

