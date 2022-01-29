const { format } = require('date-fns');
const { v4: uuid }  =require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log('hello');
console.log(uuid());

/*
 1. > npm init   >> package.json 생성됨
 2. create folder "node_modeuls" << npm install 디렉토리를 미리 생성
 3. > npm i date-fns
 4. make file ".gitignore"
 5. > npm i nodemon -D  >> devDependencies 생성
 6. "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
                },
    를 "scripts": {
            "start": "node index",
            "dev": "nodemon index"
                },
    로 변경
    > npm run start(> npm run dev 형태로 사용)
 7. > npm i uuid
*/