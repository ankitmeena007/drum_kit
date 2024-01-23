

var button_list=document.querySelectorAll(".drum");
for (var i=0; i<button_list.length;i++) {
  button_list[i].addEventListener("click", function(){
    
    var buttontext=this.innerHTML;
    
    onClick(buttontext);
    
    buttonAnimation(buttontext);
    
});

}

// for keyboard buttons so that they also play the instrument
document.addEventListener('keydown',function(eventt){

  onClick(eventt.key);
  buttonAnimation(eventt.key);
});
//



function onClick(key1){
  //'this' return the button object which triggered the event. so this.innerText
  //gives the letter contained in the button. for eg. a, s, d, j, etc.

  switch (key1) {
    case "l":
      var crash= new Audio("sounds/crash.mp3");
      crash.play();
      break;
      
    case "k":
      var kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      
    case "j":
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;
      
    case "w":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
      
    case "a":
      var tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      
    case "s":
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
      
    case "d":
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log();
      // crash.play();


  }
}



function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  //syntax: setTimeout(function,milliseconds,param1 opt ,param2 opt ...)
    }




// function onClick(){
//   //'this' return the button object which triggered the event. so this.innerText
//   //gives the letter contained in the button. for eg. a, s, d, j, etc.
//   var letter_drum=this.innerText;
//   switch (letter_drum) {
//     case "l":
//       crash.play();
//       break;
//     case "k":
//       kick.play();
//       break;
//     case "j":
//       snare.play();
//       break;
//     case "w":
//       tom1.play();
//       break;
//     case "a":
//       tom2.play();
//       break;
//     case "s":
//       tom3.play();
//       break;
//     case "d":
//       tom4.play();
//       break;
//
//     default:
//       alert(letter_drum);
//       break;
//
//   }
// }
