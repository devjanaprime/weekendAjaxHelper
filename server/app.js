var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
// for posts
var urlencodedParser=bodyParser.urlencoded( {extended: false } );

//spin up server
app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'server up on 8080');
});

// static files
app.use( express.static( 'public' ) );

// base url
app.get('/', function( req, res ){
  // our main page
  res.sendFile( path.resolve('views/index.html') );
});

// post that is called by the ajax
app.post( '/serverSideRepresent', urlencodedParser, function( req, res ){
  console.log( 'in serverSideRepresent, req.body.x: ' + req.body.x );
  // client/server interaction is always with strings
  // so these need to be converted to numbers
  var double = Number( req.body.x ) + Number( req.body.x  );
  // then back to a string when returning
  var returnText = sum.toString()
  res.send( returnText );
});
