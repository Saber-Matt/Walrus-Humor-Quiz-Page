//Objectives:
//
//Use document.getElementById to get HTML Elements in JavaScript

import { tuskCheck } from './utils.js';

const beginButton = document.getElementById('begin');

//'We are Walri- We are watching';



//Use document.getElementById to set the textContent of HTML Elements in JavaScript

//let counter = 0;
//document.getElementById;
let score = 0;

//Use an event listener to launch prompts
beginButton.addEventListener('click', () => {
    const userConfirmed = confirm('Are Sure?');
    if (!userConfirmed) {
        alert('We may never know, how Walrus you are.');
        return;
    }


    // - Get the user's name
    // - How? `prompt()`
    //const name = prompt('Delcare thy title');


    // - Ask three questions
    // - How?  `prompt()`
    const userInput = prompt('Have your tusks erupted?');
    const firstAnswer = tuskCheck(userInput);
    if (firstAnswer === true) score++;

    const userInput2 = prompt('Would you describe yourself as fusiform?');
    const secondAnswer = tuskCheck(userInput2);
    if (secondAnswer === true) score++;

    const userInput3 = prompt('Sushi, Ice bathing, and Fish Breath?');
    const thirdAnswer = tuskCheck(userInput3);
    if (thirdAnswer === true) score++;

    // - Display the results
    // - How? `textContent = 'whatever'`
    const testResults = document.getElementById('test-results');
    const percent = Math.round((score / 3) * 100);
    testResults.textContent = ` ${percent}%`;

});


//Evaluating user input with control flow

//Using functions to 'abstract' complex or repeated logic

//Manipulating the DOM based on changing global state

// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM