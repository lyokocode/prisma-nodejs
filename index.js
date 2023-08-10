import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/user.js"
const app = express()

// middlewares
dotenv.config()
app.use(express.json());


app.use("/api/user", userRoute)


app.listen(process.env.PORT, () => {
    console.log(`api is running on port: ${process.env.PORT}`)
})