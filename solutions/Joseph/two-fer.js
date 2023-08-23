// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * If a user give a nameInput, it returns the new name in the function.
 *
 * @param {paramType} paramName - description
 * @returns {returnType} description
 */

export function twoFer(nameInput = 'you') {
    return `One for ${nameInput}, one for me.`
}

console.log(twoFer());
