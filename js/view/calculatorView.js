const view = {
    resultDisplay: document.getElementById('result'),
    canPrint: function() {
        if (this.resultDisplay.innerHTML.length <= 12) {
            return true;
        }
        return false;
    },
    printInDisplay: function(message) {
        if (this.canPrint()) {

            this.resultDisplay.innerHTML += message;
        }
    },
    deleteTextInDisplay: function() {
        this.resultDisplay.innerHTML = "";
    }
};