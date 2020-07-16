function bio() {
	var intro = document.getElementById('intro'); 
	var projets = document.getElementById('projets');
	var cv = document.getElementById('cv');
	var contact = document.getElementById('contact');

	intro.style.display='block';
	projets.style.display='none';
	cv.style.display='none';
	contact.style.display='none';
}

function projets(){
	var intro = document.getElementById('intro'); 
	var projets = document.getElementById('projets');
	var cv = document.getElementById('cv');
	var contact = document.getElementById('contact');

	intro.style.display='none';
	projets.style.display='block';
	cv.style.display='none';
	contact.style.display='none';
}

function cv() {
	var intro = document.getElementById('intro'); 
	var projets = document.getElementById('projets');
	var cv = document.getElementById('cv');
	var contact = document.getElementById('contact');

	intro.style.display='none';
	projets.style.display='none';
	cv.style.display='block';
	contact.style.display='none';
}

function contact(){
	var intro = document.getElementById('intro'); 
	var projets = document.getElementById('projets');
	var cv = document.getElementById('cv');
	var contact = document.getElementById('contact');

	intro.style.display='none';
	projets.style.display='none';
	cv.style.display='none';
	contact.style.display='block';
}