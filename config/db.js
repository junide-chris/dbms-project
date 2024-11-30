import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Mkj2005:Mkj2024@cluster0.7nmyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DataBase Connected"));
}