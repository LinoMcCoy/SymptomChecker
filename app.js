import express from "express";
import { connectDB } from "./db.js";
import router from "./routes/user.js";
import diagnosis from "./routes/diagnosis.js";
import cors from "cors";
import morgan from "morgan";

const app = express()
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: "*"
}));
app.use(morgan("dev")); //mostrar las peticiones en consola


app.use("/", router);
app.use("/diagnosis", diagnosis);

app.get("/", (req, res) => {
    res.status(200).json({msg: "ok"})
})

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) => 

 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

}

connectDB();
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})