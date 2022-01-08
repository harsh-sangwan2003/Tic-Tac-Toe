window.addEventListener('load', bindEvents);

let buttons;
function bindEvents() {

    buttons = document.getElementsByTagName('button');

    for (let btn of buttons) {

        btn.addEventListener('click', print);
    }
}

function reset() {

    document.getElementById('msg').innerText = '';

    for (let btn of buttons) {

        btn.innerText = '';
    }

    count = 0;
    flag = true;
    over = false;
}

const isNotBlank = (currentButton) => currentButton.innerText.length == 1
const areEqual = (one, two, three) => isNotBlank(one) && isNotBlank(two) && isNotBlank(three) &&
    (one.innerText == two.innerText) && (two.innerText == three.innerText)

let over = false;
function isGameOver() {

    if (areEqual(buttons[0], buttons[1], buttons[2]))
        over = true;

    else if (areEqual(buttons[3], buttons[4], buttons[5]))
        over = true;

    else if (areEqual(buttons[6], buttons[7], buttons[8]))
        over = true;

    else if (areEqual(buttons[0], buttons[4], buttons[8]))
        over = true;

    else if (areEqual(buttons[2], buttons[4], buttons[6]))
        over = true;

    else if (areEqual(buttons[0], buttons[3], buttons[6]))
        over = true;

    else if (areEqual(buttons[1], buttons[4], buttons[7]))
        over = true;

    else if (areEqual(buttons[2], buttons[5], buttons[8]))
        over = true;

    return over;

}
let flag = true;
let count = 0;

function print() {

    if (this.innerText.length == 0 && !over) {

        this.innerText = flag ? "X" : "0";
        count++;
        flag = !flag;
    }

    if (count >= 5) {

        if (isGameOver()) {

            let winner = !flag ? "X" : "0";
            document.getElementById('msg').innerText = `${winner} Wins!`;
            setTimeout(reset, 3000);
        }
    }

    if (count == 9 && !over) {

        document.getElementById('msg').innerText = `Game drawn!`;
        setTimeout(reset, 3000);
    }
}