//  the snake water gun game
let name = prompt('enter your name ') ;
let nameshow = document.getElementById('name');
nameshow.innerHTML = name +" :";

let abhi = document.getElementById('comp');
let user = document.getElementById('user');
let mine = 'swg';
let result = document.getElementById('result');

const snakefunc = ()=>{
    mine = "Snake";
    let swgi = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][swgi];
    
   if(mine === swg){
    result.innerHTML = "LOL 2 snakes match is tie"
   }
   else if(swg === "Water"){
    result.innerHTML = "You won against my water"
   }
   else if(swg === "Gun"){
    result.innerHTML = "You lose, mine is Gun"
   }
   user.innerHTML = mine;
   abhi.innerHTML = swg;
};
const waterfunc = ()=>{
    mine = "Water";
    let swgi = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][swgi];
    
   if(mine === swg){
    result.innerHTML = "LOL same(water-water) match is tie"
   }
   else if(swg === "Gun"){
    result.innerHTML = "You won against my gun"
   }
   else if(swg === "Snake"){
    result.innerHTML = "You lose, mine is snake"
   }

   user.innerHTML = mine;
   abhi.innerHTML = swg;
};
const gunfunc = ()=>{
    mine = "Gun";
    let swgi = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][swgi];
    
   if(mine === swg){
    result.innerHTML = "LOL 2 Guns match is tie"
   }
   else if(swg === "Snake"){
    result.innerHTML = "You won the snake is down"
   }
   else if(swg === "Water"){
    result.innerHTML = "You lose, mine is water"
   }

   user.innerHTML = mine;
   abhi.innerHTML = swg;
};