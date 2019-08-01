module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'user' && req.body.password === 'user') {
            res.status(200).json({});
        } else {
            res.status(401).json({});
        }
    } else {
        next();
    }
};
