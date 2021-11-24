import fetch from 'node-fetch';

const api_url = 'https://random-word-api.herokuapp.com/word?number=3&swear=0';

/* A reusable function `capitalize`. 
  Input: string & 
  Output: string with first letter capitalized. 
*/
const capitalize = (str) => {
  if(typeof str === 'string') {
      return str.replace(/^\w/, c => c.toUpperCase());
  } else {
      return '';
  }
};

// NEXT YOU NEED TO MOVE THE getApiData function!

// Async function to fetch API response
async function getApiData(url) {

  const response = await fetch(url);
  var data = await response.json(); // Save response in variable data

  if (response) {
    console.log('Response exists: ')
  }

  console.log(data);
}

const newData = getApiData(api_url);
console.log(newData);

module.exports = {
  capitalize,
  getApiData,
};
