console.log('CALCULATOR');

//program of calculator


const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
let string = '';
console.log(buttons);
// Array.from(buttons).forEach(function (button) {
//     button.addEventListener('click', calculator)

for(let button of buttons) {
    button.addEventListener('click',calculator);

    function calculator(e) {
        // console.log(e.target);
        // input.value = e.target.innerHTML;
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            input.style.textAlign = 'right';
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
            input.style.paddingRight = '10px';
        }
        else if (e.target.innerHTML == 'Back') {
            string = string.slice(0, string.length - 1);
            // console.log(string);
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    }
}

