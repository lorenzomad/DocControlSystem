require('colors');
const Diff = require('diff');


export default diff = (lhs, rhs) => {
    
    const diff = Diff.diffWords(one, other);
    console.log(diff)
    
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
