import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--capitalize': Boolean,
      '--yes': Boolean,
      '--words': Number,
      '-c': '--capitalize',
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

  // Test what the options will output
  console.log(options.skipPrompts);
  console.log(options.capitalize);
  console.log(options.words);

}
