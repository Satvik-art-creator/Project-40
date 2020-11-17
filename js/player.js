class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;

        this.score1 = 0;
        this.score2 = 0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    getScore1(){
        var player1ScoreRef = database.ref('players/player1/score');

        player1ScoreRef.on("value",(data)=>{
            this.score1 = data.val();
        });
    }

    getScore2(){
        var player2ScoreRef = database.ref('players/player2/score');

        player2ScoreRef.on("value",(data)=>{
            this.score2 = data.val();
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
