const ASSET_ROOT = "./assets";
let livesDiv = document.querySelector("#lives");
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
