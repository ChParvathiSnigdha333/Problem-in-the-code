class Question{
    constructor(){
        this.input1 = createInput("Enter your Name");
        this.input2 = createInput("Enter correct option no.");
        this.button = createButton("Submit")
    }
    
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.input1.position(350,300)
        this.input2.position(550,300)
        this.button.position(505,350)

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}
