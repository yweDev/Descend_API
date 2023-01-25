const jwt = require('jsonwebtoken');

/*
const token = jwt.sign(
    { name : 'tu'},
    'my-secret-key',
    { expiresIn : '1m'},
    (err, token) => {
        if(err) {
            console.log(err);
            return;
        }
    console.log(token);
});*/

jwt.verify(token, 'my-secret-key', (error, decoded) => {
    if(error) {
        console.error(error);
        return;
    }
    console.log(decoded);
});

