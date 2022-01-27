function renderButtonsClicked() {


    if (inputs.resultScreen.textContent.length < 13) {
        switch (buttonClicked) {
            case "X":
                inputs.resultScreen.textContent += "*";
                break;
            case "=":
                inputs.resultScreen.textContent = calculateTheExpressionAndReturn();
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

function calculateTheExpressionAndReturn() {
    return eval(inputs.resultScreen.textContent);
}