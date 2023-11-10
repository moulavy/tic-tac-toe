export default class Controller {
   constructor(game, view) {
      this.game = game;
      this.view = view;
      this.resetGame();
      this.blocks = document.querySelectorAll('.block')
      this.blocks.forEach((item) => {
         item.addEventListener('click', this.handleBlockClick.bind(this))
      })
      this.btnReset = document.querySelector('.btn-reset');
      this.btnReset.addEventListener('click', this.resetGame.bind(this));
   }
   handleBlockClick(event) {
      const clickedIndex = event.target.dataset.index;
      if (this.game.playfield[clickedIndex] === '') {
         this.game.movePlayer(clickedIndex);
         this.view.renderBlock(this.game.getState(), event.target);
         if (this.game.checkWinner() || this.game.checkDraw()) {
            if (this.game.checkWinner()) {
               this.view.renderWinner(this.game.getState());
            }
            else if (this.game.checkDraw()) {
               this.view.renderDraw();
            }
         }
         else {
            this.game.switchPlayer();
         }
      }
   }

   resetGame() {
      this.game.reset();
      this.view.reset();
   }
}