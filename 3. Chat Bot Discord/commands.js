import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  console.log("commandChoices :: ", commandChoices)
  return commandChoices;
}


// const CHALLENGE_COMMAND = {
//   name: 'challenge',
//   description: 'Challenge to a match of rock paper scissors',
//   options: [
//     {
//       type: 3,
//       name: 'object',
//       description: 'Pick your object',
//       required: true,
//       choices: createCommandChoices(),
//     },
//   ],
//   type: 1,
// };

const SM_COMMAND = {
  name: 'sangmin',
  description: 'Sangmin Sangmin Command',
  type: 1,
};

// Command containing options
const REAL_ESTATE_COMMAND = {
  name: 'realestate',
  description: 'Select the type of real estate you want to see.',
  options: [
    {
      type: 3,
      name: 'realestate',
      description: 'Pick your dream real estate !',
      required: true,
      choices: [{name:'Appart',value:'appart'},{name:'House',value:'house'},{name:'Villa',value:'villa'},{name:'Shop',value:'shop'}],
    },
  ],
  type: 1,
};


const ALL_COMMANDS = [SM_COMMAND, REAL_ESTATE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);