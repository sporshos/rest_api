const mongoose = require('mongoose')
const confiq = require("./confiq.js")

const dbURL = confiq.db.url

mongoose.connect(dbURL)
.then(() => {
    console.log(`Mongodb atlas is connected !!`);
}).catch((error) => {
    console.log(error);
    process.exit(1)
})