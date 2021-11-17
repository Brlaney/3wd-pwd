import arg from 'arg';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--yes': Boolean,
      '--install': Boolean
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args['--yes'] || false,
    runInstall: args['--install'] || false
  };
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);

  console.log(options);
}
