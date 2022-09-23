import { exchangeToken } from '../../models/auth/discord.js'

async function index(req, res) {
  await exchangeToken(req.query.code)
  .then(response => {
    req.session.initialised = true
    req.session.discord_access_token = response.access_token
    res.redirect("/dashboard");
  })  
  .catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
};

export { index }