const ASSET_ROOT = "./assets";
let gameDiv = document.querySelector("#game_window");
let verticalObstacleDiv = document.querySelector("#center");
let horozontalObstacleDiv = document.querySelector("#topSideways");
let bottomHorozontalObstacleDiv = document.querySelector("#bottomSideways");
let height = gameDiv.clientHeight;
let width = gameDiv.clientWidth;
let barrierHeight = height - 434;
let barrierWidth = width - 310;
console.log("hi");

function background() {
  let imgSrc = `${ASSET_ROOT}/Environment/dirt.png`;
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
background();

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
border();

function verticalLayout() {
  let obstacleHeight = 0;
  while (obstacleHeight < barrierHeight) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    verticalObstacleDiv.append(metalBarrelObstable);
    obstacleHeight += 62;
  }
}

function sLayout() {
  let obstacleHeight = 0;
  let topObstacleWidth = 0;
  let bottomObstacleWidth = 0;
  while (obstacleHeight < barrierHeight) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    verticalObstacleDiv.append(metalBarrelObstable);
    obstacleHeight += 62;
  }
  while (topObstacleWidth < barrierWidth) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    metalBarrelObstable.style.transform = "rotate(90deg)";
    horozontalObstacleDiv.append(metalBarrelObstable);
    topObstacleWidth += 200;
  }
  while (bottomObstacleWidth < barrierWidth) {
    bottomHorozontalObstacleDiv.style.top = height * 0.25 + barrierHeight;
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    metalBarrelObstable.style.transform = "rotate(90deg)";
    bottomHorozontalObstacleDiv.append(metalBarrelObstable);
    bottomObstacleWidth += 200;
  }
}

functionArray = [verticalLayout, sLayout];

function randomMap() {
  let randMap = functionArray[Math.floor(Math.random() * functionArray.length)];
  randMap();
}
randomMap();
