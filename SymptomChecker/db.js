import mongoose from "mongoose";

const mongoUrl = 'mongodb+srv://lino:lino@users.wuuojfl.mongodb.net/?retryWrites=true&w=majority';

export const connectDB = async () =>{
    try {
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
    
}

