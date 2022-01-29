const { format } = require('date-fns');
const { v4: uuid }  =require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(messege) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${messege}\n`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        if(fs.existsSync(path.join(__dirname, 'logs', 'eventLog.txt'))) {
           console.log('eventLog.txt 존재');
           await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
        } else {
            console.log('no eventLog.txt')
            await fsPromises.writeFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
        }        
    } catch(err) {
        console.error(err);
    }
}

module.exports = logEvents;