module.exports = (req, res, next) => {
    const axios = require('axios');
    if (req.method === 'POST' && req.path === '/passcheck') {
        console.log('passcheck');
        axios
            .get('http://192.168.137.1:3000/users/' + req.body.userId)
            .then(resp => {
                user = resp.data;
                if (user.password === req.body.pass) {
                    res.status(200).json({
                        cod: true,
                    });
                } else {
                    res.status(200).json({
                        cod: false,
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        next();
    }
};
