module.exports = (req, res, next) => {
    const axios = require('axios');
    var originalCodes = [];

    if (req.method === 'POST' && req.path === '/code') {
        axios
            .get('http://192.168.137.1:3000/codigos')
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
            .delete('http://192.168.137.1:3000/codigos/' + id)
            .catch(error => {});
    }
};
