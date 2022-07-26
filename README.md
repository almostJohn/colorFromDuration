### Color From Duration

#### Functionality

If you pass a `date + timestamp` unix in the parameter, it will return a random color based on duration. This usually works perfectly fine when creating a discord bot for `MessageEmbed` | `APIEmbed` | `APIWebhookEmbed`

#### Example Usage

```js
// for using discord.js package as an example

const { Client, MessageEmbed, Intents } = require('discord.js');

const client = new Client({
  intent: [Intents.FLAGS.GUILDS],
});

client.on('guildMemberAdd', (member) => {
  const embed = new MessageEmbed()
    .setColor(colorFromDuration(Date.now() - member.user.createdTimestamp))
    .setTitle('Example embed title')
    .setDescription('Example embed description')
    .setFooter({ text: 'Example footer text' })
    .setTimestamp();
});
```
