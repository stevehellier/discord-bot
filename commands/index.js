const ping = require('./ping');
const eightBall = require('./8ball');
const bitcoin = require('./bitcoin');

const commands = {
  ping,
  '8ball': eightBall,
  bitcoin,
};

/* eslint no-console: 0 */
module.exports = async (msg) => {
  const args = msg.content.split(' ');
  console.log(args);
  if (args.length === 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
};
