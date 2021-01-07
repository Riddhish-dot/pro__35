//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImage,dogImage2

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  dog = createSprite(250,250,0,0)
  dog.addImage("a",dogImage)
  dog.scale = 0.25
}


function draw() {  
backGround(46,139,87)
  drawSprites();
  //add styles here

}



