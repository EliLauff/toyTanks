let allBullets = [];
class Bullet {
  constructor(color, tank) {
    this.color = color;
    this.tank = tank;
    this.direction = this.tank.direction;
    this.impactCounter = 0;

    this.bulletCenter = document.createElement("div");
    this.bulletCenter.style.position = "absolute";
    this.bulletCenter.style.width = "5px";
    this.bulletCenter.style.transform = `rotate(${this.direction}deg)`;

    this.xPos = this.tank.barrelCenter.getBoundingClientRect().x;
    this.yPos = this.tank.barrelCenter.getBoundingClientRect().y;

    this.bulletCenter.style.left = `${this.xPos}px`;
    this.bulletCenter.style.top = `${this.yPos}px`;

    this.bulletImg = document.createElement("img");
    this.bulletImg.src = `${ASSET_ROOT}/Bullets/bullet${
      this.color
    }Silver_outline.png`;
    this.bulletImg.style.position = "absolute";
    this.bulletImg.style.top = "-35px";
    this.bulletImg.style.left = "-10px";

    document.body.append(this.bulletCenter);
    this.bulletCenter.append(this.bulletImg);

    this.one = document.createElement("div");
    this.one.style.position = "absolute";
    this.one.style.width = "0px";
    this.one.style.left = "-10px";
    this.one.style.bottom = "0px";
    this.bulletCenter.append(this.one);

    this.two = document.createElement("div");
    this.two.style.position = "absolute";
    this.two.style.width = "0px";
    this.two.style.left = "-10px";
    this.two.style.bottom = "34px";
    this.bulletCenter.append(this.two);

    this.three = document.createElement("div");
    this.three.style.position = "absolute";
    this.three.style.width = "0px";
    this.three.style.left = "10px";
    this.three.style.bottom = "34px";
    this.bulletCenter.append(this.three);

    this.four = document.createElement("div");
    this.four.style.position = "absolute";
    this.four.style.width = "0px";
    this.four.style.left = "10px";
    this.four.style.bottom = "0px";
    this.bulletCenter.append(this.four);

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
    allBullets.push(this);
  }

  ricochetVertical() {
    if (this.impactCounter > 0) {
      this.explode();
    } else {
      let absAngle = this.direction % 360;
      let partialAngle = 180 - 2 * absAngle;
      console.log(this.direction);
      console.log(partialAngle);
      console.log(absAngle);
      this.direction = absAngle + partialAngle + 180;
      this.bulletCenter.style.transform = `rotate(${this.direction}deg)`;

      this.impactCounter += 1;
    }
  }

  ricochetHorizontal() {
    if (this.impactCounter > 0) {
      this.explode();
    } else {
      let absAngle = this.direction % 360;
      let partialAngle = 180 - 2 * absAngle;
      console.log(this.direction);
      console.log(partialAngle);
      console.log(absAngle);
      this.direction = absAngle + partialAngle;
      this.bulletCenter.style.transform = `rotate(${this.direction}deg)`;

      this.impactCounter += 1;
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

  explode() {
    this.updatePoints();
    let explosion = document.createElement("img");
    explosion.src = `${ASSET_ROOT}/Smoke/smokeGrey0.png`;
    explosion.style.position = "absolute";
    explosion.style.left = `${this.one.getBoundingClientRect().x - 44}px`;
    explosion.style.top = `${this.one.getBoundingClientRect().y - 44}px`;

    gameDiv.append(explosion);
    this.bulletCenter.remove();
  }

  static all() {
    return allBullets;
  }
}
