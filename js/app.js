// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// const speakButton = document.querySelector('#btn');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

let textToSpeak = '';

const nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const animals = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function getRandomWord(ary) {
	const i = Math.floor(Math.random() * ary.length);
	return ary[i];
}

function generateStory() {
	const noun = getRandomWord(nouns);
	const verb = getRandomWord(verbs);
	const adjective = getRandomWord(adjectives);
	const animal = getRandomWord(animals);
	const place = getRandomWord(places);

	textToSpeak = `${noun} ${verb} ${adjective} ${animal} ${place}`;
	console.log(textToSpeak);

	txt.textContent = textToSpeak + ".";
	txt.style.boxShadow = "3px 3px 4px 4px #00994d";
	txt.style.color = "#00994d";
	txt.style.padding = "7px";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
}

function resetStory() {
	textToSpeak = 'The story has been reset.';

	txt.textContent = textToSpeak + ".";
	txt.style.boxShadow = "3px 3px 4px 4px red";
	txt.style.color = "red";
	txt.style.fontSize = "20px";

	speakNow('The story has been reset.');
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.addEventListener('click', function () {
// 	speakNow(textToSpeak);
// });

btnStart.addEventListener('click', function () {
	textToSpeak = 'Click on button 1 for nouns, button 2 for verbs, button 3 for adjectives, button 4 for animals, button 5 for places and bottom 2 buttons to generate or reset the story each.';
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #00ccff";
	txt.style.color = "#00ccff";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
});

var count = 0;
// ALL THE NOUNS (1ST COLUMN)
btn1.addEventListener('click', function () {
	textToSpeak = nouns[count % nouns.length];
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #b300b3";
	txt.style.color = "#b300b3";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
	count++;
});

count = 0;
// ALL THE VERBS (2ND COLUMN)
btn2.addEventListener('click', function () {
	textToSpeak = verbs[count % verbs.length];
	if (count == 7) {
		textToSpeak = verbs[0];
		count = 0;
	}
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #00ccff";
	txt.style.color = "#00ccff";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
	count++;
});

count = 0;
// ALL THE ADJECTIVES (3RD COLUMN)
btn3.addEventListener('click', function () {
	textToSpeak = adjectives[count % adjectives.length];
	if (count == 7) {
		textToSpeak = adjectives[0];
		count = 0;
	}
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #00994d";
	txt.style.color = "#00994d";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
	count++;
});

count = 0;
// ALL THE ANIMALS (4TH COLUMN)
btn4.addEventListener('click', function () {
	textToSpeak = animals[count % animals.length];
	if (count == 7) {
		textToSpeak = animals[0];
		count = 0;
	}
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #ff8533";
	txt.style.color = "#ff8533";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
	count++;
});

count = 0;
// ALL THE PLACES (5TH COLUMN)
btn5.addEventListener('click', function () {
	textToSpeak = places[count % places.length];
	if (count == 7) {
		textToSpeak = places[0];
		count = 0;
	}
	console.log(textToSpeak);

	txt.textContent = textToSpeak;
	txt.style.boxShadow = "3px 3px 4px 4px #ff80df";
	txt.style.color = "#ff80df";
	txt.style.fontSize = "20px";

	speakNow(textToSpeak);
	count++;
});

btn6.addEventListener('click', function () {
	generateStory();
});

btn7.addEventListener('click', function () {
	resetStory();
});



