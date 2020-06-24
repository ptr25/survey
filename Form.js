class Form{
constructor(){
    this.input = createInput("Name");
    this.email = createInput("Email")
    this.submit = createButton("submit");
    this.q1 = createElement('h3',"Q1-Is it right to boycott Chinese products?");
    this.r1 = createRadio('h3');
    this.r1.option('yes');
    this.r1.option('no');
    this.q2 = createElement('h3',"Q2-Is it possible for us cope up with Indian products if chinese products are banned?")
    this.greeting = createElement('h2',"A survey to bring about change");
    this.r2 = createRadio('h3');
    this.r2.option('yes');
    this.r2.option('no');
    this.thx = createElement('h1',"Thanks for u valuable opinion!!");
    this.q3 = createElement('h3',"Q3-Did coronavirus enlighten india about china?");
    this.r3 = createRadio('h3');
    this.r3.option('yes');
    this.r3.option('no');
}
display(){
    this.input.position(displayWidth/2-350,200)
    this.email.position(displayWidth/2-350,220);
    this.q1.position(displayWidth/2-150,150);
    this.r1.position(displayWidth/2-150,200);
    this.submit.position(displayWidth/2-50,500);
    this.q2.position(displayWidth/2-150,250);
    this.r2.position(displayWidth/2-150,330);
    this.greeting.position(displayWidth/2-150,80);
    this.q3.position(displayWidth/2-150,380);
    this.r3.position(displayWidth/2-150,430);
    this.submit.mousePressed(()=>{
        this.input.hide();
        this.email.hide();
        this.submit.hide();
        this.q1.hide();
        this.r1.hide();
        this.q2.hide();
        this.r2.hide();
        this.q3.hide();
        this.r3.hide();
        this.greeting.hide();
        player.name = this.input.value();
        player.email = this.email.value();
        playerCount = playerCount+1;
        player.index = playerCount;
        var ans1 = this.r1.value();
        var ans2 = this.r2.value();
        var ans3 = this.r3.value();
        player.opinion.push(ans1);
        player.opinion.push(ans2);
        player.opinion.push(ans3);
        player.updateCount(playerCount);
        player.update();
        this.thx.position(displayWidth/2,displayHeight/2);
        this.thx.show();
    })
}



}