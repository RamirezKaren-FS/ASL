const app = require("./app");
PORT = 8080;



app.listen(PORT,() => {
    console.log(`Server is running ${process.env.NODE_ENV} on port ${PORT}`);
});