import 'dotenv/config';
import { Router } from "express";
import axios from "axios";

const tokenAPI = process.env.API_TOKEN;
const diagnosis = Router();

diagnosis.post ("/symptoms", async(req, res) =>{

const params = new URLSearchParams([["token", tokenAPI],["language", "en-gb"], ["format", "json"]]);

axios

.get("https://sandbox-healthservice.priaid.ch/symptoms", { params })

.then ((response) => {
    var data = response.data;
    console.log(data);
    res.json(data);
})

});

export default diagnosis;