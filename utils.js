export function tuskCheck(someString) {
    //return someString.charAt(0).toLowerCase() === 'y';
    const LowerCaseAnswer = someString.charAt(0).toLowerCase();
    if (LowerCaseAnswer === 'y') {
        return true;
    } else {
        return false;
    }
}