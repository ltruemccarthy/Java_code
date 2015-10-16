//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];


    var name = prompt("What's your name?");
if (name > "" ) {
    console.log("hello " + name)
}
else{
  name = "User";
    console.log("okay I'll just call you " + name)
    userName = "User";
}



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  
  var favorite = prompt("Which author is your favorite?");
var result = "Churchill" ;


switch (favorite) {
    
  case "Churchill":
    result = console.log(churchillSpeech.author + ' was ' + churchillSpeech.authorAge + ' during this speech') ;
  break;
  
  case "Ghandi":
    result = console.log(ghandiSpeech.author ' was ' + ghandiSpeech.authorAge + ' during this speech') ;
  break;
    
  case "Demosthenes":
    result = console.log( demosthenesSpeech.author ' was ' + demosthenesSpeech.authorAge + ' during this speech ') ;
  break;

  default:
    result = console.log( "You don't have a favorite author?") ;
  break;  
}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
console.log( 'This speech was written by ' + churchillSpeech.author + ' in ' + churchillSpeech.year);
  
  if(churchillSpeech.yearIsBCE === true) {
        console.log('This speech took place before the common era');
  }
  else{
        console.log('This speech took place after the common era');
  }
  
  if(churchillSpeech.year < ghandiSpeech.year && demosthenesSpeech.year){
        console.log("This speech is the most recent speech on the page");
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log( 'This speech was written by ' + ghandiSpeech.author + ' in ' + ghandiSpeech.year);
  
  if(ghandiSpeech.yearIsBCE === true) {
        console.log('This speech took place before the common era');
  }
  else{
        console.log('This speech took place after the common era');
  }
  
  if(ghandiSpeech.year < churchillSpeech.year && demosthenesSpeech.year){
        console.log("This speech is the most recent speech on the page");
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log( 'This speech was written by ' + demosthenesSpeech.author + ' in ' + demosthenesSpeech.year);
  if(demostheneseSpeech.yearIsBCE === true) {
        console.log('This speech took place before the common era');
  }
  else{
        console.log('This speech took place after the common era');
  }
  
  if(demosthenese.year < churchillSpeech.year && ghandiSpeech.year){
        console.log("This speech is the most recent speech on the page");
  }
});