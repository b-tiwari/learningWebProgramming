
function addTwoNumbers () {
        $('#answer').text ( 
            addNumbers( $('#num1').val(), $('#num2').val() )
        );
}

function multiplyNumbers() {
     $('#answer').text (  
        multiply( $('#num1').val(), $('#num2').val()  ) 
     );
}


$(function() {
  showBanner();
  $('#btnAdd').on('click', addTwoNumbers);

});



function showBanner(){
    var hiddenBox = $("#banner-message" );
    $("#button-container button" ).on( "click", function( event ) {
        hiddenBox.show(2000);
    });
}








