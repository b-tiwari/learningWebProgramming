
function addTwoNumbers() {
    
    logger('inside addTwoNumbers function');

    $('#answer').text(
        BharatsModule.addNumbers($('#num1').val(), $('#num2').val())
    );
}

function multiplyNumbers() {
    $('#answer').text(
        BharatsModule.multiply($('#num1').val(), $('#num2').val())
    );
}


$(function () {
    showBanner();
    
    $('#btnAdd').on('click', addTwoNumbers);
    $('#btnGetData').on('click', getData);
});


//Changed from .show() to .toggle() so that the same button can be used to show and hide
function showBanner() {
    var hiddenBox = $("#banner-message");
    $("#button-container button").on("click", function (event) {
        hiddenBox.toggle();
    });
}

function getData(){
    $.ajax(
    {
        url: 'http://jsonplaceholder.typicode.com/posts/1',
        type: 'GET',
        success: function(myResults){
            console.log (JSON.stringify(myResults));
            $('#results').text(myResults.title);
        },
        error: function(xhr,status,error){
            $('#results').text("ERROR - " + error);
        }
    }
    );

}








