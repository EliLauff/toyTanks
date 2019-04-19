const renderGame = function() {
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

  tank1 = new Tank("red", 1);
  tank2 = new Tank("blue", 2);

  document.addEventListener("DOMContentLoaded", function() {
    tank1.setLives();
    tank2.setLives();
  });

  //create movement interval variables and set them to null
  let arrRightInt = null;
  let arrLeftInt = null;
  let aInt = null;
  let dInt = null;
  let arrUpInt = null;
  let arrDownInt = null;
  let wInt = null;
  let sInt = null;

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
