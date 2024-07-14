const express = require('express')
const app = express()
const routeHandler = require("./routes"); 


app.use("/v1", routeHandler);

app.use("/", (req,res)=> {
    res.status(200).send({message: "Service is up"});
});

module.exports = app