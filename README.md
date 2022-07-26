### Color From Duration

#### Functionality

If you pass a `date + timestamp` unix in the parameter, it will return a random color based on duration. This usually works perfectly fine when creating a discord bot for `MessageEmbed` | `APIEmbed` | `APIWebhookEmbed`

#### Example Usage

`JavaScript`

```js
const { Client, MessageEmbed, Intents } = require('discord.js');

const client = new Client({
  intent: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.on('guildMemberAdd', (member) => {
  const embed = new MessageEmbed()
    .setColor(colorFromDuration(Date.now() - member.user.createdTimestamp))
    .setTitle('Example embed title')
    .setDescription('Example embed description')
    .setFooter({ text: 'Example embed footer text' })
    .setTimestamp();
});
```

`TypeScript`

```js
import { Client, type APIEmbed, Intents, type GuildMember } from 'discord.js';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.on('guildMemberAdd', (member: GuildMember) => {
  const embed: APIEmbed = {
    color: colorFromDuration(Date.now() - member.user.createdTimestamp),
    title: 'Example embed title',
    description: 'Example embed description',
    footer: { text: 'Example embed footer text' },
    timestamp: new Date().toISOString(),
  };
});
```
