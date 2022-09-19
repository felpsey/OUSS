import * as dotenv from 'dotenv' 
dotenv.config()

const api_endpoint = process.env.DISCORD_API_ENDPOINT
const client_id = process.env.DISCORD_CLIENT_ID
const client_secret = process.env.DISCORD_CLIENT_SECRET
const redirect_uri = process.env.DISCORD_REDIRECT_URI
const guild_id = process.env.DISCORD_GUILD_ID

async function makeExchange(code) {
    return await fetch(api_endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id,
          client_secret,
          grant_type: 'authorization_code',
          code,
          redirect_uri
        })
      })
    .then(response => response.json())
}

export async function exchangeToken (auth_code) {
    let authenticated = false

    let exchangeResponse = await makeExchange(auth_code)

    if (exchangeResponse.hasOwnProperty('access_token')) {
        console.log(exchangeResponse.access_token)
        authenticated = true
    }

    //   .then(async (data) => {
    //     const fetchDiscordUserGuidInfo = await fetch('http://discordapp.com/api/users/@me/guilds', {
    //       headers: {
    //         Authorization: `Bearer ${data.access_token}`,
    //       }
    //     });
    //     const fetchDiscordUserInfo = await fetch('http://discordapp.com/api/users/@me', {
    //       headers: {
    //         Authorization: `Bearer ${data.access_token}`,
    //       }
    //     });


    return authenticated
}    
    
    //   let in_ouss_server = false;

    //   const userGuidInfo = await fetchDiscordUserGuidInfo.json();
    //   const userInfo = await fetchDiscordUserInfo.json();

    //   console.log(userInfo);

    //   var arrayLength = userGuidInfo.length;
    //   for (var i = 0; i < arrayLength; i++) {
    //       console.log(userGuidInfo[i].id);

    //       if (userGuidInfo[i].id == guild_id) {
    //         in_ouss_server = true;
    //       }
    //   }
      
    //   res.send(`Is ${userInfo.username} in OUSS Server? ` + in_ouss_server)
    // })