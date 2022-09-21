function index(req, res) {
    return res.sendFile('/views/pages/auth/index.html', { root: '.' })
};

function destroy(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/auth')
    })
}

export { index, destroy }