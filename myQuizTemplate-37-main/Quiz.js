class Quiz{
    constructor(){}

    getState(){
       var gameStateRef  = database.ref('gameState');
       gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    async start(){
      if (gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value")
        if (contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question();
        question.display();
      }
    }
    play(){
    //  question.hide();
    
      stroke("black")
      fill("white")
      strokeWeight(1)
      textSize(30)
      textFont("Nothing")
      text("Results of the quiz",500,80)

      Contestant.getContestantInfo();


      if (allContestants != undefined){
        var display_answers = 320;
        stroke("black")
        fill("lightblue")
        strokeWeight(1)
        textSize(30)
        textFont("Nothing")
        text("*NOTE : Contestants who answered correct are highlited in green color",100,300)
        for(var plr in allContestants){
          var correctAns = "1";
          if (correctAns === allContestants[plr].answer){
            fill("lightgreen")
          } else{
            fill("red")
          }
        }
        display_answers += 20;
        textSize(25)
        text(allContestants[plr].name + " : " + allContestants[plr].answer,120,display_answers)
      }
    }
}
