import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameCanvas');
    new Game(canvas);
});


