/**
 * Created by Soof on 15-05-28.
 */
var counter = 1;

var buttons = document.getElementById('go').addEventListener('click', function(){

    var buttonOne = document.getElementById('go');
    var changeBox = document.getElementById('box');

    
    counter++;

    if(counter % 2 == 0) {
        changeBox.style.display="block";
        buttonOne.style.background="#81C88C";
        buttonOne.style.border="1px solid #4C975A";
    }
    else {
        changeBox.style.display="none";
        buttonOne.style.background="#ff4a46";
        buttonOne.style.border="1px solid #962a29";
    }



});