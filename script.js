function outer(input1) {
    input1 = document.getElementById("num1").value;
    return function (input2) {
        input2 = document.getElementById("num2").value;
        return function (input3) {
            input3 = document.getElementById("num3").value;
            alert("The result of three input is = " + input1 * input2 * input3);
            
        }
    }
}
outer(input1)(input2)(input3);