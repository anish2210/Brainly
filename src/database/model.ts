import mongoose, { Document, Schema } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const dbUri = process.env.DB_URI;
if (!dbUri) {
  throw new Error("Database URI not valid");
}
mongoose.connect(dbUri).then(() => console.log("Connection to DB successful")).catch((error)=>console.error(error));

interface IUser extends Document {
    userName: string;
    userEmail: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    password: { type: String, required: true }
});

export const userModel = mongoose.model<IUser>('User', userSchema);
