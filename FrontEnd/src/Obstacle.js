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
}

function sLayout() {
  let topObstacleWidth = 0;
  let bottomObstacleWidth = 0;
  verticalLayout();
  let topDiv = document.createElement("div");
  topDiv.id = "topSideways";
  while (topObstacleWidth < barrierWidth) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    metalBarrelObstable.style.transform = "rotate(90deg)";
    topDiv.append(metalBarrelObstable);
    gameDiv.append(topDiv);
    topObstacleWidth += 200;
  }
  let bottomDiv = document.createElement("div");
  bottomDiv.id = "bottomSideways";
  while (bottomObstacleWidth < barrierWidth) {
    bottomDiv.style.top = height * 0.2 + barrierHeight;
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    metalBarrelObstable.style.transform = "rotate(90deg)";
    bottomDiv.append(metalBarrelObstable);
    gameDiv.append(bottomDiv);
    bottomObstacleWidth += 200;
  }
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
}

functionArray = [verticalLayout, sLayout, chaos];

function randomMap() {
  let randMap = functionArray[Math.floor(Math.random() * functionArray.length)];
  randMap();
}
randomMap();
