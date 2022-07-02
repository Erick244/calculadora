let lastButton = '';

function calculator(button) {
    const display = document.querySelector('.tela');
    const displayLength = display.value.length;

    const isNumber = hasClass(button, 'number');
    const isOperator = hasClass(button, 'operator');
    const isFunction = hasClass(button, 'function');

    const buttonValue = button.value;

    if (isNumber) {
        displayLength == 1 && getFistButton(display) == '0'
            ? display.value = buttonValue
            : display.value += buttonValue;

        lastButton = 'number';
    } else if (isOperator) {
        lastButton == 'operator' ? null : display.value += buttonValue;
        lastButton = 'operator';
    } else if (isFunction) {
        switch (buttonValue) {
            case 'c':
                clear(display);
                break;
            case '=':
                calculate(display.value, display);
                break;
            case 'del':
                del(display, displayLength);
                break;
        }
    }
    resetZero(display);
}

function del(display, displayLength) {
    const count = display.value;
    const newCount = count.substring(0, displayLength - 1);
    display.value = newCount;
}

function calculate(count, display) {
    const res = eval(count);
    display.value = res;
}

function resetZero(display) {
    if (display.value == '') display.value = '0';
}

const clear = display => display.value = '0';

function getFistButton(display) {
    const fistButton = display.value.substring(1, -1);
    return fistButton;
}


function hasClass(elem, classe) {
    const classes = elem.classList;
    let hasClass = false;

    classes.forEach(c => {
        hasClass = c === classe;
    })

    return hasClass;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onclick = () => {
        calculator(button);
    }
})