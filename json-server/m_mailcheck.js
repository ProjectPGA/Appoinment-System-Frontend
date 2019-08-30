module.exports = (req, res, next) => {
    const axios = require('axios');
    var users = [];

    if (req.method === 'POST' && req.path === '/mailcheck') {
        axios
            .get('http://192.168.137.1:3000/users')
            .then(resp => {
                users = resp.data;
                var result = users.filter(function(x) {
                    return x.email === req.body.email;
                });
                if (result.length == 0) {
                    res.status(200).json({
                        cod: false,
                    });
                } else {
                    res.status(200).json({
                        cod: true,
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
