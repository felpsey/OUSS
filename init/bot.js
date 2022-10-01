import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';

async function start_bot() {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
    const commands = define_commands()

    await set_commands(rest, commands)

    const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds
        ]
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    await client.login(process.env.DISCORD_BOT_TOKEN)

    return client
}

function define_commands() {
    return [{
        name: 'contribute',
        description: 'Details how to contribute to the OUSS digital service',
    }];
}

async function set_commands(rest, commands) {
    try {
        await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });
    } catch (error) {
        console.error(error);
    }
}

function set_interaction(bot) {
    bot.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'contribute') {
          await interaction.reply('Contribute to the GitHub repository for the application, API and Discord bot at https://github.com/felpsey/ouss.club');
        }
    });
}

export {
    start_bot,
    set_interaction
}