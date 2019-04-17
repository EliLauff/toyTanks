class Bullet {
  constructor(color, tank) {
    this.color = color;
    this.tank = tank;
    this.direction = this.tank.direction;

    this.bulletCenter = document.createElement("img");

    this.bulletImg = document.createElement("img");
    this.bulletImg.src = `${ASSET_ROOT}/Bullets/bullet${
      this.color
    }Silver_outline.png`;
    this.bulletImg.style.position = "absolute";
    console.log(this.direction);
    this.bulletImg.style.transform = `rotate(${this.direction}deg)`;
    document.body.append(this.bulletImg);
  }

  ricochet() {}
}
