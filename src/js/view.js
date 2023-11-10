export default class View {
   constructor() {
      this.blocks = document.querySelectorAll('.block');
      this.winnerName = document.querySelector('.winner-name');
      this.winnerBlock = document.querySelector('.winner')
      this.currentName = document.querySelector('.player-name');
   }
   reset() {
      this.blocks.forEach(function (item) {
         item.style.backgroundImage = 'none';
      })
      this.currentName.textContent = 'Ходит: 1-й игрок';
      this.winnerName.textContent = '';
      this.winnerBlock.classList.add('display-hide');
      this.blocks.forEach(function (item) {
         item.disabled = false;
      })
   }
   renderBlock(res, cell) {
      if (res.currentPlayer === 'X') {
         cell.style.backgroundImage = 'url("src/assets/image/cross-mark.svg")';
         this.currentName.textContent = 'Ходит: 2-й игрок';
      }
      else if (res.currentPlayer === '0') {
         cell.style.backgroundImage = 'url("src/assets/image/circle-mark.svg")';
         this.currentName.textContent = 'Ходит: 1-й игрок';
      }
   }
   renderWinner(res) {
      if (res.currentPlayer === 'X') {
         this.winnerBlock.classList.remove('display-hide');
         this.winnerName.textContent = 'Победитель: 1-й игрок';
         this.currentName.textContent = '';
      }
      else if (res.currentPlayer === '0') {
         this.winnerBlock.classList.remove('display-hide');
         this.winnerName.textContent = 'Победитель: 2-й игрок';
         this.currentName.textContent = '';
      }
      this.blocks.forEach(function (item) {
         item.disabled = true;
      })
   }
   renderDraw() {
      this.winnerBlock.classList.remove('display-hide');
      this.winnerName.textContent = 'Результат: Ничья';
      this.currentName.textContent = '';
      this.blocks.forEach(function (item) {
         item.disabled = true;
      })
   }
}