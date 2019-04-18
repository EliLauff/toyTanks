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
  let randMap = functionArray[Math.floor(Math.random() * functionArray.length)];
  randMap();
}
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

  let leftDiv = document.getElementById("left");]
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
