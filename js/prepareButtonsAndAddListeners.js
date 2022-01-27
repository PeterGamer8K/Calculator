function prepareButtonsAndAddListeners() {
    getTheButtonsInputs();
    addEventListenersToButtons();

}


function getTheButtonsInputs() {
    //Getting the numbered buttons
    inputs.numbers = [];

    for (let i = 0; i < 10; i++) {
        inputs.numbers.push($(`#btn-${i}`));

    }
    //Creating the buttons section of operators
    inputs.operators = {};

    //Getting the operation buttons
    inputs.operators.plusBtn = document.querySelector("#btn-plus");
    inputs.operators.CBtn = $("#btn-C");
    inputs.operators.backspaceBtn = $("#btn-backspace");
    inputs.operators.dividerBtn = $("#btn-divider");
    inputs.operators.multiplierBtn = $("#btn-multiplier");
    inputs.operators.minusBtn = $("#btn-minus");
    inputs.operators.equalBtn = $("#btn-equal");
    inputs.operators.pointBtn = $("#btn-point");

    //Getting the result screen

    inputs.resultScreen = $("#result");


}

function addEventListenersToButtons() {

    //Adding the event listeners to the numbered buttons
    for (let i = 0; i < 10; i++) {


        inputs.numbers[i].addEventListener("click", whenClicked);
    }

    //Adding the event listeners to the operations buttons
    for (const btn in inputs.operators) {
        inputs.operators[btn].addEventListener("click", whenClicked)
    }

}

//This function is called when the buttons are clicked
function whenClicked(event) {
    buttonClicked = event.srcElement.firstChild.data;

    let previousButtonClickedIsOperator;
    let buttonClickedIsOperator;

    switch (previousButtonClicked) {
        case "X":
            previousButtonClickedIsOperator = true;
            break;
        case "/":
            previousButtonClickedIsOperator = true;
            break;
        case "+":
            previousButtonClickedIsOperator = true;
            break;
        case "-":
            previousButtonClickedIsOperator = true;
            break;
        case ".":
            previousButtonClickedIsOperator = true;
            break;
        default:
            previousButtonClickedIsOperator = false;
            break;
    }

    switch (buttonClicked) {
        case "X":
            buttonClickedIsOperator = true;
            break;
        case "/":
            buttonClickedIsOperator = true;
            break;
        case "+":
            buttonClickedIsOperator = true;
            break;
        case "-":
            buttonClickedIsOperator = true;
            break;
        case ".":
            buttonClickedIsOperator = true;
            break;
        default:
            buttonClickedIsOperator = false;
            break;
    }

    if (previousButtonClickedIsOperator) {
        if (buttonClickedIsOperator) {
            canWriteOperator = false;
        } else {
            canWriteOperator = true;
        }
    } else {
        canWriteOperator = true;
    }
    if (canWriteOperator) {
        renderButtonsClicked();
        canWriteOperator = true;
    }
    previousButtonClicked = buttonClicked;

}