// const { 
//     ContactModel,
//     Pager,
//     sortContacts,
//     filterContacts
// } = require("@jworkman-fs/asl")
const app = require("./app");
// const express = require('express')
// const app = express()
PORT = 8080;


// app.use("/", (req,res)=> {
//     res.status(200).send({message: "Service is up"});
// });


app.listen(PORT,() => {
    console.log(`Server is running ${process.env.NODE_ENV} on port ${PORT}`);
});