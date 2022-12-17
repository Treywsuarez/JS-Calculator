// Functions to get our buttons
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

// Add click event listener function to our buttons to register and identify when each button is being clicked
buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText)
    })
})

// Functions created to map and give instructions to our calculator operators and buttons
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }

                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})