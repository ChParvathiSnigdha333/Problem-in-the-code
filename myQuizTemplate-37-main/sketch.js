var gameState = 0, contestantCount, database, quiz, question, contestant;
var database;
var allContestants;

function setup(){
  database = firebase.database();
  var canvas = createCanvas(1200,550);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}

function draw(){
  background("black");

  stroke("black")
  fill("white")
  strokeWeight(1)
  textSize(30)
  textFont("Nothing")
  text("My Quiz Game",510,30)

  fill("Violet")
  textSize(25)
  text("Question :-   Give me food, and I will live. Give me water, and I will die. What am I ❔",130,150)

  fill("yellow")
  textSize(25)
  text("1. Fire",300,200)

  fill("lightblue")
  textSize(25)
  text("2. Water",300,250)

  fill("lightgreen")
  textSize(25)
  text("3. Paper",700,200)

  fill("red")
  textSize(25)
  text("4. None of the above 🤷‍♀️",700,250)

  if (contestantCount === 4){
    quiz.update(1);
  }

  if (gameState == 1){
    quiz.play();
  }

}
