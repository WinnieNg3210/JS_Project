import Game from "./scripts/game";
// import Character from "./scripts/character";
// import Hero from "./scripts/hero";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameCanvas');
    new Game(canvas)
    // game.restart();
});
