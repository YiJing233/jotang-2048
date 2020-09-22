var board = new Array();
var scroe = 0;

function newGame() {
  // 初始化棋盘格
  init();
  // 在随机两个各自生成数字
}

function init() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      var gridCell = $("#grid-cell-" + i + "-" + j);
      gridCell.css('top', getPosTop(i, j));
      gridCell.css('left', getPosLeft(i, j));
    }
  }
}

function getPosTop(i, j) {
  return 20 + 120 * i;
}

function getPosLeft(i, j) {
  return 20 + 120 * j;
}

$(document).ready(function(){
  newGame();
})

