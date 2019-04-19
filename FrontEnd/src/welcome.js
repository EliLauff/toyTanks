welcomePage = document.getElementById("welcome-page");
gamePage = document.getElementById("game-page");
gamePage.remove();

playButton = document.getElementById("play-button");
playerOneNameBox = document.getElementById("p1-name");
playerTwoNameBox = document.getElementById("p2-name");

playButton.addEventListener("click", () => {
  playerOneName = playerOneNameBox.value;
  playerTwoName = playerTwoNameBox.value;
  if (playerOneName && playerTwoName) {
    console.log("in here");
    fetch("https://localhost:3000/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playerOneName
      })
    }).then(
      fetch("https://localhost:3000/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: playerTwoName
        })
      }).then(
        fetch("https://localhost:3000/matches", {
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
    welcomePage.remove();
    document.body.append(gamePage);
    renderGame();
  }
});
