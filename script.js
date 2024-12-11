let diceImage = document.getElementById("dice-image");
let rollButton = document.getElementById("roll-button");
let isRolling = false;

rollButton.addEventListener("click", function () {
    if (!isRolling) {
        isRolling = true;
        rollDice();
        rollButton.textContent = "Stop";
    } else {
        isRolling = false;
        rollButton.textContent = "Roll";
    }
});

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${randomNumber}.png`;
}