const app = require("./app.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config({
    path: "./.env"

})
const PORT =  process.env.PORT||8001;
const MONGOURL = process.env.MONGO_URL;

console.log("Loaded PORT:", process.env.PORT);


mongoose
    .connect(MONGOURL)
    .then(()=>{
        console.log("DB connected successfully");
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`)
        });
    })
    .catch((error)=>console.log(error));
