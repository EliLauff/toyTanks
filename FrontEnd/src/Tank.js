class Tank {
  constructor(color, player) {
    this.color = color.charAt(0).toUpperCase() + color.slice(1);
    this.player = player;
    this.lives = 3;

    this.tankDiv = document.createElement("div");
    this.tankDiv.style.position = "absolute";
    if (this.player === 1) {
      this.direction = 0;
      this.tankDiv.style.left = "200px";
      this.tankDiv.style.bottom = "100px";
    } else {
      this.direction = -180;
      this.tankDiv.style.left = "1000px";
      this.tankDiv.style.bottom = "800px";
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

    document.body.append(this.tankDiv);
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

  fire() {
    console.log("fire!!!");
    let newBullet = new Bullet(this.color, this);

    let bulletInt = setInterval(function() {
      let x_comp = 6 * Math.sin(newBullet.direction * 0.0174533);
      let y_comp = 6 * Math.cos(newBullet.direction * 0.0174533);
      let leftPos = parseFloat(newBullet.bulletCenter.style.left);
      let topPos = parseFloat(newBullet.bulletCenter.style.top);
      newBullet.bulletCenter.style.left = `${leftPos + x_comp}px`;
      newBullet.bulletCenter.style.top = `${topPos - y_comp}px`;
    }, 20);
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

  //   fire() {
  //     bottomPos = parseInt(this.style.bottom);asa
  //     leftPos = parseInt(this.style.left);
  //     console.log("fire!!");
  //     bullet = document.createElement("img");
  //     bullet.src = `${ASSET_ROOT}/Bullets/bulletRedSilver_outline.png`;
  //     document.body.append(bullet);
  //     bullet.style.position = "absolute";
  //     bullet.style.left = `${leftPos + 39}px`;
  //     bullet.style.bottom = `${bottomPos + 39}px`;
  //     bullet_speed = 10;
  //     if (left === true && up === true) {
  //       bullet_direction = "northwest";
  //       let interval = setInterval(function() {
  //         bulletLeft = parseInt(bullet.style.left);
  //         bulletBottom = parseInt(bullet.style.bottom);
  //         bullet.style.left = `${bulletLeft - bullet_speed}px`;
  //         bullet.style.bottom = `${bulletBottom + bullet_speed}px`;
  //       }, 20);
  //       setTimeout(function() {
  //         clearInterval(interval);
  //       }, 3000);
  //       bullet.style.left = `${bulletLeft - bullet_speed}px`;
  //       bullet.style.bottom = `${bulletBottom + bullet_speed}px`;
  //     } else if (left === true && down === true) {
  //       bullet_direction = "southwest";
  //     } else if (right === true && up === true) {
  //       bullet_direction = "northeast";
  //     } else if (right === true && down === true) {
  //       m;
  //       bullet_direction = "southeast";
  //     } else if (right === true) {
  //       bullet_direction = "east";
  //     } else if (left === true) {
  //       bullet_direction = "west";
  //     } else if (up === true) {
  //       bullet_direction = "north";
  //     } else if (down === true) {
  //       bullet_direction = "south";
  //     }
  //   }
}
