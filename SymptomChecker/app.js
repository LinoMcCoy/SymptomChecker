import express from "express";
import { connectDB } from "./db.js";
import router from "./routes/user.js";
import cors from "cors";
import morgan from "morgan";

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "*"
}));
app.use(morgan("dev")); //mostrar las peticiones en consola
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.status(200).json({msg: "ok"})
})

connectDB();
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})