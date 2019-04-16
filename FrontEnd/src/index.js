// Define a variable to use when we need to set the characters image src

// Create an img element to represent the character
// const character = document.createElement("img");
// const blueTank = document.createElement("img");
// const sandBag = document.createElement("img");
// Make the character a little bigger
// character.style.width = "75px";

// Position the character absolutely in the lower left corner of the screen
// character.style.position = "absolute";
// character.style.left = "500px";
// character.style.bottom = "500px";

// blueTank.style.position = "absolute";
// blueTank.style.left = "1000px";
// blueTank.style.bottom = "500px";

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

// let y = 0;
// let barrierHeight = 0;
// while (barrierHeight <= windowHeight - 88) {
//   const sandBagLeft = document.createElement("img");
//   sandBagLeft.style.transform = "rotate(90deg)";
//   sandBagLeft.style.position = "absolute";
//   sandBagLeft.style.left = `-8px`;
//   sandBagLeft.style.bottom = `${44 + y * 66}`;
//   barrierHeight = parseInt(sandBagLeft.style.bottom) + 66;
//   sandBagLeft.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
//   document.body.append(sandBagLeft);

//   const sandBagRight = document.createElement("img");
//   sandBagRight.style.transform = "rotate(90deg)";
//   sandBagRight.style.position = "absolute";
//   sandBagRight.style.right = `-8px`;
//   sandBagRight.style.bottom = `${44 + y * 66}`;
//   sandBagRight.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
//   document.body.append(sandBagRight);
//   y++;
// }

// let i = 0;
// let barrierWidth = 0;
// while (barrierWidth <= windowWidth - 66) {
//   const sandBagTop = document.createElement("img");
//   sandBagTop.style.position = "absolute";
//   sandBagTop.style.left = `${0 + i * 66}px`;
//   barrierWidth = parseInt(sandBagTop.style.left) + 66;
//   sandBagTop.style.top = "0px";
//   sandBagTop.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
//   document.body.append(sandBagTop);

//   const sandBagBottom = document.createElement("img");
//   sandBagBottom.style.position = "absolute";
//   sandBagBottom.style.left = `${0 + i * 66}px`;
//   sandBagBottom.style.bottom = `0px`;
//   sandBagBottom.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;
//   document.body.append(sandBagBottom);
//   i++;
// }

// sandBag.style.position = "absolute";
// sandBag.style.left = "0px";
// sandBag.style.bottom = "0px";
// Set the src of the img so the browser knows what to show
// character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
// blueTank.src = `${ASSET_ROOT}/Tanks/tankBlue_outline.png`;
// sandBag.src = `${ASSET_ROOT}/Obstacles/sandbagBrown.png`;

// Add the character image to the page
// document.body.append(character);
// document.body.append(blueTank);
// document.body.append(sandBag);
// Define a variable to represent the direction our character is moving
// let direction = null;

// Define a variable to reperesent the speed of our character
// let speed = 2;
// let right = false;
// let left = false;
// let down = false;
// let up = false;

// function walkRight() {
//   right = true;
// }

// function walkLeft() {
//   left = true;
// }

// function walkUp() {
//   up = true;
// }

// function walkDown() {
//   down = true;
// }

// function stopLeft() {
//   character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
//   left = false;
// }
// function stopRight() {
//   character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
//   right = false;
// }
// function stopDown() {
//   character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
//   down = false;
// }
// function stopUp() {
//   character.src = `${ASSET_ROOT}/Tanks/tankRed_outline.png`;
//   up = false;
// }

// Have someone at your table do some research on  setInterval- what is it doing?
tank1 = new Tank("red", 1);
tank2 = new Tank("blue", 2);

setInterval(function() {
  tank1.move();
  tank2.move();
  tank1.tankImg.style.transform = `rotate(${tank1.direction - 90}deg)`;
  tank2.tankImg.style.transform = `rotate(${tank2.direction - 90}deg)`;
}, 20);

let arrRightInt;
let arrLeftInt;
let aInt;
let dInt;

document.addEventListener("keydown", function(e) {
  console.log(tank1.direction);
  if (e.repeat) return;
  if (e.key == "ArrowRight") {
    arrRightInt = setInterval(function() {
      tank2.direction = tank2.direction + 3;
    }, 30);
  }
  if (e.key == "d") {
    dInt = setInterval(function() {
      tank1.direction = tank1.direction + 3;
    }, 30);
  }
  if (e.key == "ArrowLeft") {
    arrLeftInt = setInterval(function() {
      tank2.direction = tank2.direction - 3;
    }, 30);
  }
  if (e.key == "a") {
    aInt = setInterval(function() {
      tank1.direction = tank1.direction - 3;
    }, 30);
  }
  if (e.key == "ArrowDown") {
    tank2.speed = -2;
  }
  if (e.key == "s") {
    tank1.speed = -2;
  }
  if (e.key == "ArrowUp") {
    tank2.speed = 2;
  }
  if (e.key == "w") {
    tank1.speed = 2;
  }
  if (e.key == "Alt") {
    tank2.fire();
  }
  if (e.key == "e") {
    tank1.fire();
  }
  // console.log(e.key);
});

document.addEventListener("keyup", function(e) {
  console.log(tank1.direction);
  if (e.repeat) return;
  if (e.key == "ArrowRight") {
    clearInterval(arrRightInt);
  }
  if (e.key == "ArrowLeft") {
    clearInterval(arrLeftInt);
  }
  if (e.key == "a") {
    clearInterval(aInt);
  }
  if (e.key == "d") {
    clearInterval(dInt);
  }
  if (e.key == "ArrowDown") {
    tank2.speed = 0;
  }
  if (e.key == "s") {
    tank1.speed = 0;
  }
  if (e.key == "ArrowUp") {
    tank2.speed = 0;
  }
  if (e.key == "w") {
    tank1.speed = 0;
  }
});
