if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const initData = require('./data.js');

const MONGO_URL = process.env.ATLASDB_URL;
async function main () {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});



