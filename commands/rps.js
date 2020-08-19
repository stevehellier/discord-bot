module.exports = async (msg) => {
  const choices = ['Rock', 'Paper', 'Scissors'];

  const computer = choices[Math.floor(Math.random() * choices.length)];

  const player = msg.content.slice(4).trim();

  let result = 'Result';

  if (choices.indexOf(player) === -1) {
    result = 'invalid choice, please select either Rock, Paper or Scissors';
  }

  if (player === computer) {
    result = 'Draw';
  } else if (player === 'Rock') {
    if (computer === 'Paper') {
      result = `You lose! ${computer} beats ${player}`;
    } else {
      result = `You win! ${player} beats ${computer}`;
    }
  } else if (player === 'Paper') {
    if (computer === 'Scissors') {
      result = `You lose! ${computer} beats ${player}`;
    } else {
      result = `You win! ${player} beats ${computer}`;
    }
  } else if (player === 'Scissors') {
    if (computer === 'Rock') {
      result = `You lose! ${computer} beats ${player}`;
    } else {
      result = `You win! ${player} beats ${computer}`;
    }
  }

  await msg.channel.send(result);
};
