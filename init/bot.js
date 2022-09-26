import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

function define_commands() {
    return [{
        name: 'contribute',
        description: 'Details how to contribute to the OUSS digital service',
    }];
}

async function set_commands(commands) {
    try {
        await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });
    } catch (error) {
        console.error(error);
    }
}

async function connect() {
    const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds
        ]
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.login(process.env.DISCORD_BOT_TOKEN)

    return client
}

async function start_bot() {
    const commands = define_commands()
    await set_commands(commands)
    
    return await connect()
}

export {
    start_bot,
    set_commands
}