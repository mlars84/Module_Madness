// Finally, in the server.js file use the functions from Module 3 to produce
// the following output:

var http = require( 'http' );
var balance = require( './balance' );

http.createServer(function( req, res ){
  res.writeHead( 200 );
  res.write( balance.returnText() );
  res.write( balance.callingModTwo() );
  res.end();
}).listen( 3000 );

// console.log('test');
