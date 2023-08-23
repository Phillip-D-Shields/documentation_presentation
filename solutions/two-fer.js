// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * what does the function do?
 *
 * @param {string} nameInput - description
 * @returns {string} description
 */

//Takes a name input and returns the name in a sentance.  If no name is given will return 'you' in its place

export function twoFer(nameInput ='you'){
    return `One for ${nameInput}, one for me.`;
}
