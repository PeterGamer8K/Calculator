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
                deleteLastCharacterInResultDiv();
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


function deleteLastCharacterInResultDiv() {
    const resultText = $("#result").textContent;
    $("#result").textContent = resultText.substring(0, resultText.length - 1);
}