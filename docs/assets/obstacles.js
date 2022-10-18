class Obstacle {
    constructor(enemyImage, x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.img = new Image()
       
       this.img.src=enemyImage
        
    }

     draw() {
        
        
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)



       /* this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.w,this.h,Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();*/


/*         this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x,this.y,this.w,this.h,)
         */
       /* this.ctx.beginPath();
        this.ctx.arc(100,200,20,0,Math.PI * 2, false);
        this.ctx.fillStyle = "yellow";
        this.ctx.fill();
        this.ctx.closePath();*/
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
       
}