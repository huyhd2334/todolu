import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.MONGODB_CONNNECTIONSTRING
        );
        console.log("ket noi DB thanh cong")
    }catch(error){
        console.log("Loi ket noi DB: ", error)
    }
}