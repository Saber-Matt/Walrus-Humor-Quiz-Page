// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {
    tuskCheck
} from '../utils.js';
const test = QUnit.test;

test('trueChecker', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = true;
    const userInput = 'yes';
    const expected = tuskCheck(userInput);

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('falseChecker', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = true;
    const userInput = 'no';
    const expected = tuskCheck(userInput);

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
