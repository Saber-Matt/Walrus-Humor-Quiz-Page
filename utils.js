export function tuskCheck(someString) {
//return someString.charAt(0).toLowerCase() === 'y';
    const LowerCaseAnswer = someString.charAt(0).toLowerCase() === 'y';
    if (LowerCaseAnswer){
        return true;
    } else {
        return false;
    }
} 