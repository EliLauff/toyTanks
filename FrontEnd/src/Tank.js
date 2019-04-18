class Tank {
  constructor(color, player) {
    this.color = color.charAt(0).toUpperCase() + color.slice(1);
    this.player = player;
    this.lives = 3;
    this.stockpile = 3;
    this.shootLocked = false;

    this.tankDiv = document.createElement("div");
    this.tankDiv.style.position = "absolute";
    if (this.player === 1) {
      this.direction = 0;
      this.tankDiv.style.left = "150px";
      this.tankDiv.style.bottom = "150px";
    } else {
      this.direction = -180;
      this.tankDiv.style.left = `${width - 250}px`;
      this.tankDiv.style.bottom = `${height - 250}px`;
    }
    this.speed = 0;

    this.tankImg = document.createElement("img");
    this.tankImg.src = `${ASSET_ROOT}/Tanks/tank${this.color}_outline.png`;

    this.tankBarrel = document.createElement("img");
    this.tankBarrel.src = `${ASSET_ROOT}/Tanks/barrelBlack_outline.png`;
    this.tankBarrel.style.position = "absolute";
    this.tankBarrel.style.left = "65px";
    this.tankBarrel.style.top = "34px";
    this.tankBarrel.style.transform = "rotate(90deg)";

    gameDiv.append(this.tankDiv);
    this.tankDiv.append(this.tankImg);
    this.tankDiv.append(this.tankBarrel);
    this.tankDiv.style.transform = `rotate(${this.direction}deg)`;

    this.barrelCenter = document.createElement("div");
    this.barrelCenter.style.position = "absolute";
    this.barrelCenter.style.width = "0px";
    this.barrelCenter.style.left = "80px";
    this.barrelCenter.style.top = "39px";
    this.tankDiv.append(this.barrelCenter);

    this.one = document.createElement("div");
    this.one.style.position = "absolute";
    this.one.style.width = "0px";
    this.one.style.left = "0px";
    this.one.style.top = "0px";
    this.tankDiv.append(this.one);

    this.two = document.createElement("div");
    this.two.style.position = "absolute";
    this.two.style.width = "0px";
    this.two.style.left = "76px";
    this.two.style.top = "0px";
    this.tankDiv.append(this.two);

    this.three = document.createElement("div");
    this.three.style.position = "absolute";
    this.three.style.width = "0px";
    this.three.style.left = "76px";
    this.three.style.top = "76px";
    this.tankDiv.append(this.three);

    this.four = document.createElement("div");
    this.four.style.position = "absolute";
    this.four.style.width = "0px";
    this.four.style.left = "0px";
    this.four.style.top = "76px";
    this.tankDiv.append(this.four);

    this.points = [
      {
        x: this.one.getBoundingClientRect().x,
        y: this.one.getBoundingClientRect().y
      },
      {
        x: this.two.getBoundingClientRect().x,
        y: this.two.getBoundingClientRect().y
      },
      {
        x: this.three.getBoundingClientRect().x,
        y: this.three.getBoundingClientRect().y
      },
      {
        x: this.four.getBoundingClientRect().x,
        y: this.four.getBoundingClientRect().y
      }
    ];
  }

  move(speed) {
    let x_comp = speed * Math.sin(this.direction * 0.0174533);
    let y_comp = speed * Math.cos(this.direction * 0.0174533);
    let leftPos = parseFloat(this.tankDiv.style.left);
    let bottomPos = parseFloat(this.tankDiv.style.bottom);
    this.tankDiv.style.left = `${leftPos + x_comp}px`;
    this.tankDiv.style.bottom = `${bottomPos + y_comp}px`;
  }

  rotate(rotSpeed) {
    this.direction = this.direction + rotSpeed;
  }

  shoot() {
    if (this.shootLocked === false) {
      this.shootLocked = true;
      setTimeout(() => {
        this.shootLocked = false;
      }, 500);
      this.fire();
    }
  }

  fire() {
    if (this.stockpile > 0) {
      let newBullet = new Bullet(this.color, this);

      let bulletInt = setInterval(function() {
        let x_comp = 8 * Math.sin(newBullet.direction * 0.0174533);
        let y_comp = 8 * Math.cos(newBullet.direction * 0.0174533);
        let leftPos = parseFloat(newBullet.bulletCenter.style.left);
        let topPos = parseFloat(newBullet.bulletCenter.style.top);
        newBullet.bulletCenter.style.left = `${leftPos + x_comp}px`;
        newBullet.bulletCenter.style.top = `${topPos - y_comp}px`;
      }, 20);

      let explosion = document.createElement("img");
      explosion.src = `${ASSET_ROOT}/Smoke/smokeGrey4.png`;
      explosion.style.position = "absolute";
      explosion.style.width = "40px";
      explosion.style.opacity = 1;
      explosion.style.left = `${this.barrelCenter.getBoundingClientRect().x -
        20}px`;
      explosion.style.top = `${this.barrelCenter.getBoundingClientRect().y -
        20}px`;

      gameDiv.append(explosion);
      let opacity = 100;
      let speed = 1000 / 60;
      function fadeOut() {
        opacity--;
        explosion.style.opacity = opacity / 100;
        if (opacity > 0) {
          setTimeout(fadeOut, speed);
        }
      }
      fadeOut();

      this.stockpile -= 1;
      setTimeout(() => {
        this.stockpile += 1;
      }, 1000);
    }
  }

  updatePoints() {
    this.points = [
      {
        x: this.one.getBoundingClientRect().x,
        y: this.one.getBoundingClientRect().y
      },
      {
        x: this.two.getBoundingClientRect().x,
        y: this.two.getBoundingClientRect().y
      },
      {
        x: this.three.getBoundingClientRect().x,
        y: this.three.getBoundingClientRect().y
      },
      {
        x: this.four.getBoundingClientRect().x,
        y: this.four.getBoundingClientRect().y
      }
    ];
  }
  // if (tank1 hit){
  //   tank1.loseLife()
  // }
  // if (tank2 hit){
  //   tank2.loseLife()
  // }
  // tank1.respawn()
  // tank2.respawn()

  // tank1.loseLife()
  // tank1.loseLife()
  // tank1.loseLife()

  setLives() {
    let lives = document.createElement("p");
    lives.id = `${this.player}`;
    lives.innerText = `${this.color} lives - ${this.lives}`;

    livesDiv.append(lives);
  }

  respawn() {
    if (this.player === 1) {
      this.direction = 0;
      this.tankDiv.style.left = "150px";
      this.tankDiv.style.bottom = "150px";
    } else if (this.player === 2) {
      this.direction = -180;
      this.tankDiv.style.left = `${width - 250}px`;
      this.tankDiv.style.bottom = `${height - 250}px`;
    }
  }

  static clearIntervals() {
    clearInterval(arrRightInt);
    clearInterval(arrLeftInt);
    clearInterval(aInt);
    clearInterval(dInt);
    clearInterval(arrUpInt);
    clearInterval(arrDownInt);
    clearInterval(wInt);
    clearInterval(sInt);
    arrRightInt = null;
    arrLeftInt = null;
    aInt = null;
    dInt = null;
    arrUpInt = null;
    arrDownInt = null;
    wInt = null;
    sInt = null;
  }

  loseLife() {
    this.lives -= 1;
    Tank.clearIntervals();
    if (this.lives === 0) {
      (livesDiv.innerHTML = ""),
        tank1.setLives(),
        tank2.setLives(),
        setTimeout(() => this.loseGame());
    } else if (this.player === 1) {
      window.alert("Blue player has won this round.");
      tank1.respawn();
      tank2.respawn();
      livesDiv.innerHTML = "";
      tank1.setLives();
      tank2.setLives();
    } else if (this.player === 2) {
      window.alert("Red player has won this round.");
      tank1.respawn();
      tank2.respawn();
      livesDiv.innerHTML = "";
      tank1.setLives();
      tank2.setLives();
    }
    allBullets = [];
    let bulletsToClear = document.querySelectorAll(".bullet");
    bulletsToClear.forEach(bullet => {
      bullet.remove();
    });
  }

  loseGame() {
    if (this.player === 1) {
      setTimeout(() => window.alert("Blue player has won!!"));
    }
    if (this.player === 2) {
      setTimeout(() => window.alert("Red player has won!!"));
    }
    //render welcome page
  }
}
