import * as dotenv from 'dotenv' 
dotenv.config()

async function getUserInfo(access_token) {
  return await fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    });
}

async function checkUserInDiscordServer(access_token) {
  let in_ouss_server = false

  let userGuildInfo = await fetch('https://discord.com/api/v10/users/@me/guilds', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
  });

  userGuildInfo = await userGuildInfo.json()

  for (var i = 0; i < userGuildInfo.length; i++) {
      if (userGuildInfo[i].id == process.env.DISCORD_GUILD_ID) {
        in_ouss_server = true;
      }
  }

  return in_ouss_server
}

export { getUserInfo, checkUserInDiscordServer }