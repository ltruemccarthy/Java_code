
//added the onlick function with help from Xianning

function changeText (){
	document.getElementById('multiply').addEventListener('click', function(){
		if (document.getElementById('multiply')){
			multiply.innerHTML = "I do because I'm kind of a genius";
		}
	});

};

changeText();