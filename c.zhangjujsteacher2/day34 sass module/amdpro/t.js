const crypto = require('crypto');

const hash = crypto.createHash('md5');
let result = hash.update('123132asdygre');

console.log(result.digest('hex'));