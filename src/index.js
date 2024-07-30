import mongoose from 'mongoose';

import express from "express";
const app = express()

( async () => {
    try {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error", () => {
            console.log("ERROR: ", error)
            throw err
        })

        app.listen(process.env.PORT, ()=>{
            console.log('App is listening on port $ {process.env.PORT}');
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()


 