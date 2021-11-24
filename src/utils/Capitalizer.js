/* utils/Capitalie.js

    A module export function that takes a string input
  and outputs the same string with the first character
  capitalized.
*/

const capitalize = (str) => {
  if(typeof str === 'string') {
      return str.replace(/^\w/, c => c.toUpperCase());
  } else {
      return '';
  };
}

module.exports.capitalize = capitalize; // Exports as a callable function
