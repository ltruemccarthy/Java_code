//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//Code written by Laurel True-McCarthy with great notes and help from Anthony Perruzo

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
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
    var consoleDisplay = document.getElementById('ConsoleDisplay');
    //This var eliminates all extra text, letting us just write ConsoleDisplay when we want to get that elemenet. Thank you Anthony Peruzzo!


//Created Speech as a variable and passed this code "displaySpeechDetails(churchillSpeech);" so that we can call the .year and .author easily when calling the function
function getAuthorAndYearString(speech){
 consoleDisplay.innerHTML = "This speech was written by " + speech.author + " in " + speech.year + ".<br>";
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '<br>';
  //above is repeated many time in this code and needs to be replaces with a function called getAuthorAndYearString which can be seen at the top of the document and called directly below

   getAuthorAndYearString(churchillSpeech);
    

  if(speechesArray[0].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[0].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '<br>';

getAuthorAndYearString(ghandiSpeech);

  if(speechesArray[1].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[1].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  //document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '<br>';

getAuthorAndYearString(demosthenesSpeech);
  if(speechesArray[2].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[2].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
});