console.log( 'script.js sourced' );

$( document ).ready( function() {
  // out button click
    console.log( "jQuery ready" );
    $('#sendButton').on('click', function(){
      console.log( 'calc clicked' );
      // gather info and send to server
      startServerSideOperation();
    });
});


var processResponse = function( response )
{
  console.log( 'in processResponse: ' + response );
  // new p tag
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  // empty our output div
  document.getElementById('outputDiv').innerHTML='';
  // append newParagraph to output
  document.getElementById('outputDiv').appendChild( newParagraph );
}

function startServerSideOperation()
{
  console.log( 'in startServerSideOperation' );
  // assemble object from input
  var x = $('#input1').val();
  console.log( 'input1: ' + x );
  var inputObject ={
    "x": x
  };
  console.log( inputObject );
  // post with ajax;
  $.ajax({
   type: "POST",
   data: inputObject,
   url: "/serverSideRepresent",
   success: function(data){
          console.log( 'post successfull: ' + data );
          // if post is successful we've received back "data"
          // send "data" to processResponse to do something with it
          processResponse( data );
    },
    error: function(){
         console.log( 'error connecting to server' );
     }
  });
}
