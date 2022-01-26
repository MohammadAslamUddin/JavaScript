//challenge 1: Your age in days

function ageInDays(){
    var birthYear = prompt('What year were you born..... Good Friend?');
    var ageInDayss = ( 2021 - birthYear ) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


//Challenge 2: Generate Cat

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissor

function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    //humanChoice = yourChoice.id;
    //botChoice = ;
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results); // { 'message' : "You Won!", 'color' : "green"}
    rpsFronteEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
