//Create variables here
var dog,happyDog, database, foodS, foodStock , dog1, FeedPet, AddFood, StoreFedTime, StoreLastFed, foodObj, button2;
var changeGameState, readGameState, bedroom, garden ,washroom;
function preload()
{
  //load images here
  bedroom = loadImage("images/BedRoom.png");
  garden = loadImage("images/Garden.png");
  washroom = loadImage("images/WashRoom.png");
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
  milk = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);  
  foodStock= database.ref('/Food');
  foodStock.on("value",realStock);
  dog1 = createSprite(200,200,30,20);
 dog1.addImage(dog);
 dog1.scale = 0.5;
 //read game state from database
 readState = database.ref('gamestate');
 readState.on = data.val();

}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


function draw() {  
background(46,139,87);
currentTime = hour();
if(currentTime == (lastFed+1)){
  update("playing");
  foodObj.garden();
}else if(currentTime==(lastFed+2)){
  update("sleeping");
  foodObj.bedroom();
}else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
  update("bathing");
  foodObj.washroom();
}else{
  update("Hungry");
  foodObj.display();
}
if (gamestate!= "Hungry"){
  feedDog.hide();
  dog1.remove();
}else{
  feedDog.show();
  dog1.addImage(sadDog);
}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happyDog);
}
  fill(255,255,254);
  textSize(15);
  if(FeedPet>=12){
    text("Last Feed :" +FeedPet%12 + "PM" , +350,30);
  }
  else if(FeedPet==0){
    text("Last Feed : 12 AM",350,30);
  }
  else{
    text("Last Feed : "+ FeedPet + "AM", 350,30);
  }
}

 //drawSprites()

  //add styles her
  
 
  

  


  //Function to read values from DB
  function realStock(data){
    foodS=data.val();
  }
  //Function to write values in DB
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })
  }



