let dice1,dice2, player, gaming = true, win_score
const Player = function (name,id,round_score,score){
    this.name = name;
    this.id = id;
    this.round_score = round_score;
    this.score = score;
} 

Player.prototype.play = function(){
    dice1 = Math.floor(Math.random()*6 + 1)
    dice2 = Math.floor(Math.random()*6 + 1)
    document.querySelector('.dice1').src = 'images/dice-'+ dice1 + '.png';
    document.querySelector('.dice2').src = 'images/dice-'+ dice2 + '.png';
    this.round_score += dice1 + dice2
    document.querySelector('.player-'+ this.id +'-round-score').textContent = this.round_score;
    
}

function nextPlayer(){
    player.round_score = 0
    document.querySelector('.player-'+ player.id + '-round-score').textContent = 0
    document.querySelector('.player-1-box').classList.toggle('active')
    document.querySelector('.player-2-box').classList.toggle('active')
    player === player1 ? player = player2 : player = player1  
}

function init(){
    gaming = true
    document.querySelector('.player-1-score').textContent = 0;
    document.querySelector('.player-2-score').textContent = 0;
    document.querySelector('.player-'+ player.id + '-round-score').textContent = 0
    document.querySelector('.player-1-box').classList.toggle('active')
    document.querySelector('.player-2-box').classList.toggle('active')
    document.querySelector('.player-'+player.id+'-name').textContent = player.name
    document.querySelector('.player-'+ player.id +'-name').classList.remove('winner')
    player1 = new Player('player 1',1, 0, 0)
    player2 = new Player('player 2',2, 0, 0)
    player = player1
}


player1 = new Player('player 1',1, 0, 0)
player2 = new Player('player 2',2, 0, 0)
player = player1
let endScore = 6


document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gaming){
    player.play();
    if(dice1 == 1 || dice2 == 1 || dice1 == 6 && dice2 == 6){ 
        nextPlayer();
    }
}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
 if(gaming)  { 
    player.score += player.round_score;
    let endScore = document.querySelector('.win-score').value;
    endScore > 0 ? win_score = endScore : win_score = 100
    document.querySelector('.player-'+ player.id + '-score').textContent = player.score;
    if(player.score >= win_score){
        document.querySelector('.player-'+player.id+'-name').textContent = "winner"
        document.querySelector('.player-'+player.id+'-name').classList.add('winner')
        gaming = false
    }else{
    nextPlayer();
    }
}
})

document.querySelector('.new-game').addEventListener('click',init);



