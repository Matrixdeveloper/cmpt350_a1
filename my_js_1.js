// Name: Yue Weng
// NSID: yuw857
// Student number: 1121 9127
// CMPT350 Assignement1


// static value
var intNum2 = 100;

function hello() {
    document.getElementById("demo").innerHTML = "Hello World!";
}


function multiply(intNum1) {
    return intNum1 * intNum2;
}

function revert() {
    var x = document.getElementById("rev_b");

    if (x.getAttribute('state') == 0){
        x.innerHTML = "NEW!";
        x.setAttribute('state', 1);
    }
    else {
        x.innerHTML = "OLD!";
        x.setAttribute('state', 0);
    }
}


