
function myFunction() {   

    var num = parseInt(document.getElementById("value").value);


    
    if(num % 2 == 0) { 
        document.getElementById("myNum").innerHTML = num + " is even a number"
    } else {
        document.getElementById("myNum").innerHTML = num + " is odd a number"
    }
};