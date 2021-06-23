var crash= new Audio("sounds/crash.mp3");
var kick= new Audio("sounds/kick-bass.mp3");
var snare= new Audio("sounds/snare.mp3");
var tom1= new Audio("sounds/tom-1.mp3");
var tom2= new Audio("sounds/tom-2.mp3");
var tom3= new Audio("sounds/tom-3.mp3");
var tom4= new Audio("sounds/tom-4.mp3");


var button_list=document.querySelectorAll(".drum");
  for (var i=0; i<button_list.length;i++) {
    button_list[i].addEventListener("click",function(){
      var buttontext=this.innerText;
      onClick(buttontext);
      buttonAnimation(buttontext);
    });

}

// for keyboard buttons so that they also play the instrument
document.addEventListener("keydown",function(eventt){

  onClick(eventt.key);
  buttonAnimation(eventt.key);
});
//



function onClick(key1){
  //'this' return the button object which triggered the event. so this.innerText
  //gives the letter contained in the button. for eg. a, s, d, j, etc.

  switch (key1) {
    case "l":
      crash.play();
      break;
    case "k":
      kick.play();
      break;
    case "j":
      snare.play();
      break;
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;

    default:
      // crash.play();

      break;

  }
}



function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed")},3000)
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
