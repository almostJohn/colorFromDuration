### Color From Duration

Color from duration returns a number that can turn into a color code for discord.js, `MessageEmbed`, `APIEmbed`, and `APIWebhookEmbed`.

#### Functionality

If you pass a `date` - the `timestamp` unix in the parameter, it will return a random color based on duration. This usually works perfectly fine when creating a discord bot for `MessageEmbed` | `APIEmbed` | `APIWebhookEmbed`

#### Example Usage

`JavaScript`

```js
const { Client, MessageEmbed, Intents } = require('discord.js');

const { colorFromDuration } = require('./src/index');

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

import { colorFromDuration } from './src/index';
 
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

#### Actual Testing

`TypeScript`

```js
const MAX_TRUST_ACCOUNT_AGE = 1000 * 60 * 60 * 24 * 7 * 4;

function colorFromDuration(duration: number) {
    const percent = Math.min(duration / (MAX_TRUST_ACCOUNT_AGE / 100), 100);
    let r: number;
    let g: number;
    let b = 0;

    if (percent < 50) {
        r = 255;
        g = Math.round(5.1 * percent);
    } else {
        g = 255;
        r = Math.round(510 - 5.1 * percent);
    }

    const tintFactor = 0.3;

    r += (255 - r) * tintFactor;
    g += (255 - g) * tintFactor;
    b += (255 - b) * tintFactor;

    return (r << 16) + (g << 8) + b;
}

/* 1886133272 is generated timestamp */
console.log(colorFromDuration(Date.now() - 1886133272)); // 5046092.5
```

#### Resulting Code

As you can see here, we use a powerful library [discord.js](http://discord.js.org/) of [Node.js](https://nodejs.org/en/), you'll see that we pass in the paramater, of `colorFromDuration()` function `Date.now()` and subtracting to `member.user.createdTimestamp`.
