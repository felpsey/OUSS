function index(req, res) {
    res.render('dashboard', { 
        root: '.',
        discord_user_id: req.session.discord_user_id
    })
};

export { index }