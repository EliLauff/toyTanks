let gameDiv = document.querySelector("#game_window")
let obstacleDiv = document.querySelector("#center")
let height = gameDiv.clientHeight
let width = gameDiv.clientWidth
let barrierHeight = height - 434
console.log("hi")

function border(){
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
border()

function obstacleLayout() {
    let y = 0;
    let obstacleHeight = 0;
    while(obstacleHeight < barrierHeight) {
        const metalBarrelObstable = document.createElement("img");
        metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png"
        obstacleDiv.append(metalBarrelObstable)
        obstacleHeight += 66
    }   
}

// function obstacleLayout() {
//     let y = 0;
//     let obstacleHeight = 0;
//     while(obstacleHeight < barrierHeight) {
//         const metalBarrelObstable = document.createElement("img");
//         metalBarrelObstable.src = "./assets/Obstacles/barrelGrey_sde_rust.png"
//         obstacleDiv.append(metalBarrelObstable)
//         obstacleHeight += 66
//     }   
// }

functionArray = [obstacleLayout]
functionArray[0]()