const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://jvmartins:Tq6wPm1zdBcmGb6c@cluster0-shard-00-00.ggwx7.mongodb.net:27017,cluster0-shard-00-01.ggwx7.mongodb.net:27017,cluster0-shard-00-02.ggwx7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mmtv6t-shard-0&authSource=admin&retryWrites=true&w=majority").then(() => console.log("DBConnection Successfull !")).catch((err) => {
    console.log(err);
});




app.listen(5000, () => {
    console.log("Backend server is running 1");
})