const fs = require('fs');
const { rawListeners } = require('process');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');
/*
rs.on('data', (dataCunk) => {
    ws.write(dataCunk);
})
*/
rs.pipe(ws);