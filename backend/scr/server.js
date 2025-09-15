import express from 'express';
import taskRoute from './routes/taksRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import cors from "cors"
import path from "path"

dotenv.config()
const __dirname = path.resolve() //end project
const app = express();

// middlewares
app.use(express.json());
if (process.env.NODE_ENV !== "production") {app.use(cors({origin: "http://localhost:5173" }))}

app.use("/api/tasks",taskRoute);


if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*",(rep, res) => {res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))})
}

connectDB().then(()=>{
    app.listen(5001, () => {
    console.log("server bat dau tren cong 5001");
});
})
