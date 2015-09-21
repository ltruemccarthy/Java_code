var churchill ={
	'name' : 'Winston Churchill',
	'year' : 1940,
	'bce' : false,
} ;

var ghandi ={
	'name' : 'Mahatma Ghandi',
	'year' : 1942,
	'bce' : false,
} ;

var demosthenes ={
	'name' : 'Demosthenes',
	'year' : 342,
	'bce' : true,
} ;

var speeches = [
'churchill', 'ghandi', 'demosthenes'
] ;

var speechesDates = ghandi.year - churchill.year;
	
console.log('Ghandi\'s speech and Churchill\'s speech are ' + differenceInDates + ' years apart.' );
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log ("There are" + speeches.length + "speeches on this page");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log ("This speech was written by "+ churchill.name + "in" + churchill.year + "It is" + churchill.bce "that this year is B.C.E");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log ("This speech was written by "+ ghandi.name + "in" + ghandi.year + "It is" + ghandi.bce "that this year is B.C.E");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log ("This speech was written by "+ demosthenes.name + "in" + demosthenes.year + "It is" + demosthenes.bce "that this year is B.C.E");
});