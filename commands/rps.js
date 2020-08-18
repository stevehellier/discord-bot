module.exports = async (msg) => {
  const t = ['Rock', 'Paper', 'Scissors'];

  const computer = t[Math.floor(Math.random() * t.length)];

  const player = msg.content.slice(4).trim();
  let result = 'Result';
  if (computer === player) {
    result = 'Draw';
  }

  console.log(computer);

  await msg.channel.send(result);
};
