// The second module should accept a number and convert it to a USD value.
// You can find good implementations of this online.

function convertedVal( number ) {
  return '$' + number.toLocaleString();
}



module.exports = convertedVal;
