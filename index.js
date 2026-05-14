const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("CONECTADO AL PUERTO:", process.env.PORT);
});

mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.BBDD_NAME,
})
.then(() => {
    console.log("CONECTADO A MONGODB");
})
.catch((err) => {
    console.log("ERROR:", err);
});