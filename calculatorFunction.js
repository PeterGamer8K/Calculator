const readline = require('readline-sync');
const inputs = {};
main();



function main() {

    getTheMathExpression();
    calculateTheExpression(...inputs.expressionArray);

    console.log(inputs.result);
}

function getTheMathExpression() {
    inputs.firstArgumentString = readline.question("Type the first argument: ");
    inputs.operatorString = readline.question("Type the operator: ");
    inputs.secondArgumentString = readline.question("Type the second argument: ");

    inputs.expressionArray = [inputs.firstArgumentString, inputs.operatorString, inputs.secondArgumentString];
}

function calculateTheExpression(firstArgumentString, operatorString, secondArgumentString) {
    const firstArgumentNumber = parseInt(firstArgumentString);
    const secondArgumentNumber = parseInt(secondArgumentString);
    let result = "";

    switch (operatorString) {
        case "+":
            result = firstArgumentNumber + secondArgumentNumber;
            break;
        case "-":
            result = firstArgumentNumber - secondArgumentNumber;
            break;
        case "/":
            result = firstArgumentNumber / secondArgumentNumber;
            break;
        case "*":
            result = firstArgumentNumber * secondArgumentNumber;
            break;
        default:
            throw new Error("Invalid operator");
    }

    inputs.result = result;
}