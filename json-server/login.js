module.exports = (req, res, next) => {
    const axios = require('axios');
    var users = [];

    if (req.method === 'POST' && req.path === '/login') {
        axios
            .get('http://localhost:3000/users')
            .then(resp => {
                users = resp.data;
                var result = users.filter(function(x) {
                    return (
                        x.email === req.body.email &&
                        x.password === req.body.password
                    );
                });

                if (result.length > 0) {
                    var userObject = {
                        id: result.map(a => a.id)[0],
                        email: result.map(a => a.email)[0],
                        name: result.map(a => a.name)[0],
                        admin: result.map(a => a.admin)[0],
                    };
                    res.status(200).json({ cod: true, user: userObject });
                } else {
                    res.status(200).json({
                        cod: false,
                        mensaje:
                            'Email o contraseña incorrectos.',
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
