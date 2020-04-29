class Car{
    constructor(weight,speed){
        this.x = 400;
        this.y = 200;
        this.sprite = createSprite(this.x,this.y,50,50);
        this.weight = weight;
        this.speed = speed;
        this.sprite.velocityX = this.speed;
        this.sprite.shapeColor = color(255);
    
    }
}