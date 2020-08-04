const fetch = require('node-fetch');

module.exports = async (msg) => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((res) => res.json())
    .then((data) => {
      const { updated } = data.time;
      const usd = data.bpi.USD.rate;
      const gbp = data.bpi.GBP.rate;
      const eur = data.bpi.EUR.rate;

      msg.channel.send(`Prices as of ${updated}`);
      msg.channel.send(`Bitcoin price is: £ ${gbp}`);
      msg.channel.send(`Bitcoin price is: $ ${usd}`);
      msg.channel.send(`Bitcoin price is: € ${eur}`);
    });
};
0