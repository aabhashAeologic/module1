const mongoose = require("mongoose");

const connectdb = (DATABASE_URL) => {
    mongoose.connect(DATABASE_URL).then((success) => {
        console.log("DATABASE CONNECTED SUCCESS ");
    }).catch((error) => {
        console.log("DATABASE NOT CONNECTED ", error);
    })
};

module.exports=connectdb;