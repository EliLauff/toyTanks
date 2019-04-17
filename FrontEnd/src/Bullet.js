class Bullet {
  constructor(color, tank) {
    this.color = color;
    this.tank = tank;
    this.direction = this.tank.direction;

    this.bulletCenter = document.createElement("div");
    this.bulletCenter.style.position = "absolute";
    this.bulletCenter.style.width = "5px";
    // this.bulletCenter.style.transform = `rotate(${this.direction}deg)`;

    this.bulletImg = document.createElement("img");
    this.bulletImg.src = `${ASSET_ROOT}/Bullets/bullet${
      this.color
    }Silver_outline.png`;
    this.bulletImg.style.position = "absolute";
    this.bulletImg.style.top = "-35px";
    this.bulletImg.style.left = "-10px";

    this.xPos = this.tank.barrelCenter.getBoundingClientRect().x;
    this.yPos = this.tank.barrelCenter.getBoundingClientRect().y;

    this.bulletCenter.style.left = `${this.xPos}px`;
    this.bulletCenter.style.top = `${this.yPos}px`;
    this.bulletCenter.style.transform = `rotate(${this.direction}deg)`;

    document.body.append(this.bulletCenter);
    this.bulletCenter.append(this.bulletImg);
    console.log(this.bulletCenter);
    // this.bulletCenter.append(this.bulletImg);
  }

  ricochet() {}
}
