class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.bonus = [];
        this.frames = 0;
        this.lifes = 2;
        this.lifeBonuses = 2;
    }

    start () {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }
    stop(){
        clearInterval(this.intervalId)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    
     update = () => {
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
        this.updateObstacles();
        this.updateBonus(); 
        this.checkEnemyCollision();
        this.checkBonusCollision();
      
        
        //this.score();
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x += 1; 
            this.obstacles[i].draw();
            if(this.obstacles[i].y < this.player.y){
                 this.obstacles[i].y += 1; 
            } else {
                this.obstacles[i].y -= 1; 
            }
        }

        

        if (this.frames % 240 === 0) {
            let randomY = Math.floor(Math.random()* 700)
            this.obstacles.push(new Obstacle("/docs/assets/images/pineapple pizza.png",100,randomY,40,40,this.ctx));
        }
    
        }

        updateBonus() {
            for (let i = 0; i < this.bonus.length; i++) {
                this.bonus[i].x += 1; 
                if(i % 2 === 0){
                    this.bonus[i].y += 1; 
                } else {
                    this.bonus[i].y -= 1; 
                }
                this.bonus[i].draw();
            }
            if (this.frames % 120 === 0) {
                let randomY = Math.floor(Math.random()* 700)
                this.bonus.push(new Obstacle("/docs/assets/images/icons8-salami-pizza-48.png",300,randomY,40,40,this.ctx));
               
            }
        
            }

            checkEnemyCollision(){
                const crashed = this.obstacles.some((obstacle, i) => {
                    if(this.player.crashWith(obstacle)){
                        this.obstacles.splice(i, 1)
                    }
                    return this.player.crashWith(obstacle)
                })

                if(crashed){
                    this.lifes--
                }

                if(this.lifes <= 0){
                    this.stop()
                    alert("YOU LOSE!!")
                } 
            }
            checkBonusCollision(){
                const crashed = this.bonus.some((bonus, i) => {
                    if(this.player.crashWithBonus(bonus)){
                        this.bonus.splice(i, 1)
                    }
                    return this.player.crashWithBonus(bonus)
                })
                if(crashed){
                    this.lifeBonuses--
                }

                if(this.lifeBonuses <= 0){
                    this.stop()
                    alert("YOU WIN!!")
                } 
            }

            
      }
   