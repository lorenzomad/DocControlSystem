require('colors');
const Diff = require('diff');


const diff = (lhs, rhs) => {
    // creates the diff of the left side to the right side sentence
    const diff = Diff.diffWords(one, other);
    console.log(diff)
    
    //print the result (for debugging)
    diff.forEach((part) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
      process.stderr.write(part.value[color]);
    });
    
    console.log();
    return diff;
}

export default diff