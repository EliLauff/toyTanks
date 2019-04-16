const ASSET_ROOT = "./assets";
class Tank {
  constructor(color, player) {
    this.color = color.charAt(0).toUpperCase() + color.slice(1);
    this.player = player;
    this.lives = 3;

    this.tankImg = document.createElement("img");
    this.tankImg.src = `${ASSET_ROOT}/Tanks/tank${this.color}_outline.png`;
    this.tankImg.style.position = "absolute";
    if (this.player === 1) {
      this.direction = 0;
      this.tankImg.style.left = "200px";
      this.tankImg.style.bottom = "100px";
    } else {
      this.direction = -180;
      this.tankImg.style.left = "1000px";
      this.tankImg.style.bottom = "800px";
    }
    this.tankImg.style.transform = `rotate(${this.direction}deg)`;
    document.body.append(this.tankImg);
  }

  move() {
    let x_comp = this.speed * Math.sin(this.direction * 0.0174533);
    let y_comp = this.speed * Math.cos(this.direction * 0.0174533);
    let leftPos = parseFloat(this.tankImg.style.left);
    let bottomPos = parseFloat(this.tankImg.style.bottom);
    this.tankImg.style.left = `${leftPos + x_comp}px`;
    this.tankImg.style.bottom = `${bottomPos + y_comp}px`;
  }

  fire() {
    let bullet = new Bullet(this.color, this);
  }

  //   fire() {
  //     bottomPos = parseInt(this.style.bottom);
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
