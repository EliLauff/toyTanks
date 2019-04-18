function verticalLayout() {
  let centerHeight = 0;
  while (centerHeight < barrierHeight) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    verticalObstacleDiv.append(metalBarrelObstable);
    centerHeight += 62;
  }
}

function sLayout() {
  let topObstacleWidth = 0;
  let bottomObstacleWidth = 0;
  verticalLayout();
  while (topObstacleWidth < barrierWidth) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust_2.png";
    horozontalObstacleDiv.append(metalBarrelObstable);
    topObstacleWidth += 62;
  }
  while (bottomObstacleWidth < barrierWidth) {
    // bottomHorozontalObstacleDiv.style.top = height * 0.2 + barrierHeight;
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust_2.png";
    bottomHorozontalObstacleDiv.append(metalBarrelObstable);
    bottomObstacleWidth += 62;
  }
}

function chaos() {
  verticalLayout();
  let leftHeight = 0;
  while (leftHeight < barrierHeight) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    leftDiv.append(metalBarrelObstable);
    leftHeight += 62;
  }
  let rightHeight = 0;
  while (rightHeight < barrierHeight) {
    const metalBarrelObstable = document.createElement("img");
    metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png";
    rightDiv.append(metalBarrelObstable);
    rightHeight += 62;
  }
}

functionArray = [verticalLayout, sLayout, chaos];

function randomMap() {
  let randMap = functionArray[Math.floor(Math.random() * functionArray.length)];
  randMap();
}
randomMap();
