class Bullet {
  constructor(color, tank) {
    this.color = color;
    this.tank = tank;
    console.log(this.tank.direction);
    this.direction = this.tank.direction;
    this.bulletImg = document.createElement("img");
    this.bulletImg.src = `${ASSET_ROOT}/Bullets/bullet${
      this.color
    }Silver_outline.png`;
    let bull_x_comp = 29;
    let bull_y_comp = 45;
    this.bulletImg.style.position = "absolute";
    this.bulletImg.style.left = `${parseInt(this.tank.tankImg.style.left) +
      29 * Math.sin(this.direction * 0.0174533)}px`;
    this.bulletImg.style.bottom = `${parseInt(this.tank.tankImg.style.bottom) +
      45 * Math.cos(this.direction * 0.0174533)}px`;
    console.log(this.direction);
    this.bulletImg.style.transform = `rotate(${this.direction}deg)`;
    document.body.append(this.bulletImg);
  }

  ricochet() {}
}
