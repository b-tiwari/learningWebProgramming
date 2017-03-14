
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

});


//Changed from .show() to .toggle() so that the same button can be used to show and hide
function showBanner() {
    var hiddenBox = $("#banner-message");
    $("#button-container button").on("click", function (event) {
        hiddenBox.toggle();
    });
}








