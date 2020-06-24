class Player{
    constructor(){
     this.name = null;
     this.email =null;
    this.index = null;
    this.opinion = [];
    }
    updateCount(count){
database.ref('/').update({
    playerCount : count
})
    }
   
        update(){
            var playerIndex = "players/player" + this.index;
            database.ref(playerIndex).set({
              name:this.name,
              email:this.email,
              opinion : this.opinion
            });
        
    }
}