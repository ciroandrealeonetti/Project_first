const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');


window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      console.log('game says brrrrr')
        startGame();
  };

    function startGame() {
      const player = new Player(800, 300, 100, 100, ctx, "blue");
      let game = new Game(ctx, 900, 700, player)
      game.start();
    
            document.addEventListener('keydown', (e) => {
              switch (e.code) {
                case 'ArrowUp':
                  if(player.y > 0) {
                  player.y -= 20;
                }
                break;
              case 'ArrowDown':
                if(player.y < 645) {
                  player.y += 20;
                }
                break;
              }
            })
    }
}



     
        


