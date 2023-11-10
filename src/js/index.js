import Controller from "./controller.js";
import Game from "./game.js";
import View from "./view.js";

const game = new Game();
const view = new View();
const controller = new Controller(game, view);

window.game = game;
window.controller = controller;
window.view = view;
