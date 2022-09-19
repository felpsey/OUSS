import { exchangeToken } from '../../models/auth/discord.js';

async function index(req, res) {
  let auth_status = await exchangeToken(req.query.code)
  .then(result => {
    if (result) { return true } else { return false }
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(500)
  })

  if (auth_status) {
    res.send('Authentication complete')
  } else {
    res.redirect('/auth')
  }

  return
};

export { index }