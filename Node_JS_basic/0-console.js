/*
In the file 0-console.js, create a function named displayMessage
that prints in STDOUT the string argument.
 */

function displayMessage(string) {
  process.stdout.write(`${string}\n`);
}

module.exports = displayMessage;
