//Declaring the globals variables
const inputs = {};
const $ = document.querySelector.bind(document);

//Here the program start
main();

function main() {


    getTheButtonsInputs();
    addEventListenersToButtons();

}


function getTheButtonsInputs() {
    //Creating the array to store the buttons that have numbers
    inputs.numberedButtons = [];

    //For every numbered button element this "for" is adding to the array
    for (let i = 0; i < 10; i++) {
        inputs.numberedButtons.push($(`#btn-${i}`));
    }

    //Creating the section of the operators buttons
    inputs.operatorsButtons = {};

    //Getting the operation buttons
    inputs.operatorsButtons.plusBtn = $("#btn-plus");
    inputs.operatorsButtons.CBtn = $("#btn-C");
    inputs.operatorsButtons.backspaceBtn = $("#btn-backspace");
    inputs.operatorsButtons.dividerBtn = $("#btn-divider");
    inputs.operatorsButtons.multiplierBtn = $("#btn-multiplier");
    inputs.operatorsButtons.minusBtn = $("#btn-minus");
    inputs.operatorsButtons.equalBtn = $("#btn-equal");
    inputs.operatorsButtons.pointBtn = $("#btn-point");

    inputs.resultScreen = $("#result");

    console.log(inputs);
}

function addEventListenersToButtons() {

    //Adding the event listeners to numbered buttons
    for (let i = 0; i < 10; i++) {
        inputs.numberedButtons[i].addEventListener('click', (event) => {
            const buttonClicked = event.srcElement.firstChild.data;
            whenButtonClicked(buttonClicked);
        });
    }

    //Adding the event listeners to the operations buttons

    for (const btn in inputs.operatorsButtons) {
        inputs.operatorsButtons[btn].addEventListener('click', (event) => {
            const clickedButtonCharacter = event.srcElement.firstChild.data;
            whenButtonClicked(clickedButtonCharacter);
        });
    }

    function whenButtonClicked(clickedButtonCharacter) {
        console.log(clickedButtonCharacter);
    }
}