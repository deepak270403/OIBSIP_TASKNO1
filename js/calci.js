// const outputLower = document.querySelector('.outputLowerplay');
const buttons = document.querySelectorAll('button');
// let outputUpper = document.querySelector('#upper');
let outputUpper = document.getElementById('upper');
let outputLower = document.getElementById('lower');

const nums = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*',')','(','.','%']

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            outputUpper.innerHTML = '';
            outputLower.innerText = '0';
        }
        else if (item.id == 'backspace') {
            let string = outputLower.innerText.toString();
            if(string != 0){
                outputLower.innerText = string.substr(0, string.length - 1);
            }
            if(string.length == 1){
                outputLower.innerText = '0';
                outputUpper.innerText = '';

            }
        }
        else if (outputLower.innerText != '' && item.id == 'equal') {
            let exp = outputLower.innerHTML;
            outputUpper.innerHTML = exp;
            exp = exp.replace(/x/g, '*').replace(/÷/g, '/');
            let result;
            try {
                result = eval(exp);
                // if decimal number more than 4 decimal places
                if (result.toString().indexOf('.') !== -1) {
                    result = result.toFixed(4);
                }
            } catch (e) {
                result = 'Error';
            }
            outputLower.innerHTML = result;
        }
        else {
            let lastOperator = outputLower.innerHTML.slice(-1);
            if (lastOperator.includes('+', '-', 'x', '÷')) {
                outputLower.innerHTML += item.id;
            } 
            if (item.id == '+/-'){
                let exp = parseInt(outputLower.innerHTML);
                outputUpper.innerHTML = '&plusmn;' + exp ;
                res = -1*exp;
                outputLower.innerHTML = res;

            }
            if (item.id == 'sqrt'){
                let exp = outputLower.innerHTML;
                outputUpper.innerHTML = 'sqrt('+ exp + ')';
                outputLower.innerHTML = '';
                outputLower.innerHTML = Math.sqrt(exp);

            }
            if (item.id == 'sq'){
                let exp = outputLower.innerHTML;
                outputUpper.innerHTML = exp + '&sup2;';
                outputLower.innerHTML = exp*exp;
            }
            else{
                if(outputLower.innerHTML == '0'){
                    outputLower.innerHTML = '';
                }
            }
            if(nums.includes(item.id))
            {
                outputLower.innerHTML += item.id;
            }
        }
    }
})

// keyboard
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        outputUpper.innerText = '';
        outputLower.innerText = '0';
    }
    else if (e.key == 'Backspace') {
        let string = outputLower.innerText.toString();
        if(string != 0){
            outputLower.innerText = string.substr(0, string.length - 1);
        }
        if(string.length == 1){
            outputLower.innerText = '0';
            outputUpper.innerText = '';
        }
    }
    else if (outputLower.innerText != '' && e.key == 'Enter') {
        e.preventDefault();
        let exp = outputLower.innerHTML;
        outputUpper.innerHTML = exp;
        exp = exp.replace(/×s/g, '*').replace(/÷/g, '/');
        eval(exp)
        let result;
        try {
            result = eval(exp);
            // if decimal number more than 4 decimal places
            if (result.toString().indexOf('.') !== -1) {
                result = result.toFixed(4);
            }
        } catch (e) {
            result = 'Error';
        }
        outputLower.innerHTML = result;
    }
    else if (outputLower.innerText == '' && item.id == 'Enter') {
        outputLower.innerText = 'Empty!';
        setTimeout(() => (outputLower.innerText = ''), 2000);
    }
    else if (e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3'|| e.key == '4'|| e.key == '5'|| e.key == '6' || e.key == '7'|| e.key == '8'|| e.key == '9') {
        if(outputLower.innerHTML == '0'){
            outputLower.innerHTML = '';
        }
        outputLower.innerText += e.key;
    }
    else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '.' || e.key == ')'|| e.key == '(') {
        if(outputLower.innerHTML == '0'){
            outputLower.innerHTML = '';
        }
        outputLower.innerText += e.key;
    }
});

//theme
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}