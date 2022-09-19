function index(req, res) {
    return res.sendFile('/views/pages/auth/index.html', { root: '.' })
};

export { index }