import fetch from 'node-fetch';

// Define the API endpoint as api_url
const api_url = 'https://random-word-api.herokuapp.com/word?number=3&swear=0';

// Async function to fetch API response
async function getwords(url) {

  const response = await fetch(url);
  var data = await response.json(); // Save response in variable data

  if (response) {
    console.log('Response exists: ')
  }

  // Test the output:
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);

  return data;
}

module.exports.getwords = getwords; // Exports as a callable function
