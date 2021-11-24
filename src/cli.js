import arg from 'arg';
const Capitalizer = require('./utils/Capitalizer');
const getWords = require('./utils/getWords');

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--capitalize': Boolean,
      '--yes': Boolean,
      '-c': '--capitalize',
      '--words': Number,
      '-y': '--yes',
      '-w': '--words',
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    skipPrompts: args['--yes'] || false,
    capitalize: args['--capitalize'] || false, // default: false
    words: args['--words'] || 3, // default: 3
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  // API endpoint concatenated with the number of words from options
  const api_url =
    'https://random-word-api.herokuapp.com/word?number=' + options.words + '&swear=0';
  
  const data = getWords.getwords(api_url);

  const cap1 = Capitalizer.capitalize(data[0]);
  const cap2 = Capitalizer.capitalize(data[1]);
  const cap3 = Capitalizer.capitalize(data[2]);

  const randAppend = '110011!';

  const generated_creds = cap1 + cap2 + cap3 + randAppend;

  // Test what the options will output
  console.log('3wd-pwd generated credentials: ' + generated_creds);
}
