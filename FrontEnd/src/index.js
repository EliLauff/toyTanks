
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
