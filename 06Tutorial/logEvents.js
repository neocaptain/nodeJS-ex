const { format } = require('date-fns');
const { v4: uuid }  =require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(messege, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${messege}\n`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        if(fs.existsSync(path.join(__dirname, 'logs', logName))) {
           await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
        } else {
            await fsPromises.writeFile(path.join(__dirname, 'logs', logName), logItem);
        }        
    } catch(err) {
        console.error(err);
    }
}

module.exports = logEvents;