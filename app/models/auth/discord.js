import * as dotenv from 'dotenv' 

dotenv.config()

const api_endpoint = process.env.DISCORD_API_ENDPOINT
const client_id = process.env.DISCORD_CLIENT_ID
const client_secret = process.env.DISCORD_CLIENT_SECRET
const redirect_uri = process.env.DISCORD_REDIRECT_URI
const guild_id = process.env.DISCORD_GUILD_ID

async function makeExchange(auth_code) {
    return await fetch(api_endpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: new URLSearchParams({
          client_id,
          client_secret,
          grant_type: 'authorization_code',
          code: auth_code,
          redirect_uri
        })
      })
    .then(response => response.json())
}

export async function exchangeToken (auth_code) {
    let access_token = await makeExchange(auth_code)

    return access_token
}