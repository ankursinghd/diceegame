var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];

var i=false;
 var level=0;
 
function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  
  var randomNumber=  Math.floor(Math.random()*4);
  var randomChosenColour =buttonColours[randomNumber];
      
      gamePattern.push(randomChosenColour);
      $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio('./sounds/'+name+'.mp3');
  audio.play();
}
 
$(".btn").on("click",function(){  
  var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColour){
  
    $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100);
}
 var i=false;
 var level=0;
 
$(document).on("keydown",function(){
  if(!i){
    $("#level-title").text("Level "+level);
    nextSequence();
    i=true;
  }
});

function checkAnswer(index){
  if(gamePattern[index]===userClickedPattern[index]){
    console.log("success");

    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else{
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startover();
  }
}

function startover(){
  i=false;
  level=0;
  gamePattern=[];
}


  


  

