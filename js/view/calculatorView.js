const view = {
    resultDisplay: document.getElementById('result'),
    canPrint: function(messageLength) {
        if (this.resultDisplay.innerHTML.length + messageLength <= 12) {
            return true;
        }
        return false;
    },
    printInDisplay: function(message) {
        if (this.canPrint(message.length)) {

            this.resultDisplay.innerHTML += message;
        }
    },
    deleteTextInDisplay: function() {
        this.resultDisplay.innerHTML = "";
    }
};