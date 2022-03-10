window.addEventListener('load', init);

//globals
let time = 10;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const messageList = [
  "Keep going",
  "You're the best",
  "Just one more",
  "Keep pushing forward",
  "Don't look here, look up",
  "Focus!",
  "Alright!",
]


const myWords = [
"Adaptable",
"Adventurous",
"Amazing",
"Amiable",
"Beautiful",
"Becoming",
"Beloved",
"Blessed",
"Brotherly",
"Calming",
"Captivating",
"Charming",
"Cherished",
"Comforting",
"Compelling",
"Considerable",
"Credible",
"Dapper",
"Darling",
"Delightful",
"Dependable",
"Desirable",
"Dreamy",
"Durable",
"Elegant",
"Empowering",
"Enchanting",
"Endearing",
"Energising",
"Enjoyable",
"Enlightening",
"Exceptional",
"Fabulous",
"Fancy",
"Fantastic",
"Fashionable",
"Faultless",
"Fetching",
"Flourishing",
"Formidable",
"Fulfilling",
"Funny",
"Generous",
"Gifted",
"Glamorous",
"Gleaming",
"Glowing",
"Godly",
"Gracious",
"Gratifying",
"Happening",
"Harmonious",
"Heavenly",
"Honourable",
"Ideal",
"Important",
"Incredible",
"Indispensable",
"Indisputable",
"Influential",
"Inspiring",
"Interesting",
"Irresistible",
"Joyful",
"Jolly",
"Jovial",
"Kindly",
"Kingly",
"Leading",
"Legendary",
"Liberating",
"Likeable",
"Lordly",
"Lovable",
"Magical",
"Majestic",
"Memorable",
"Mesmerizing",
"Mighty",
"Miraculous",
"Motivational",
"Nifty",
"Obliging",
"Optimal",
"Original",
"Outgoing",
"Palatable",
"Paramount",
"Peaceful",
"Peachy",
"Perfect",
"Phenomenal",
"Picturesque",
"Pleasant",
"Pleasing",
"Pleasurable",
"Positive",
"Powerful",
"Praiseworthy",
"Precious",
"Prestigious",
"Prizewinning",
"Promising",
"Quality",
"Radiant",
"Reasonable",
"Refreshing",
"Reliable",
"Respectable",
"Rewarding",
"Salubrious",
"Satisfying",
"Scrumptious",
"Sensational",
"Shinning",
"Showy",
"Smashing",
"Soothing",
"Sought-after",
"Spectacular",
"Spiffy",
"Stimulating",
"Striking",
"Stunning",
"Stupendous",
"Superb",
"Supreme",
"Swanky",
"Terrific",
"Thrilling",
"Titillating",
"Tremendous",
"Trusty",
"Unbelievable",
"Uplifting",
"Useful",
"Valuable",
"Vibrant",
]

function init(){
  showWord(myWords);
  wordInput.addEventListener('input', checkingMyInput)
  setInterval(myCounter, 1000);
  setInterval(checkingStatus, 50);
  
}



// pick and show random word
function showWord(){
  
  const randomIndex = Math.floor(Math.random() * myWords.length);
  currentWord.innerHTML = myWords[randomIndex];
  //wordInput.value = myWords[randomIndex];
  const randomMessageNumb = Math.floor(Math.random() * messageList.length);
  message.innerHTML = messageList[randomMessageNumb];
  checkMyInput();
  
}

// check
function checkMyInput(){
  
  if(wordInput.value === currentWord.innerHTML){
    console.log("working");
  }else{
    console.log("not working")
  }
}

function myCounter(){
  if(time > 0){
    time--;
  }else if(time === 0){
    isPlaying = false;
  }
  
  // show time
  timeDisplay.innerHTML = time;
}

function checkingStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = "Game Over";
    score = 0;
    scoreDisplay.innerHTML = score;
    time = 5;
    displayScore.innerHTML = 0;
    init();
  }
}

//
function checkingMyInput(){
  console.log(wordInput.value);
  if(wordInput.value.toUpperCase() == currentWord.innerHTML.toUpperCase()){
    console.log("WINNNING");
    score += 2;
    scoreDisplay.innerHTML = score;
    showWord(myWords);
    time += 2;
    wordInput.value = "";
  }
}