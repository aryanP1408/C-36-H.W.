class Food{
    constructor(){
        var foodStock;
        var lastFed;
    }
    bedroom(){
        background(bedroom,550,550);
    }
    garden(){
        background(garden,550,550);
    }
    washroom(){
        background(washroom,550,550);
    }
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
        feed=createButton("Feed the dog");
        feed.position(700,95);
        feed.mousePressed(feedDog);

        addFood=createButton("Add Food");
        addFood.position(800,95);
        addFood.mousePressed(addFoods);
       if(KeyPressedUP){
       
       } 
       else{

       }
    }
}