function prepareButtons() {
    getTheButtonsInputs();
    addEventListenersToButtons();

}

function addEventListenersToButtons() {
    for (let i = 0; i < 10; i++) {

        //When the buttons is clicked
        inputs.numbers[i].addEventListener("click", whenClicked);
    }
}

function getTheButtonsInputs() {
    //Getting the numbered buttons
    inputs.numbers = [];

    for (let i = 0; i < 10; i++) {
        inputs.numbers.push($(`#btn-${i}`));

    }

    //Getting the result screen

    inputs.resultScreen = $("#result");


}

function whenClicked(button) {
    buttonClicked = button.srcElement.firstChild.data;
    renderButtonsClicked(button)
}