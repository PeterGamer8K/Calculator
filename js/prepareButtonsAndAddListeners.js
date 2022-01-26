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
    inputs.operators.igualsBtn = $("#btn-iguals");
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
    renderButtonsClicked();
}