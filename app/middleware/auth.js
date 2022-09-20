function authenticated(req, res, next) {
    if (req.session.initialised) {
        next()
    } else {
        res.render('pages/error/401', { 
            root: '.',
        })
    }
}

export { authenticated }