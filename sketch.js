var wall;
var c1,c2,c3;
var speed;
var weight;
var deformation;




function setup() {
  createCanvas(1600, 800);

  speed = random(30, 95);
  console.log(speed);

  weight = random(400, 1500);
  console.log(weight);

  car  = createSprite(200,200,50,50);
  car.shapeColor = "white"
  car.velocityX = 12;


  c1 = createSprite(car.x,car.y,50,50);
  c1.shapeColor = "red"
  c1.velocityX = 12;
  c1.visible = false;



  c2 = createSprite(car.x,car.y,50,50);
  c2.shapeColor = "orange"
  c2.velocityX = 12;
  c2.visible = false;



  c3 = createSprite(car.x,car.y,50,50);
  c3.shapeColor = "green"
  c3.velocityX = 12;
  c3.visible = false;




  wall = createSprite(1500, 200, 60, 400);
  wall.shapeColor = color(80, 80, 80);








}

function draw() {
  background(0, 0, 0);
  Deformation();
  car.collide(wall);
  c1.collide(wall);
  c2.collide(wall);
  c3.collide(wall);


  drawSprites();
}


function Deformation(){
  deformation = 0.5 * weight * speed * speed / 22500;

  if(deformation > 180  &&  car.collide(wall)){
    c1.visible = true;
    car.visible = false;
    
    
    

  }


  if(deformation < 80  &&  car.collide(wall)){
    c3.visible = true;
    car.visible = false;
    
    
    
  }


  if(deformation >80<180  &&  car.collide(wall)){
    c2.visible = true;
    car.visible = false;
    
    
    
  }
}



