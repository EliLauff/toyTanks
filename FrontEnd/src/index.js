tank1 = new Tank("red", 1);
tank2 = new Tank("blue", 2);


document.addEventListener("DOMContentLoaded", function(){
  tank1.setLives()
  tank2.setLives()
})



//create movement interval variables and set them to null
let arrRightInt = null;
let arrLeftInt = null;
let aInt = null;
let dInt = null;
let arrUpInt = null;
let arrDownInt = null;
let wInt = null;
let sInt = null;

//add event listeners to create movement setIntervals or clear them based on player input
document.addEventListener("keydown", function(e) {
  e.preventDefault();
  if (e.repeat) return;
  if (e.key == "ArrowRight") {
    arrRightInt = setInterval(function() {
      let rotSpeed = 3;
      tank2.rotate(rotSpeed);
    }, 20);
  }
  if (e.key == "d" || e.key == "D") {
    dInt = setInterval(function() {
      let rotSpeed = 3;
      tank1.rotate(rotSpeed);
    }, 20);
  }
  if (e.key == "ArrowLeft") {
    arrLeftInt = setInterval(function() {
      let rotSpeed = -3;
      tank2.rotate(rotSpeed);
    }, 20);
  }
  if (e.key == "a" || e.key == "A") {
    aInt = setInterval(function() {
      let rotSpeed = -3;
      tank1.rotate(rotSpeed);
    }, 20);
  }
  if (e.key == "ArrowDown") {
    arrDownInt = setInterval(function() {
      let speed = -3;
      tank2.move(speed);
    }, 20);
  }
  if (e.key == "ArrowUp") {
    arrUpInt = setInterval(function() {
      let speed = 3;
      tank2.move(speed);
    }, 20);
  }
  if (e.key == "s" || e.key == "S") {
    sInt = setInterval(function() {
      let speed = -3;
      tank1.move(speed);
    }, 20);
  }
  if (e.key == "w" || e.key == "W") {
    wInt = setInterval(function() {
      let speed = 3;
      tank1.move(speed);
    }, 20);
  }

  if (e.key == "Shift") {
    tank2.fire();
  }
  if (e.key == "e" || e.key == "E") {
    tank1.fire();
  }
});

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

//interval to update rotation of tanks and check for collision. If collision occurs, create a "bouncing" effect.
setInterval(function() {
  tank1.tankDiv.style.transform = `rotate(${tank1.direction - 90}deg)`;
  tank2.tankDiv.style.transform = `rotate(${tank2.direction - 90}deg)`;

  tank1.updatePoints();
  tank2.updatePoints();

  if (doPolygonsIntersect(tank1.points, tank2.points)) {
    remedyTank1Movement();
    remedyTank2Movement();
  }

  if (doPolygonsIntersect(TOP_POINTS, tank1.points)) {
    remedyTank1Movement(TOP_POINTS);
  }
  if (doPolygonsIntersect(BOTTOM_POINTS, tank1.points)) {
    remedyTank1Movement(BOTTOM_POINTS);
  }
  if (doPolygonsIntersect(LEFT_POINTS, tank1.points)) {
    remedyTank1Movement(LEFT_POINTS);
  }
  if (doPolygonsIntersect(RIGHT_POINTS, tank1.points)) {
    remedyTank1Movement(RIGHT_POINTS);
  }
  if (doPolygonsIntersect(TOP_POINTS, tank2.points)) {
    remedyTank2Movement(TOP_POINTS);
  }
  if (doPolygonsIntersect(BOTTOM_POINTS, tank2.points)) {
    remedyTank2Movement(BOTTOM_POINTS);
  }
  if (doPolygonsIntersect(LEFT_POINTS, tank2.points)) {
    remedyTank2Movement(LEFT_POINTS);
  }
  if (doPolygonsIntersect(RIGHT_POINTS, tank2.points)) {
    remedyTank2Movement(RIGHT_POINTS);
  }
}, 20);
