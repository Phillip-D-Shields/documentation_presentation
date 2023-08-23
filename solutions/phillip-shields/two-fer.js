/**
 *
 * A function that takes a string input with a name and returns the string
 * "One for X, one for me." where X is the input name or "you" if no name is
 * given.
 *
 * @param {string} nameInput - user name or default to "you"
 * @returns {string} - "One for X, one for me."
 */

export function twoFer(nameInput = "you") {
  return `One for ${nameInput}, one for me.`;
}
