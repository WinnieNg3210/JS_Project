import Game from "./scripts/game";

// import Hero from "./scripts/hero";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameCanvas');
    new Game(canvas);
    // let game = new Game(canvas)
    // game.handleArrowEvents();
});


