import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--capitalize': Boolean,
      '--c': '--capitalize',
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    capitalize: args['--capitalize'] || false, // default: false
    words: args._[0] || 3, // default: 3
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  console.log(options);
}
