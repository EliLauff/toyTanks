const renderGame = function() {
  const ASSET_ROOT = "./assets";
  let menuDiv = document.querySelector("#menu_window");
  let gameDiv = document.querySelector("#game_window");
  let height = gameDiv.clientHeight;
  let width = gameDiv.clientWidth;
  // let barrierHeight = height - 434;
  let barrierHeight = 0.55 * height;
  let barrierWidth = 0.2 * width;
  const PLAYABLE_HEIGHT = height - 52;
  const PLAYABLE_WIDTH = width - 44;
  let LAYOUT_CONFIG = "";

  const SOUTHWEST_CORNER = document.createElement("div");
  SOUTHWEST_CORNER.style.position = "absolute";
  SOUTHWEST_CORNER.style.width = "0px";
  SOUTHWEST_CORNER.style.left = "44px";
  SOUTHWEST_CORNER.style.top = `${PLAYABLE_HEIGHT}px`;
  gameDiv.append(SOUTHWEST_CORNER);
  const SW_X = SOUTHWEST_CORNER.getBoundingClientRect().x;
  const SW_Y = SOUTHWEST_CORNER.getBoundingClientRect().y;

  const NORTHWEST_CORNER = document.createElement("div");
  NORTHWEST_CORNER.style.position = "absolute";
  NORTHWEST_CORNER.style.width = "0px";
  NORTHWEST_CORNER.style.left = "44px";
  NORTHWEST_CORNER.style.top = `52px`;
  gameDiv.append(NORTHWEST_CORNER);
  const NW_X = NORTHWEST_CORNER.getBoundingClientRect().x;
  const NW_Y = NORTHWEST_CORNER.getBoundingClientRect().y;

  const NORTHEAST_CORNER = document.createElement("div");
  NORTHEAST_CORNER.style.position = "absolute";
  NORTHEAST_CORNER.style.width = "0px";
  NORTHEAST_CORNER.style.left = `${PLAYABLE_WIDTH}px`;
  NORTHEAST_CORNER.style.top = `52px`;
  gameDiv.append(NORTHEAST_CORNER);
  const NE_X = NORTHEAST_CORNER.getBoundingClientRect().x;
  const NE_Y = NORTHEAST_CORNER.getBoundingClientRect().y;

  const SOUTHEAST_CORNER = document.createElement("div");
  SOUTHEAST_CORNER.style.position = "absolute";
  SOUTHEAST_CORNER.style.width = "0px";
  SOUTHEAST_CORNER.style.left = `${PLAYABLE_WIDTH}px`;
  SOUTHEAST_CORNER.style.top = `${PLAYABLE_HEIGHT}`;
  gameDiv.append(SOUTHEAST_CORNER);
  const SE_X = SOUTHEAST_CORNER.getBoundingClientRect().x;
  const SE_Y = SOUTHEAST_CORNER.getBoundingClientRect().y;

  const TOP_POINTS = [
    { x: NW_X, y: NW_Y },
    { x: NE_X, y: NE_Y },
    { x: NW_X, y: NW_Y - 30 },
    { x: NE_X, y: NE_Y - 30 }
  ];
  const BOTTOM_POINTS = [
    { x: SW_X, y: SW_Y },
    { x: SE_X, y: SE_Y },
    { x: SW_X, y: SW_Y + 30 },
    { x: SE_X, y: SE_Y + 30 }
  ];
  const LEFT_POINTS = [
    { x: NW_X, y: NW_Y },
    { x: SW_X, y: SW_Y },
    { x: NW_X - 30, y: NW_Y },
    { x: SW_X - 30, y: SW_Y }
  ];
  const RIGHT_POINTS = [
    { x: NE_X, y: NE_Y },
    { x: SE_X, y: SE_Y },
    { x: NE_X + 30, y: NE_Y },
    { x: SE_X + 30, y: SE_Y }
  ];

  function background() {
    let imgSrc = `${ASSET_ROOT}/Environment/sand.png`;
    let counter = 0;
    let ticker = 0;
    while (ticker <= height + 128) {
      let backImg = document.createElement("img");
      backImg.src = imgSrc;
      gameDiv.prepend(backImg);
      while (counter <= width + 128) {
        let backImg = document.createElement("img");
        backImg.style.position = "absolute";
        backImg.style.top = `${ticker}px`;
        backImg.style.left = `${counter}px`;
        backImg.src = imgSrc;
        gameDiv.prepend(backImg);
        counter += 128;
      }
      counter = 0;
      ticker += 128;
    }
  }

  function border() {
    let y = 0;
    let borderHeight = 0;
    while (borderHeight <= height) {
      const metalBarrelLeft = document.createElement("img");
      metalBarrelLeft.style.position = "absolute";
      metalBarrelLeft.style.left = `0px`;
      metalBarrelLeft.style.bottom = `${44 + y * 66}`;
      borderHeight = parseInt(metalBarrelLeft.style.bottom) + 66;
      metalBarrelLeft.src = `./assets/Obstacles/barrelGrey_side.png`;
      document.body.append(metalBarrelLeft);

      const metalBarrelRight = document.createElement("img");
      metalBarrelRight.style.position = "absolute";
      metalBarrelRight.style.right = "0px";
      metalBarrelRight.style.bottom = `${44 + y * 66}`;
      metalBarrelRight.src = `./assets/Obstacles/barrelGrey_side.png`;
      gameDiv.append(metalBarrelRight);
      y++;
    }

    let i = 0;
    let borderWidth = 0;
    while (borderWidth <= width) {
      const metalBarrelTop = document.createElement("img");
      metalBarrelTop.style.transform = "rotate(90deg)";
      metalBarrelTop.style.position = "absolute";
      metalBarrelTop.style.left = `${0 + i * 66}px`;
      borderWidth = parseInt(metalBarrelTop.style.left) + 66;
      metalBarrelTop.style.top = "0px";
      metalBarrelTop.src = `./assets/Obstacles/barrelGrey_side.png`;
      document.body.append(metalBarrelTop);

      const metalBarrelBottom = document.createElement("img");
      metalBarrelBottom.style.transform = "rotate(90deg)";
      metalBarrelBottom.style.position = "absolute";
      metalBarrelBottom.style.left = `${0 + i * 66}px`;
      metalBarrelBottom.style.bottom = `0px`;
      metalBarrelBottom.src = `./assets/Obstacles/barrelGrey_side.png`;
      gameDiv.append(metalBarrelBottom);
      i++;
    }
  }

  function verticalLayout() {
    let centerHeight = 0;
    let centerDiv = document.createElement("div");
    centerDiv.id = "center";
    while (centerHeight < barrierHeight) {
      const metalBarrelObstable = document.createElement("img");
      centerDiv.id = "center";
      metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
      centerDiv.append(metalBarrelObstable);
      gameDiv.append(centerDiv);
      centerHeight += 62;
    }
    LAYOUT_CONFIG = "verticalLayout";
  }

  function sLayout() {
    let topObstacleWidth = 0;
    let bottomObstacleWidth = 0;
    verticalLayout();
    let topDiv = document.createElement("div");
    topDiv.id = "topSideways";
    while (topObstacleWidth < barrierWidth) {
      const metalBarrelObstable = document.createElement("img");
      metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust_2.png";
      topDiv.append(metalBarrelObstable);
      gameDiv.append(topDiv);
      topObstacleWidth += 62;
    }
    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomSideways";
    while (bottomObstacleWidth < barrierWidth) {
      const metalBarrelObstable = document.createElement("img");
      metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust_2.png";
      bottomDiv.append(metalBarrelObstable);
      gameDiv.append(bottomDiv);
      bottomObstacleWidth += 62;
    }
    LAYOUT_CONFIG = "sLayout";
  }

  function chaos() {
    verticalLayout();
    let leftDiv = document.createElement("div");
    leftDiv.id = "left";
    let leftHeight = 0;
    while (leftHeight < barrierHeight) {
      const metalBarrelObstable = document.createElement("img");
      metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
      leftDiv.append(metalBarrelObstable);
      gameDiv.append(leftDiv);
      leftHeight += 62;
    }
    let rightDiv = document.createElement("div");
    rightDiv.id = "right";
    let rightHeight = 0;
    while (rightHeight < barrierHeight) {
      const metalBarrelObstable = document.createElement("img");
      metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
      rightDiv.append(metalBarrelObstable);
      gameDiv.append(rightDiv);
      rightHeight += 62;
    }
    LAYOUT_CONFIG = "chaos";
  }

  functionArray = [verticalLayout, sLayout, chaos];

  function randomMap() {
    let randMap =
      functionArray[Math.floor(Math.random() * functionArray.length)];
    randMap();
  }

  background();
  border();
  randomMap();

  if (LAYOUT_CONFIG === "verticalLayout") {
    let centerDiv = document.getElementById("center");
    let centerWidth = 44;
    let centerLeft = centerDiv.getBoundingClientRect().left;
    let centerTop = centerDiv.getBoundingClientRect().top;
    let centerHeight = centerDiv.childElementCount * 62;

    let centerOne = document.createElement("div");
    centerOne.id = "center-one";
    centerOne.style.position = "absolute";
    centerOne.style.width = "0px";
    centerOne.style.left = `${centerLeft}px`;
    centerOne.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerOne);

    let centerTwo = document.createElement("div");
    centerTwo.id = "center-two";
    centerTwo.style.position = "absolute";
    centerTwo.style.width = "0px";
    centerTwo.style.left = `${centerLeft}px`;
    centerTwo.style.top = `${centerTop}px`;
    gameDiv.append(centerTwo);

    let centerThree = document.createElement("div");
    centerThree.id = "center-three";
    centerThree.style.position = "absolute";
    centerThree.style.width = "0px";
    centerThree.style.left = `${centerLeft + centerWidth}px`;
    centerThree.style.top = `${centerTop}px`;
    gameDiv.append(centerThree);

    let centerFour = document.createElement("div");
    centerFour.id = "center-four";
    centerFour.style.position = "absolute";
    centerFour.style.width = "0px";
    centerFour.style.left = `${centerLeft + centerWidth}px`;
    centerFour.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerFour);
  } else if (LAYOUT_CONFIG === "sLayout") {
    let centerDiv = document.getElementById("center");
    let centerWidth = 44;
    let centerLeft = centerDiv.getBoundingClientRect().left;
    let centerTop = centerDiv.getBoundingClientRect().top;
    let centerHeight = centerDiv.childElementCount * 62;

    let centerOne = document.createElement("div");
    centerOne.id = "center-one";
    centerOne.style.position = "absolute";
    centerOne.style.width = "0px";
    centerOne.style.left = `${centerLeft}px`;
    centerOne.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerOne);

    let centerTwo = document.createElement("div");
    centerTwo.id = "center-two";
    centerTwo.style.position = "absolute";
    centerTwo.style.width = "0px";
    centerTwo.style.left = `${centerLeft}px`;
    centerTwo.style.top = `${centerTop}px`;
    gameDiv.append(centerTwo);

    let centerThree = document.createElement("div");
    centerThree.id = "center-three";
    centerThree.style.position = "absolute";
    centerThree.style.width = "0px";
    centerThree.style.left = `${centerLeft + centerWidth}px`;
    centerThree.style.top = `${centerTop}px`;
    gameDiv.append(centerThree);

    let centerFour = document.createElement("div");
    centerFour.id = "center-four";
    centerFour.style.position = "absolute";
    centerFour.style.width = "0px";
    centerFour.style.left = `${centerLeft + centerWidth}px`;
    centerFour.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerFour);

    let topDiv = document.getElementById("topSideways");
    let topHeight = 44;
    let topLeft = topDiv.getBoundingClientRect().left;
    let topTop = topDiv.getBoundingClientRect().top;
    let topWidth = topDiv.childElementCount * 62;

    let topOne = document.createElement("div");
    topOne.id = "top-one";
    topOne.style.position = "absolute";
    topOne.style.width = "0px";
    topOne.style.left = `${topLeft}px`;
    topOne.style.top = `${topTop + topHeight}px`;
    gameDiv.append(topOne);

    let topTwo = document.createElement("div");
    topTwo.id = "top-two";
    topTwo.style.position = "absolute";
    topTwo.style.width = "0px";
    topTwo.style.left = `${topLeft}px`;
    topTwo.style.top = `${topTop}px`;
    gameDiv.append(topTwo);

    let topThree = document.createElement("div");
    topThree.id = "top-three";
    topThree.style.position = "absolute";
    topThree.style.width = "0px";
    topThree.style.left = `${topLeft - topWidth}px`;
    topThree.style.top = `${topTop}px`;
    gameDiv.append(topThree);

    let topFour = document.createElement("div");
    topFour.id = "top-four";
    topFour.style.position = "absolute";
    topFour.style.width = "0px";
    topFour.style.left = `${topLeft - topWidth}px`;
    topFour.style.top = `${topTop + topHeight}px`;
    gameDiv.append(topFour);

    let bottomDiv = document.getElementById("bottomSideways");
    let bottomHeight = 44;
    let bottomLeft = bottomDiv.getBoundingClientRect().left;
    let bottomTop = bottomDiv.getBoundingClientRect().top;
    let bottomWidth = bottomDiv.childElementCount * 62;

    let bottomOne = document.createElement("div");
    bottomOne.id = "bottom-one";
    bottomOne.style.position = "absolute";
    bottomOne.style.width = "0px";
    bottomOne.style.left = `${bottomLeft}px`;
    bottomOne.style.top = `${bottomTop + bottomHeight}px`;
    gameDiv.append(bottomOne);

    let bottomTwo = document.createElement("div");
    bottomTwo.id = "bottom-two";
    bottomTwo.style.position = "absolute";
    bottomTwo.style.width = "0px";
    bottomTwo.style.left = `${bottomLeft}px`;
    bottomTwo.style.top = `${bottomTop}px`;
    gameDiv.append(bottomTwo);

    let bottomThree = document.createElement("div");
    bottomThree.id = "bottom-three";
    bottomThree.style.position = "absolute";
    bottomThree.style.width = "0px";
    bottomThree.style.left = `${bottomLeft + bottomWidth}px`;
    bottomThree.style.top = `${bottomTop}px`;
    gameDiv.append(bottomThree);

    let bottomFour = document.createElement("div");
    bottomFour.id = "bottom-four";
    bottomFour.style.position = "absolute";
    bottomFour.style.width = "0px";
    bottomFour.style.left = `${bottomLeft + bottomWidth}px`;
    bottomFour.style.top = `${bottomTop + bottomHeight}px`;
    gameDiv.append(bottomFour);
  } else if (LAYOUT_CONFIG === "chaos") {
    let centerDiv = document.getElementById("center");
    let centerWidth = 44;
    let centerLeft = centerDiv.getBoundingClientRect().left;
    let centerTop = centerDiv.getBoundingClientRect().top;
    let centerHeight = centerDiv.childElementCount * 62;

    let centerOne = document.createElement("div");
    centerOne.id = "center-one";
    centerOne.style.position = "absolute";
    centerOne.style.width = "0px";
    centerOne.style.left = `${centerLeft}px`;
    centerOne.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerOne);

    let centerTwo = document.createElement("div");
    centerTwo.id = "center-two";
    centerTwo.style.position = "absolute";
    centerTwo.style.width = "0px";
    centerTwo.style.left = `${centerLeft}px`;
    centerTwo.style.top = `${centerTop}px`;
    gameDiv.append(centerTwo);

    let centerThree = document.createElement("div");
    centerThree.id = "center-three";
    centerThree.style.position = "absolute";
    centerThree.style.width = "0px";
    centerThree.style.left = `${centerLeft + centerWidth}px`;
    centerThree.style.top = `${centerTop}px`;
    gameDiv.append(centerThree);

    let centerFour = document.createElement("div");
    centerFour.id = "center-four";
    centerFour.style.position = "absolute";
    centerFour.style.width = "0px";
    centerFour.style.left = `${centerLeft + centerWidth}px`;
    centerFour.style.top = `${centerTop + centerHeight}px`;
    gameDiv.append(centerFour);

    let leftDiv = document.getElementById("left");
    let leftWidth = 44;
    let leftLeft = leftDiv.getBoundingClientRect().left;
    let leftTop = leftDiv.getBoundingClientRect().top;
    let leftHeight = leftDiv.childElementCount * 62;

    let leftOne = document.createElement("div");
    leftOne.id = "left-one";
    leftOne.style.position = "absolute";
    leftOne.style.width = "0px";
    leftOne.style.left = `${leftLeft}px`;
    leftOne.style.top = `${leftTop + leftHeight}px`;
    gameDiv.append(leftOne);

    let leftTwo = document.createElement("div");
    leftTwo.id = "left-two";
    leftTwo.style.position = "absolute";
    leftTwo.style.width = "0px";
    leftTwo.style.left = `${leftLeft}px`;
    leftTwo.style.top = `${leftTop}px`;
    gameDiv.append(leftTwo);

    let leftThree = document.createElement("div");
    leftThree.id = "left-three";
    leftThree.style.position = "absolute";
    leftThree.style.width = "0px";
    leftThree.style.left = `${leftLeft + leftWidth}px`;
    leftThree.style.top = `${leftTop}px`;
    gameDiv.append(leftThree);

    let leftFour = document.createElement("div");
    leftFour.id = "left-four";
    leftFour.style.position = "absolute";
    leftFour.style.width = "0px";
    leftFour.style.left = `${leftLeft + leftWidth}px`;
    leftFour.style.top = `${leftTop + leftHeight}px`;
    gameDiv.append(leftFour);

    let rightDiv = document.getElementById("right");
    let rightWidth = 44;
    let rightLeft = rightDiv.getBoundingClientRect().left;
    let rightTop = rightDiv.getBoundingClientRect().top;
    let rightHeight = rightDiv.childElementCount * 62;

    let rightOne = document.createElement("div");
    rightOne.id = "right-one";
    rightOne.style.position = "absolute";
    rightOne.style.width = "0px";
    rightOne.style.left = `${rightLeft}px`;
    rightOne.style.top = `${rightTop + rightHeight}px`;
    gameDiv.append(rightOne);

    let rightTwo = document.createElement("div");
    rightTwo.id = "right-two";
    rightTwo.style.position = "absolute";
    rightTwo.style.width = "0px";
    rightTwo.style.left = `${rightLeft}px`;
    rightTwo.style.top = `${rightTop}px`;
    gameDiv.append(rightTwo);

    let rightThree = document.createElement("div");
    rightThree.id = "right-three";
    rightThree.style.position = "absolute";
    rightThree.style.width = "0px";
    rightThree.style.left = `${rightLeft + rightWidth}px`;
    rightThree.style.top = `${rightTop}px`;
    gameDiv.append(rightThree);

    let rightFour = document.createElement("div");
    rightFour.id = "right-four";
    rightFour.style.position = "absolute";
    rightFour.style.width = "0px";
    rightFour.style.left = `${rightLeft + rightWidth}px`;
    rightFour.style.top = `${rightTop + rightHeight}px`;
    gameDiv.append(rightFour);
  }

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
        this.direction = 45;
        this.tankDiv.style.left = "150px";
        this.tankDiv.style.bottom = "150px";
      } else {
        this.direction = 225;
        this.tankDiv.style.left = `${width - 250}px`;
        this.tankDiv.style.bottom = `${height - 250}px`;
      }

      this.livesDiv = document.createElement("div");
      this.livesDiv.id = `${this.player}-lives`;
      menuDiv.append(this.livesDiv);

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

    checkMovement(speed, points_to_check) {
      let x_comp = speed * Math.sin(this.direction * 0.0174533);
      let y_comp = speed * Math.cos(this.direction * 0.0174533);
      this.updatePoints();
      let newPoints = [
        {
          x: parseFloat(this.one.getBoundingClientRect().x + x_comp),
          y: parseFloat(this.one.getBoundingClientRect().y - y_comp)
        },
        {
          x: parseFloat(this.two.getBoundingClientRect().x + x_comp),
          y: parseFloat(this.two.getBoundingClientRect().y - y_comp)
        },
        {
          x: parseFloat(this.three.getBoundingClientRect().x + x_comp),
          y: parseFloat(this.three.getBoundingClientRect().y - y_comp)
        },
        {
          x: parseFloat(this.four.getBoundingClientRect().x + x_comp),
          y: parseFloat(this.four.getBoundingClientRect().y - y_comp)
        }
      ];
      return doPolygonsIntersect(points_to_check, newPoints);
    }

    checkRotation(rotSpeed, points_to_check) {
      newDirection = this.direction + rotSpeed;
    }

    rotate(rotSpeed) {
      this.direction = this.direction + rotSpeed;
    }

    shoot() {
      if (this.shootLocked === false) {
        this.shootLocked = true;
        setTimeout(() => {
          this.shootLocked = false;
        }, 333);
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
      this.livesDiv.innerHTML = "";
      this.livesDiv.innerText = `${this.color} lives - ${this.lives}`;
    }

    respawn() {
      if (this.player === 1) {
        this.direction = 45;
        this.tankDiv.style.left = "150px";
        this.tankDiv.style.bottom = "150px";
      } else if (this.player === 2) {
        this.direction = 225;
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
        tank1.setLives();
        tank2.setLives();
        setTimeout(() => this.loseGame());
      } else if (this.player === 1) {
        window.alert("Blue player has won this round.");
        tank1.respawn();
        tank2.respawn();
        tank1.setLives();
        tank2.setLives();
      } else if (this.player === 2) {
        window.alert("Red player has won this round.");
        tank1.respawn();
        tank2.respawn();
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

  let allBullets = [];
  class Bullet {
    constructor(color, tank) {
      this.color = color;
      this.tank = tank;
      this.direction = this.tank.direction;
      this.impactCounter = 0;

      this.bulletCenter = document.createElement("div");
      this.bulletCenter.className = "bullet";
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
      this.bulletImg.style.top = "-40px";
      this.bulletImg.style.left = "-10px";

      document.body.append(this.bulletCenter);
      this.bulletCenter.append(this.bulletImg);

      this.one = document.createElement("div");
      this.one.style.position = "absolute";
      this.one.style.width = "0px";
      this.one.style.left = "-10px";
      this.one.style.bottom = "6px";
      this.bulletCenter.append(this.one);

      this.two = document.createElement("div");
      this.two.style.position = "absolute";
      this.two.style.width = "0px";
      this.two.style.left = "-10px";
      this.two.style.bottom = "40px";
      this.bulletCenter.append(this.two);

      this.three = document.createElement("div");
      this.three.style.position = "absolute";
      this.three.style.width = "0px";
      this.three.style.left = "10px";
      this.three.style.bottom = "40px";
      this.bulletCenter.append(this.three);

      this.four = document.createElement("div");
      this.four.style.position = "absolute";
      this.four.style.width = "0px";
      this.four.style.left = "10px";
      this.four.style.bottom = "6px";
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
      explosion.style.width = "60px";
      explosion.style.left = `${this.one.getBoundingClientRect().x - 30}px`;
      explosion.style.top = `${this.one.getBoundingClientRect().y - 30}px`;

      gameDiv.append(explosion);
      this.bulletCenter.remove();
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

      let index = allBullets.indexOf(this);
      if (index > -1) {
        allBullets.splice(index, 1);
      }
    }

    static all() {
      return allBullets;
    }
  }

  tank1 = new Tank("red", 1);
  tank2 = new Tank("blue", 2);
  tank1.setLives();
  tank2.setLives();

  //create movement interval variables and set them to null
  let arrRightInt = null;
  let arrLeftInt = null;
  let aInt = null;
  let dInt = null;
  let arrUpInt = null;
  let arrDownInt = null;
  let wInt = null;
  let sInt = null;

  function doPolygonsIntersect(a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {
      // for each polygon, look at each edge of the polygon, and determine if it separates
      // the two shapes
      var polygon = polygons[i];
      for (i1 = 0; i1 < polygon.length; i1++) {
        // grab 2 vertices to create an edge
        var i2 = (i1 + 1) % polygon.length;
        var p1 = polygon[i1];
        var p2 = polygon[i2];

        // find the line perpendicular to this edge
        var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

        minA = maxA = undefined;
        // for each vertex in the first shape, project it onto the line perpendicular to the edge
        // and keep track of the min and max of these values
        for (j = 0; j < a.length; j++) {
          projected = normal.x * a[j].x + normal.y * a[j].y;
          if (typeof minA == "undefined" || projected < minA) {
            minA = projected;
          }
          if (typeof maxA == "undefined" || projected > maxA) {
            maxA = projected;
          }
        }

        // for each vertex in the second shape, project it onto the line perpendicular to the edge
        // and keep track of the min and max of these values
        minB = maxB = undefined;
        for (j = 0; j < b.length; j++) {
          projected = normal.x * b[j].x + normal.y * b[j].y;
          if (typeof minB == "undefined" || projected < minB) {
            minB = projected;
          }
          if (typeof maxB == "undefined" || projected > maxB) {
            maxB = projected;
          }
        }

        // if there is no overlap between the projects, the edge we are looking at separates the two
        // polygons, and we know there is no overlap
        if (maxA < minB || maxB < minA) {
          return false;
        }
      }
    }
    return true;
  }

  function remedyTank2Rotation() {
    if (arrRightInt !== null) {
      let rotSpeed = -4;
      tank2.rotate(rotSpeed);
    }
    if (arrLeftInt !== null && arrRightInt === null) {
      let rotSpeed = 4;
      tank2.rotate(rotSpeed);
    }
  }

  function remedyTank1Rotation() {
    if (dInt !== null && aInt === null) {
      let rotSpeed = -4;
      tank1.rotate(rotSpeed);
    }
    if (aInt !== null && dInt === null) {
      let rotSpeed = 4;
      tank1.rotate(rotSpeed);
    }
  }

  if (LAYOUT_CONFIG === "verticalLayout") {
    let centerOne = document.getElementById("center-one");
    let centerTwo = document.getElementById("center-two");
    let centerThree = document.getElementById("center-three");
    let centerFour = document.getElementById("center-four");

    let centerPoints = [
      {
        x: centerOne.getBoundingClientRect().x,
        y: centerOne.getBoundingClientRect().y
      },
      {
        x: centerTwo.getBoundingClientRect().x,
        y: centerTwo.getBoundingClientRect().y
      },
      {
        x: centerThree.getBoundingClientRect().x,
        y: centerThree.getBoundingClientRect().y
      },
      {
        x: centerFour.getBoundingClientRect().x,
        y: centerFour.getBoundingClientRect().y
      }
    ];

    document.addEventListener("keydown", function(e) {
      e.preventDefault();
      if (e.repeat) return;
      if (e.key == "ArrowRight") {
        arrRightInt = setInterval(function() {
          let rotSpeed = 4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "d" || e.key == "D") {
        dInt = setInterval(function() {
          let rotSpeed = 4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowLeft") {
        arrLeftInt = setInterval(function() {
          let rotSpeed = -4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "a" || e.key == "A") {
        aInt = setInterval(function() {
          let rotSpeed = -4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowDown") {
        arrDownInt = setInterval(function() {
          let speed = -4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "ArrowUp") {
        arrUpInt = setInterval(function() {
          let speed = 4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "s" || e.key == "S") {
        sInt = setInterval(function() {
          let speed = -4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }
      if (e.key == "w" || e.key == "W") {
        wInt = setInterval(function() {
          let speed = 4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }

      if (e.key == " ") {
        tank2.shoot();
      }
      if (e.key == "e" || e.key == "E") {
        tank1.shoot();
      }
    });
  } else if (LAYOUT_CONFIG === "sLayout") {
    let centerOne = document.getElementById("center-one");
    let centerTwo = document.getElementById("center-two");
    let centerThree = document.getElementById("center-three");
    let centerFour = document.getElementById("center-four");
    let topOne = document.getElementById("top-one");
    let topTwo = document.getElementById("top-two");
    let topThree = document.getElementById("top-three");
    let topFour = document.getElementById("top-four");
    let bottomOne = document.getElementById("bottom-one");
    let bottomTwo = document.getElementById("bottom-two");
    let bottomThree = document.getElementById("bottom-three");
    let bottomFour = document.getElementById("bottom-four");

    let centerPoints = [
      {
        x: centerOne.getBoundingClientRect().x,
        y: centerOne.getBoundingClientRect().y
      },
      {
        x: centerTwo.getBoundingClientRect().x,
        y: centerTwo.getBoundingClientRect().y
      },
      {
        x: centerThree.getBoundingClientRect().x,
        y: centerThree.getBoundingClientRect().y
      },
      {
        x: centerFour.getBoundingClientRect().x,
        y: centerFour.getBoundingClientRect().y
      }
    ];

    let topPoints = [
      {
        x: topOne.getBoundingClientRect().x,
        y: topOne.getBoundingClientRect().y
      },
      {
        x: topTwo.getBoundingClientRect().x,
        y: topTwo.getBoundingClientRect().y
      },
      {
        x: topThree.getBoundingClientRect().x,
        y: topThree.getBoundingClientRect().y
      },
      {
        x: topFour.getBoundingClientRect().x,
        y: topFour.getBoundingClientRect().y
      }
    ];

    let bottomPoints = [
      {
        x: bottomOne.getBoundingClientRect().x,
        y: bottomOne.getBoundingClientRect().y
      },
      {
        x: bottomTwo.getBoundingClientRect().x,
        y: bottomTwo.getBoundingClientRect().y
      },
      {
        x: bottomThree.getBoundingClientRect().x,
        y: bottomThree.getBoundingClientRect().y
      },
      {
        x: bottomFour.getBoundingClientRect().x,
        y: bottomFour.getBoundingClientRect().y
      }
    ];

    document.addEventListener("keydown", function(e) {
      e.preventDefault();
      if (e.repeat) return;
      if (e.key == "ArrowRight") {
        arrRightInt = setInterval(function() {
          let rotSpeed = 4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "d" || e.key == "D") {
        dInt = setInterval(function() {
          let rotSpeed = 4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowLeft") {
        arrLeftInt = setInterval(function() {
          let rotSpeed = -4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "a" || e.key == "A") {
        aInt = setInterval(function() {
          let rotSpeed = -4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowDown") {
        arrDownInt = setInterval(function() {
          let speed = -4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, topPoints) === false &&
            tank2.checkMovement(speed, bottomPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "ArrowUp") {
        arrUpInt = setInterval(function() {
          let speed = 4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, topPoints) === false &&
            tank2.checkMovement(speed, bottomPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "s" || e.key == "S") {
        sInt = setInterval(function() {
          let speed = -4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, topPoints) === false &&
            tank1.checkMovement(speed, bottomPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }
      if (e.key == "w" || e.key == "W") {
        wInt = setInterval(function() {
          let speed = 4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, topPoints) === false &&
            tank1.checkMovement(speed, bottomPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }

      if (e.key == " ") {
        tank2.shoot();
      }
      if (e.key == "e" || e.key == "E") {
        tank1.shoot();
      }
    });
  } else if (LAYOUT_CONFIG === "chaos") {
    let centerOne = document.getElementById("center-one");
    let centerTwo = document.getElementById("center-two");
    let centerThree = document.getElementById("center-three");
    let centerFour = document.getElementById("center-four");
    let leftOne = document.getElementById("left-one");
    let leftTwo = document.getElementById("left-two");
    let leftThree = document.getElementById("left-three");
    let leftFour = document.getElementById("left-four");
    let rightOne = document.getElementById("right-one");
    let rightTwo = document.getElementById("right-two");
    let rightThree = document.getElementById("right-three");
    let rightFour = document.getElementById("right-four");

    let centerPoints = [
      {
        x: centerOne.getBoundingClientRect().x,
        y: centerOne.getBoundingClientRect().y
      },
      {
        x: centerTwo.getBoundingClientRect().x,
        y: centerTwo.getBoundingClientRect().y
      },
      {
        x: centerThree.getBoundingClientRect().x,
        y: centerThree.getBoundingClientRect().y
      },
      {
        x: centerFour.getBoundingClientRect().x,
        y: centerFour.getBoundingClientRect().y
      }
    ];

    let leftPoints = [
      {
        x: leftOne.getBoundingClientRect().x,
        y: leftOne.getBoundingClientRect().y
      },
      {
        x: leftTwo.getBoundingClientRect().x,
        y: leftTwo.getBoundingClientRect().y
      },
      {
        x: leftThree.getBoundingClientRect().x,
        y: leftThree.getBoundingClientRect().y
      },
      {
        x: leftFour.getBoundingClientRect().x,
        y: leftFour.getBoundingClientRect().y
      }
    ];
    let rightPoints = [
      {
        x: rightOne.getBoundingClientRect().x,
        y: rightOne.getBoundingClientRect().y
      },
      {
        x: rightTwo.getBoundingClientRect().x,
        y: rightTwo.getBoundingClientRect().y
      },
      {
        x: rightThree.getBoundingClientRect().x,
        y: rightThree.getBoundingClientRect().y
      },
      {
        x: rightFour.getBoundingClientRect().x,
        y: rightFour.getBoundingClientRect().y
      }
    ];
    //add event listeners to create movement setIntervals or clear them based on player input
    document.addEventListener("keydown", function(e) {
      e.preventDefault();
      if (e.repeat) return;
      if (e.key == "ArrowRight") {
        arrRightInt = setInterval(function() {
          let rotSpeed = 4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "d" || e.key == "D") {
        dInt = setInterval(function() {
          let rotSpeed = 4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowLeft") {
        arrLeftInt = setInterval(function() {
          let rotSpeed = -4;
          tank2.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "a" || e.key == "A") {
        aInt = setInterval(function() {
          let rotSpeed = -4;
          tank1.rotate(rotSpeed);
        }, 20);
      }
      if (e.key == "ArrowDown") {
        arrDownInt = setInterval(function() {
          let speed = -4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, leftPoints) === false &&
            tank2.checkMovement(speed, rightPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "ArrowUp") {
        arrUpInt = setInterval(function() {
          let speed = 4;
          if (
            tank2.checkMovement(speed, TOP_POINTS) === false &&
            tank2.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank2.checkMovement(speed, LEFT_POINTS) === false &&
            tank2.checkMovement(speed, RIGHT_POINTS) === false &&
            tank2.checkMovement(speed, centerPoints) === false &&
            tank2.checkMovement(speed, leftPoints) === false &&
            tank2.checkMovement(speed, rightPoints) === false &&
            tank2.checkMovement(speed, tank1.points) === false
          ) {
            tank2.move(speed);
          }
        }, 20);
      }
      if (e.key == "s" || e.key == "S") {
        sInt = setInterval(function() {
          let speed = -4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, leftPoints) === false &&
            tank1.checkMovement(speed, rightPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }
      if (e.key == "w" || e.key == "W") {
        wInt = setInterval(function() {
          let speed = 4;
          if (
            tank1.checkMovement(speed, TOP_POINTS) === false &&
            tank1.checkMovement(speed, BOTTOM_POINTS) === false &&
            tank1.checkMovement(speed, LEFT_POINTS) === false &&
            tank1.checkMovement(speed, RIGHT_POINTS) === false &&
            tank1.checkMovement(speed, centerPoints) === false &&
            tank1.checkMovement(speed, leftPoints) === false &&
            tank1.checkMovement(speed, rightPoints) === false &&
            tank1.checkMovement(speed, tank2.points) === false
          ) {
            tank1.move(speed);
          }
        }, 20);
      }

      if (e.key == " ") {
        tank2.shoot();
      }
      if (e.key == "e" || e.key == "E") {
        tank1.shoot();
      }
    });
  }

  document.addEventListener("keyup", function(e) {
    if (e.repeat) return;
    if (e.key == "ArrowRight") {
      clearInterval(arrRightInt);
      arrRightInt = null;
    }
    if (e.key == "ArrowLeft") {
      clearInterval(arrLeftInt);
      arrLeftInt = null;
    }
    if (e.key == "a" || e.key == "A") {
      clearInterval(aInt);
      aInt = null;
    }
    if (e.key == "d" || e.key == "D") {
      clearInterval(dInt);
      dInt = null;
    }
    if (e.key == "ArrowDown") {
      clearInterval(arrDownInt);
      arrDownInt = null;
    }
    if (e.key == "ArrowUp") {
      clearInterval(arrUpInt);
      arrUpInt = null;
    }
    if (e.key == "s" || e.key == "S") {
      clearInterval(sInt);
      sInt = null;
    }
    if (e.key == "w" || e.key == "W") {
      clearInterval(wInt);
      wInt = null;
    }
  });

  //interval to reload one bullet every second
  setInterval(function() {
    tank1.stockpile += 1;
    tank2.stockpile += 1;
  }, 1000);

  //HIGHLY EXPERIMENTAL:
  setInterval(function() {
    Bullet.all().forEach(bullet => {
      bullet.updatePoints();
      otherBullets = Bullet.all().filter(otherBullet => {
        return otherBullet !== bullet;
      });
      otherBullets.forEach(otherBullet => {
        otherBullet.updatePoints();
        if (doPolygonsIntersect(otherBullet.points, bullet.points)) {
          otherBullet.explode();
          bullet.explode();
        }
      });
    });
  }, 100);

  //interval to update rotation of tanks and check for collision. If collision occurs, create a "bouncing" effect.
  setInterval(function() {
    tank1.tankDiv.style.transform = `rotate(${tank1.direction - 90}deg)`;
    tank2.tankDiv.style.transform = `rotate(${tank2.direction - 90}deg)`;

    tank1.updatePoints();
    tank2.updatePoints();

    if (doPolygonsIntersect(tank1.points, tank2.points)) {
      remedyTank1Rotation();
      remedyTank2Rotation();
    }

    if (doPolygonsIntersect(TOP_POINTS, tank1.points)) {
      remedyTank1Rotation();
    }
    if (doPolygonsIntersect(BOTTOM_POINTS, tank1.points)) {
      remedyTank1Rotation();
    }
    if (doPolygonsIntersect(LEFT_POINTS, tank1.points)) {
      remedyTank1Rotation();
    }
    if (doPolygonsIntersect(RIGHT_POINTS, tank1.points)) {
      remedyTank1Rotation();
    }
    if (doPolygonsIntersect(TOP_POINTS, tank2.points)) {
      remedyTank2Rotation();
    }
    if (doPolygonsIntersect(BOTTOM_POINTS, tank2.points)) {
      remedyTank2Rotation();
    }
    if (doPolygonsIntersect(LEFT_POINTS, tank2.points)) {
      remedyTank2Rotation();
    }
    if (doPolygonsIntersect(RIGHT_POINTS, tank2.points)) {
      remedyTank2Rotation();
    }

    Bullet.all().forEach(bullet => {
      bullet.updatePoints();
      if (doPolygonsIntersect(tank1.points, bullet.points)) {
        tank1.loseLife();
      }
      if (doPolygonsIntersect(tank2.points, bullet.points)) {
        tank2.loseLife();
      }
    });

    if (LAYOUT_CONFIG === "verticalLayout") {
      let centerOne = document.getElementById("center-one");
      let centerTwo = document.getElementById("center-two");
      let centerThree = document.getElementById("center-three");
      let centerFour = document.getElementById("center-four");

      let centerPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];

      let centerLeftPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        }
      ];
      let centerRightPoints = [
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerBottomPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerTopPoints = [
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(centerPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(centerPoints, tank2.points)) {
        remedyTank2Rotation();
      }

      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(centerLeftPoints, bullet.points) ||
          doPolygonsIntersect(centerRightPoints, bullet.points) ||
          doPolygonsIntersect(LEFT_POINTS, bullet.points) ||
          doPolygonsIntersect(RIGHT_POINTS, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(centerTopPoints, bullet.points) ||
          doPolygonsIntersect(centerBottomPoints, bullet.points) ||
          doPolygonsIntersect(TOP_POINTS, bullet.points) ||
          doPolygonsIntersect(BOTTOM_POINTS, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });
    } else if (LAYOUT_CONFIG === "sLayout") {
      let centerOne = document.getElementById("center-one");
      let centerTwo = document.getElementById("center-two");
      let centerThree = document.getElementById("center-three");
      let centerFour = document.getElementById("center-four");

      let centerPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];

      let centerLeftPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        }
      ];
      let centerRightPoints = [
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerBottomPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerTopPoints = [
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(centerPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(centerPoints, tank2.points)) {
        remedyTank2Rotation();
      }
      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(centerLeftPoints, bullet.points) ||
          doPolygonsIntersect(centerRightPoints, bullet.points) ||
          doPolygonsIntersect(LEFT_POINTS, bullet.points) ||
          doPolygonsIntersect(RIGHT_POINTS, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(centerTopPoints, bullet.points) ||
          doPolygonsIntersect(centerBottomPoints, bullet.points) ||
          doPolygonsIntersect(TOP_POINTS, bullet.points) ||
          doPolygonsIntersect(BOTTOM_POINTS, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });

      let topOne = document.getElementById("top-one");
      let topTwo = document.getElementById("top-two");
      let topThree = document.getElementById("top-three");
      let topFour = document.getElementById("top-four");

      let topPoints = [
        {
          x: topOne.getBoundingClientRect().x,
          y: topOne.getBoundingClientRect().y
        },
        {
          x: topTwo.getBoundingClientRect().x,
          y: topTwo.getBoundingClientRect().y
        },
        {
          x: topThree.getBoundingClientRect().x,
          y: topThree.getBoundingClientRect().y
        },
        {
          x: topFour.getBoundingClientRect().x,
          y: topFour.getBoundingClientRect().y
        }
      ];
      let topLeftPoints = [
        {
          x: topThree.getBoundingClientRect().x,
          y: topThree.getBoundingClientRect().y
        },
        {
          x: topFour.getBoundingClientRect().x,
          y: topFour.getBoundingClientRect().y
        }
      ];
      let topRightPoints = [
        {
          x: topOne.getBoundingClientRect().x,
          y: topOne.getBoundingClientRect().y
        },
        {
          x: topTwo.getBoundingClientRect().x,
          y: topTwo.getBoundingClientRect().y
        }
      ];
      let topTopPoints = [
        {
          x: topThree.getBoundingClientRect().x,
          y: topThree.getBoundingClientRect().y
        },
        {
          x: topTwo.getBoundingClientRect().x,
          y: topTwo.getBoundingClientRect().y
        }
      ];
      let topBottomPoints = [
        {
          x: topOne.getBoundingClientRect().x,
          y: topOne.getBoundingClientRect().y
        },
        {
          x: topFour.getBoundingClientRect().x,
          y: topFour.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(topPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(topPoints, tank2.points)) {
        remedyTank2Rotation();
      }
      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(topLeftPoints, bullet.points) ||
          doPolygonsIntersect(topRightPoints, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(topTopPoints, bullet.points) ||
          doPolygonsIntersect(topBottomPoints, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });

      let bottomOne = document.getElementById("bottom-one");
      let bottomTwo = document.getElementById("bottom-two");
      let bottomThree = document.getElementById("bottom-three");
      let bottomFour = document.getElementById("bottom-four");

      let bottomPoints = [
        {
          x: bottomOne.getBoundingClientRect().x,
          y: bottomOne.getBoundingClientRect().y
        },
        {
          x: bottomTwo.getBoundingClientRect().x,
          y: bottomTwo.getBoundingClientRect().y
        },
        {
          x: bottomThree.getBoundingClientRect().x,
          y: bottomThree.getBoundingClientRect().y
        },
        {
          x: bottomFour.getBoundingClientRect().x,
          y: bottomFour.getBoundingClientRect().y
        }
      ];
      let bottomLeftPoints = [
        {
          x: bottomOne.getBoundingClientRect().x,
          y: bottomOne.getBoundingClientRect().y
        },
        {
          x: bottomTwo.getBoundingClientRect().x,
          y: bottomTwo.getBoundingClientRect().y
        }
      ];
      let bottomTopPoints = [
        {
          x: bottomThree.getBoundingClientRect().x,
          y: bottomThree.getBoundingClientRect().y
        },
        {
          x: bottomTwo.getBoundingClientRect().x,
          y: bottomTwo.getBoundingClientRect().y
        }
      ];
      let bottomRightPoints = [
        {
          x: bottomThree.getBoundingClientRect().x,
          y: bottomThree.getBoundingClientRect().y
        },
        {
          x: bottomFour.getBoundingClientRect().x,
          y: bottomFour.getBoundingClientRect().y
        }
      ];
      let bottomBottomPoints = [
        {
          x: bottomOne.getBoundingClientRect().x,
          y: bottomOne.getBoundingClientRect().y
        },
        {
          x: bottomFour.getBoundingClientRect().x,
          y: bottomFour.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(bottomPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(bottomPoints, tank2.points)) {
        remedyTank2Rotation();
      }
      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(bottomLeftPoints, bullet.points) ||
          doPolygonsIntersect(bottomRightPoints, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(bottomTopPoints, bullet.points) ||
          doPolygonsIntersect(bottomBottomPoints, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });
    } else if (LAYOUT_CONFIG === "chaos") {
      let centerOne = document.getElementById("center-one");
      let centerTwo = document.getElementById("center-two");
      let centerThree = document.getElementById("center-three");
      let centerFour = document.getElementById("center-four");

      let centerPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];

      let centerLeftPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        }
      ];
      let centerRightPoints = [
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerBottomPoints = [
        {
          x: centerOne.getBoundingClientRect().x,
          y: centerOne.getBoundingClientRect().y
        },
        {
          x: centerFour.getBoundingClientRect().x,
          y: centerFour.getBoundingClientRect().y
        }
      ];
      let centerTopPoints = [
        {
          x: centerTwo.getBoundingClientRect().x,
          y: centerTwo.getBoundingClientRect().y
        },
        {
          x: centerThree.getBoundingClientRect().x,
          y: centerThree.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(centerPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(centerPoints, tank2.points)) {
        remedyTank2Rotation();
      }
      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(centerLeftPoints, bullet.points) ||
          doPolygonsIntersect(centerRightPoints, bullet.points) ||
          doPolygonsIntersect(LEFT_POINTS, bullet.points) ||
          doPolygonsIntersect(RIGHT_POINTS, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(centerTopPoints, bullet.points) ||
          doPolygonsIntersect(centerBottomPoints, bullet.points) ||
          doPolygonsIntersect(TOP_POINTS, bullet.points) ||
          doPolygonsIntersect(BOTTOM_POINTS, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });

      let leftOne = document.getElementById("left-one");
      let leftTwo = document.getElementById("left-two");
      let leftThree = document.getElementById("left-three");
      let leftFour = document.getElementById("left-four");

      let leftPoints = [
        {
          x: leftOne.getBoundingClientRect().x,
          y: leftOne.getBoundingClientRect().y
        },
        {
          x: leftTwo.getBoundingClientRect().x,
          y: leftTwo.getBoundingClientRect().y
        },
        {
          x: leftThree.getBoundingClientRect().x,
          y: leftThree.getBoundingClientRect().y
        },
        {
          x: leftFour.getBoundingClientRect().x,
          y: leftFour.getBoundingClientRect().y
        }
      ];

      let leftLeftPoints = [
        {
          x: leftOne.getBoundingClientRect().x,
          y: leftOne.getBoundingClientRect().y
        },
        {
          x: leftTwo.getBoundingClientRect().x,
          y: leftTwo.getBoundingClientRect().y
        }
      ];
      let leftRightPoints = [
        {
          x: leftThree.getBoundingClientRect().x,
          y: leftThree.getBoundingClientRect().y
        },
        {
          x: leftFour.getBoundingClientRect().x,
          y: leftFour.getBoundingClientRect().y
        }
      ];
      let leftBottomPoints = [
        {
          x: leftOne.getBoundingClientRect().x,
          y: leftOne.getBoundingClientRect().y
        },
        {
          x: leftFour.getBoundingClientRect().x,
          y: leftFour.getBoundingClientRect().y
        }
      ];
      let leftTopPoints = [
        {
          x: leftTwo.getBoundingClientRect().x,
          y: leftTwo.getBoundingClientRect().y
        },
        {
          x: leftThree.getBoundingClientRect().x,
          y: leftThree.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(leftPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(leftPoints, tank2.points)) {
        remedyTank2Rotation();
      }

      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(leftLeftPoints, bullet.points) ||
          doPolygonsIntersect(leftRightPoints, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(leftTopPoints, bullet.points) ||
          doPolygonsIntersect(leftBottomPoints, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });

      let rightOne = document.getElementById("right-one");
      let rightTwo = document.getElementById("right-two");
      let rightThree = document.getElementById("right-three");
      let rightFour = document.getElementById("right-four");

      let rightPoints = [
        {
          x: rightOne.getBoundingClientRect().x,
          y: rightOne.getBoundingClientRect().y
        },
        {
          x: rightTwo.getBoundingClientRect().x,
          y: rightTwo.getBoundingClientRect().y
        },
        {
          x: rightThree.getBoundingClientRect().x,
          y: rightThree.getBoundingClientRect().y
        },
        {
          x: rightFour.getBoundingClientRect().x,
          y: rightFour.getBoundingClientRect().y
        }
      ];

      let rightLeftPoints = [
        {
          x: rightOne.getBoundingClientRect().x,
          y: rightOne.getBoundingClientRect().y
        },
        {
          x: rightTwo.getBoundingClientRect().x,
          y: rightTwo.getBoundingClientRect().y
        }
      ];
      let rightRightPoints = [
        {
          x: rightThree.getBoundingClientRect().x,
          y: rightThree.getBoundingClientRect().y
        },
        {
          x: rightFour.getBoundingClientRect().x,
          y: rightFour.getBoundingClientRect().y
        }
      ];
      let rightBottomPoints = [
        {
          x: rightOne.getBoundingClientRect().x,
          y: rightOne.getBoundingClientRect().y
        },
        {
          x: rightFour.getBoundingClientRect().x,
          y: rightFour.getBoundingClientRect().y
        }
      ];
      let rightTopPoints = [
        {
          x: rightTwo.getBoundingClientRect().x,
          y: rightTwo.getBoundingClientRect().y
        },
        {
          x: rightThree.getBoundingClientRect().x,
          y: rightThree.getBoundingClientRect().y
        }
      ];

      if (doPolygonsIntersect(rightPoints, tank1.points)) {
        remedyTank1Rotation();
      }
      if (doPolygonsIntersect(rightPoints, tank2.points)) {
        remedyTank2Rotation();
      }

      Bullet.all().forEach(bullet => {
        bullet.updatePoints();
        if (
          doPolygonsIntersect(rightLeftPoints, bullet.points) ||
          doPolygonsIntersect(rightRightPoints, bullet.points)
        ) {
          bullet.ricochetVertical();
        } else if (
          doPolygonsIntersect(rightTopPoints, bullet.points) ||
          doPolygonsIntersect(rightBottomPoints, bullet.points)
        ) {
          bullet.ricochetHorizontal();
        }
      });
    }
  }, 20);
};
