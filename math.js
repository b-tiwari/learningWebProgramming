
var logger = function(msg){
    console.log(msg);
}

var BharatsModule = {
    
    addNumbers: function(a, b) {
        logger('parameters passed are: ' + a + ' and ' + b );
        return parseInt(a) + parseInt(b);
    },

    multiply: function(num1, num2) {
        logger('parameters passed are: ' + num1 + ' and ' + num2 );
        return parseInt(num1) * parseInt(num2);
    }

};


