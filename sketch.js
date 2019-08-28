let cols = 5;
let rows = 5;
let grid = new Array(cols);

let openSet = [];
let closedSet = [];
let start; 
let end;

function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.show = function() {
  rect(this.x.this.v.);
  }
}

function setup() {
 createCanvas(400, 400);
 console.log('A*');

 for (let i = 0; i < cols; i++) {
   grid[i] = new Array(rows);
 }

for (let i = 0; i < cols; i++) {
  for(let j = 0; j < rows; j++) {
    grid[i][j] = new Spot(i, j);
  }
}

start = grid[0][0];
end = grid[cols - 1][rows - 1];

openSet.push(start);

};

const draw = () => {

  if(openSet.length > 0){
// keep going 
  } else {
    // no Solution
  }
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
 grid[i][j].show();
    }
  }
};

//stopped Minute 19 

