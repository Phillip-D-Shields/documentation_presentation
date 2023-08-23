// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

import { log } from "console"

// ? follow this template for jsdoc comments
/**
 * comments
 *
 * @param {string}} name of the datatype
 * @returns {string} nameImput
 */

export function twoFer(nameInput = 'you') {
    return `One for ${nameInput}, one for me.`
}