var canvas, backgroundImage;

var playerCount = 0;

var database;

var form, player;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  player = new Player();
 form = new Form();
 form.display();
}

function draw(){
  
}