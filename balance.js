// The third module should require the other two modules
// (i.e. Module One and Module Two). It should also have two exported functions:
// The first function should call Module 2, passing the result of Module 1 as an argument.
// The second function should return the text “Account balance: \n”.

var rando = require( './rando' );
var dollarVal = require( './dollarVal' );

var balance = {
  callingModTwo: function() {
    return dollarVal(rando(100, 1000000));
  },
  returnText: function() {
    return 'Account Balance: \n';
  }
};

module.exports = balance;
