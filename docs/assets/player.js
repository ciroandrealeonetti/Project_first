class Player {
    constructor(x, y, w, h, ctx, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.color = color;
        this.speedY = 0;
        this.speedX = 0;
        this.image = new Image();
    }

    newPos()  {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.h;
      }
    
      left() {
        return this.x;
      }
    
      right() {
        return this.x + this.w;
      }

    /* moveUp() {
        return this.y 
    }

    moveDown () {
       return this.y + this.h;
    } */

    draw() {
        this.image.src = "docs/assets/images/Homer Simpson PNG image with transparent background.png"
        //this.ctx.fillStyle = this.color;
        this.ctx.drawImage(this.image,this.x, this.y, this.w, this.h);

}
crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  crashWithBonus(bonus) {
    return !(
      this.bottom() < bonus.top() ||
      this.top() > bonus.bottom() ||
      this.right() < bonus.left() ||
      this.left() > bonus.right()
    );
  }
}