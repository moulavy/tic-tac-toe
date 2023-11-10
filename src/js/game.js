export default class Game {
   constructor() {
      this.reset();

   }
   reset() {
      this.playfield = ['', '', '', '', '', '', '', '', '']; //Игровое поле
      this.currentPlayer = 'X';
   }

   movePlayer(clickedIndex) {
      if (this.playfield[clickedIndex] === '') {
         this.playfield[clickedIndex] = this.currentPlayer;
      }
   }

   switchPlayer() {
      this.currentPlayer = this.currentPlayer === 'X' ? '0' : 'X';
   }
   //проверка есть ли победитель
   checkWinner() {
      this.winCombination = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
      ]
      for (let item of this.winCombination) {
         const [a, b, c] = item;
         if (this.playfield[a] && this.playfield[a] === this.playfield[b] && this.playfield[a] === this.playfield[c]) {
            return true;
         }
      }
      return false;
   }
   getState() {
      return {
         currentPlayer: this.currentPlayer
      }
   }
   //проверка на ничью
   checkDraw() {
      return !this.playfield.includes('');
   }
}