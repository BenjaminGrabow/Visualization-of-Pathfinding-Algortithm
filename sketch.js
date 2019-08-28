let cols = 5;
let rows = 5;
let grid = new Array(cols);

function Spot() {
  this.f = 0;
  this.g = 0;
  this.h = 0;
}

function setup() {
 createCanvas(400, 400);
 console.log('A*');

 for (let i = 0; i < cols; i++) {
   grid[i] = new Array(rows);
 }

for (let i = 0; i < cols; i++) {
  for(let j = 0; j < rows; j++) {
    grid[i][j] = new Spot(rows);
  }
}
};

const draw = () => {
  background(0);
};

