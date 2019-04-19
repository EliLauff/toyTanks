playButton = document.getElementById("play-button");
playerOneNameBox = document.getElementById("player-one-name");
playerTwoNameBox = document.getElementById("player-two-name");

playButton.addEventListener("click", () => {
  playerOneName = playerOneNameBox.value;
  playerTwoName = playerTwoNameBox.value;
  if (playerOneName && playerTwoName) {
    fetch("localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playerOneName
      })
    }).then(
      fetch("localhost:3000/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: playerTwoName
        })
      }).then(
        fetch("localhost:3000/matches", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            player_one_name: playerOneName,
            player_two_name: playerTwoName
          })
        })
      )
    );
    //   welcomepage.className = "hidden"
    renderGame();
  }
});
