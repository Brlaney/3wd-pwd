import fetch from 'node-fetch';

const api_url = 'https://random-word-api.herokuapp.com/word?number=3&swear=0';

// Async function to fetch API response
async function getapi(url) {

  const response = await fetch(url);
  var data = await response.json(); // Save response in variable data

  if (response) {
    console.log('Response exists: ')
  }

  console.log(data);
}

const newData = getapi(api_url);

console.log(newData);
