var gamediv ;
var game ;
var pi = Math.PI ;

$(function() {

  start() ;
  $("#demo").click(function() {
    game.killClock() ;
    start() ;
  }) ;



}) ;

function start() {
  //get the game div
  gamediv = $("#gameboard") ;
  //declare game object for game engine we built
  game = new Game(gamediv, 1500, 600, "black", true) ;

  game.addShape(new Shape(20, 20, 0, 300, "red", 5, 0)) ;
  game.addShape(new Shape(20, 20, 1480, 300, "blue", 4, pi)) ;
  game.addShape(new Shape(20, 20, 750, 580, "green", 3, 3*pi/2)) ;

}
