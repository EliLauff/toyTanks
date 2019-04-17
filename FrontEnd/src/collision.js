/**
 * Helper function to determine whether there is an intersection between the two polygons described
 * by the lists of vertices. Uses the Separating Axis Theorem
 *
 * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
 * @return true if there is any intersection between the 2 polygons, false otherwise
 */
function doPolygonsIntersect(a, b) {
  var polygons = [a, b];
  var minA, maxA, projected, i, i1, j, minB, maxB;

  for (i = 0; i < polygons.length; i++) {
    // for each polygon, look at each edge of the polygon, and determine if it separates
    // the two shapes
    var polygon = polygons[i];
    for (i1 = 0; i1 < polygon.length; i1++) {
      // grab 2 vertices to create an edge
      var i2 = (i1 + 1) % polygon.length;
      var p1 = polygon[i1];
      var p2 = polygon[i2];

      // find the line perpendicular to this edge
      var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

      minA = maxA = undefined;
      // for each vertex in the first shape, project it onto the line perpendicular to the edge
      // and keep track of the min and max of these values
      for (j = 0; j < a.length; j++) {
        projected = normal.x * a[j].x + normal.y * a[j].y;
        if (typeof minA == "undefined" || projected < minA) {
          minA = projected;
        }
        if (typeof maxA == "undefined" || projected > maxA) {
          maxA = projected;
        }
      }

      // for each vertex in the second shape, project it onto the line perpendicular to the edge
      // and keep track of the min and max of these values
      minB = maxB = undefined;
      for (j = 0; j < b.length; j++) {
        projected = normal.x * b[j].x + normal.y * b[j].y;
        if (typeof minB == "undefined" || projected < minB) {
          minB = projected;
        }
        if (typeof maxB == "undefined" || projected > maxB) {
          maxB = projected;
        }
      }

      // if there is no overlap between the projects, the edge we are looking at separates the two
      // polygons, and we know there is no overlap
      if (maxA < minB || maxB < minA) {
        return false;
      }
    }
  }
  return true;
}

function remedyMovement() {
  if (arrRightInt !== null) {
    let leftInt = setInterval(function() {
      let rotSpeed = -2;
      tank2.rotate(rotSpeed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        arrRightInt === null
      ) {
        clearInterval(leftInt);
        leftInt = null;
      }
    }, 20);
  }
  if (arrLeftInt !== null) {
    let rightInt = setInterval(function() {
      let rotSpeed = 2;
      tank2.rotate(rotSpeed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        arrLeftInt === null
      ) {
        clearInterval(rightInt);
        rightInt = null;
      }
    }, 20);
  }
  if (dInt !== null) {
    let leftInt = setInterval(function() {
      let rotSpeed = -2;
      tank1.rotate(rotSpeed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        dInt === null
      ) {
        clearInterval(leftInt);
        leftInt = null;
      }
    }, 20);
  }
  if (aInt !== null) {
    let rightInt = setInterval(function() {
      let rotSpeed = 2;
      tank1.rotate(rotSpeed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        aInt === null
      ) {
        clearInterval(rightInt);
        rightInt = null;
      }
    }, 20);
  }
  if (arrDownInt !== null) {
    let upInt = setInterval(function() {
      let speed = 8;
      tank2.move(speed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        arrDownInt === null
      ) {
        clearInterval(upInt);
        upInt = null;
      }
    }, 20);
  }
  if (arrUpInt !== null) {
    let downInt = setInterval(function() {
      let speed = -8;
      tank2.move(speed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        arrUpInt === null
      ) {
        clearInterval(downInt);
        downInt = null;
      }
    }, 20);
  }
  if (sInt !== null) {
    let upInt = setInterval(function() {
      let speed = 8;
      tank1.move(speed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        sInt === null
      ) {
        clearInterval(upInt);
        upInt = null;
      }
    }, 20);
  }
  if (wInt !== null) {
    let downInt = setInterval(function() {
      let speed = -8;
      tank1.move(speed);
      tank1.updatePoints();
      tank2.updatePoints();
      if (
        doPolygonsIntersect(tank1.points, tank2.points) === false ||
        wInt === null
      ) {
        clearInterval(downInt);
        downInt = null;
      }
    }, 20);
  }
}
