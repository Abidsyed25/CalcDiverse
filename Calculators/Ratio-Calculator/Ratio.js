function calculate(event) {
    event.preventDefault();
    let n1 = document.getElementById('Number1').value
    let n2 = document.getElementById('Number2').value
    if(n1 && n2) {
        if(n2 == 0) {
            (document.getElementById('result')).style.color = 'red';
            document.getElementById('result').innerHTML = "Number2 should not be equal 0."
        }else{
            (document.getElementById('result')).style.color = 'black';
            let result = n1 / n2;
            document.getElementById('result').innerHTML = result
        }
    }else {
        (document.getElementById('result')).style.color = 'red';
        document.getElementById('result').innerHTML = "Please Enter the appropriate values"
    }
}

function reset() {
    document.getElementById('result').innerHTML = ""
}