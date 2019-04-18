let player1HealthBar = document.querySelector("#player1Health")
let player2HealthBar = document.querySelector("#player2Health")

function p1DecrementHealth() {
    player1HealthBar.value -= 10
    if (player1HealthBar.value === 0 ) {
        setTimeout(function(){
            window.alert("Player 1 has lost. Start new game?");
        })
    }
}
function p2DecrementHealth() {
    player2HealthBar.value -= 10
    if (player2HealthBar.value === 0 ) {
        setTimeout( () => 
            window.alert("Player 2 has lost. Start new game?")
        );
    }
}
