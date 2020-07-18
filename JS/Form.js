class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
        this.reset = createButton("reset")
        this.title = createElement('h2');
    }

    display(){
        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-60,0);

        this.input.position(displayWidth/2-50,displayHeight/2-60);
        this.button.position(displayWidth/2+70,displayHeight/2-30);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount= playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("hello " + player.name + "!")
            this.greeting.position(displayWidth/2-30,displayHeight/4);
        })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
        this.title.hide();
    }

}