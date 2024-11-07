import Game from "./game";

function init(): void {
  const game = new Game(document.getElementById("game-canvas") as HTMLCanvasElement);

  game.init();
}

window.onload = init;