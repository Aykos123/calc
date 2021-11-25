function plus() {
    var num1, num2, result ;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1+num2;
    document.getElementById('otvet').innerHTML = result;
}

function minus() {
    var num1, num2, result ;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1-num2;
    document.getElementById('otvet').innerHTML = result;
}

function umnizhit() {
    var num1, num2, result ;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1*num2;
    document.getElementById('otvet').innerHTML = result;
}
function razdilit() {
    var num1, num2, result ;
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);
    result = num1/num2;
    document.getElementById('otvet').innerHTML = result;
    send2();

    addEventListener(num2); {
        oncuechange(); {
            function nerazdelit() {
                razdilit.disable = !!num2;

            }

        }

    }
}



