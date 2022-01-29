const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promisesWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promisesWrite.txt'), '\n\nNide to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promisesWrite.txt'), path.join(__dirname, 'files', 'promisesComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesComplete.txt'),'utf8');
        console.log(newData);
    } catch(err) {
        console.error(err)
    }
}

fileOps();

console.log('Hello.....');
/*
fsPromises.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice to meet you', (err) => {
    if(err) throw err;
    console.log('Write complete');

    fsPromises.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
        if(err) throw err;
        console.log('append complete');

        fsPromises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'reply2.txt'), (err) => {
            if(err) throw err;
            console.log('rename complete');
        })
    })
})
*/
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})