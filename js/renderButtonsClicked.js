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
                deleteLastCharacterInResultScreen();
                break;
            case "C":
                //clear the result screen
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


function deleteLastCharacterInResultScreen() {
    const resultText = $("#result").textContent;
    $("#result").textContent = resultText.substring(0, resultText.length - 1);
}