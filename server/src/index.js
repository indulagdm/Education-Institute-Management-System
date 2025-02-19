const app = require('../src/app');
const dotenv = require('dotenv');
const https = require('https');
const dbConnection = require('../src/config/dbConnection');

dotenv.config();

dbConnection();
const port = process.env.PORT || 4501;




const server = https.createServer(app);

server.listen(()=>{
    console.log(`Server is running on ${port}`);
})