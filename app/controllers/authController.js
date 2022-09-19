function index(req, res) {
    return res.sendFile('/views/auth.html', { root: '.' })
};

export { index }