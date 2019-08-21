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

module.exports = (req, res, next) => {
    const axios = require('axios');
    var originalCodes = [];

    if (req.method === 'POST' && req.path === '/code') {
        axios
            .get('http://localhost:3000/codigos')
            .then(resp => {
                for (let i = 0; i < resp.data.length; i++) {
                    originalCodes.push(resp.data[i].id);
                }
                if (originalCodes.includes(req.body.code)) {
                    DeleteCode(req.body.code);
                    res.status(200).json({
                        cod: true,
                        mensaje: 'Codigo valido',
                    });
                } else {
                    res.status(200).json({
                        cod: false,
                        mensaje: 'Codigo de invitacion incorrecto',
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        next();
    }

    async function DeleteCode(id) {
        let resPost = await axios
            .delete('http://localhost:3000/codigos/' + id)
            .catch(error => {});
    }
};
