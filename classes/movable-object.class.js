class MovableObject{
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    isJumping = false;

    applyGravity(){
        setInterval(() =>{
            if(this.isAboveGround() || this.speedY > 0 ){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }else {
                this.y = 150;
                this.speedY = 0; // Geschwindigkeit zurücksetzen
                this.isJumping = false; // Erlaubt wieder einen neuen Sprung
            }
        },1000/60);
    }

    isAboveGround(){
        return this.y < 150;
    }

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr){
        arr.forEach((path)=>{
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;            
        })
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;    
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){
        setInterval(() =>{
            this.x -= this.speed;            
            },1000 / 60); 
    }
}