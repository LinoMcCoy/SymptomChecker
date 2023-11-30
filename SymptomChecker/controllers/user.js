import userModel from "../models/userModel.js";

export const register = async (req, res) => {

    
    try {
        const { name, email, password } = req.body;
        console.log("Hit backend");
        console.log(req.body);
        const userExist = await userModel.findOne({ email });
        if (userExist) return res.status(400).json({ message: "User already exists" });
        
        const newUser = new userModel({ name, email, password });

        const userSaved = await newUser.save();

        res.json(userSaved);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        const userExist = await userModel.findOne({ email });
        if (!userExist) return res.status(400).json({ message: "User not found" });
        if (password !== userExist.password) return res.status(400).json({ message: "Invalid password" });

        return res.json(userExist);
        

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}