// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * what does the function do?
 * // if a user gives a nameInput, it returns the new name in the response function
 *
 * @param {string} nameInput - description
 * @returns {string} description
 */


export function twoFer(nameInput = "you") {
    return `One for ${nameInput}, one for me.`;
}