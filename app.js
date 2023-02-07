const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/1072649147301249065/_WsRaCI0TPOaes93pOeVN2si1VUAhLAvqmmpDgGdGoYnYpf-c9IjqpjFPklVNnoRzFsg");
  const embed = new MessageBuilder()
  .setTitle('Star me')
  .setAuthor('PawitSahare', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
  .setURL('https://github.com/pawitpr/portforward-node')
  .addField('Someone Star ', 'Notice ``Star me . ``', true)
  .setColor('#00b0f4')
  .setThumbnail('https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png')
  .setDescription('Oh look a description :)')
  .setImage('https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU')
  .setFooter(`${new Date()}`, 'https://cdn.discordapp.com/embed/avatars/0.png')
  .setTimestamp();
  

function sendMsg() {
  hook.send(embed);

}
const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('F-U')
});
app.post('/', (req,res,nxt) => {
  sendMsg();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
