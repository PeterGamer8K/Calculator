function renderButtonsClicked() {
    if (inputs.resultScreen.textContent.length < 13) {
        switch (buttonClicked) {
            case "X":
                inputs.resultScreen.textContent += "*";
                break;
            case "=":
                const resultToCalculate = inputs.resultScreen.textContent;
                inputs.resultScreen.textContent = eval(resultToCalculate);
                break;
            case "<":
                break;
            case "C":
                inputs.resultScreen.textContent = "";
                break;
            default:
                inputs.resultScreen.textContent += buttonClicked;
        }

    }

}