import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dipesharwat80:S5wjVOQZqWYvQmDF@cluster0food.pz2gk.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}