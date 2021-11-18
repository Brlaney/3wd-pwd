import arg from 'arg';
import inquirer from 'inquirer';

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

// async function promptForMissingOptions(options) { 
//   const defaultCap = false;

//   if (options.skipPrompts) {
//     return {
//       ...options,
//       capitalize: options.capitalize || defaultCap,
//     };
//   }

//   const questions = [];
  
//   if (!options.capitalize) {
//     questions.push({
//       type: 'list',
//       name: 'capitalize',
//       message: 'Capitalize the first letter in each word: ',
//       choices: [
//         false,
//         true
//       ],
//     })
//   }

//   const answers = await inquirer.prompt(questions);
//   return {
//     ...options,
//     capitalize: options.capitalize || answers.capitalize,
//   };
// }

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  // options = await promptForMissingOptions(options);

  console.log(options);
}
