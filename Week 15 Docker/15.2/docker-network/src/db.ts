import mongoose, { Schema, model } from "mongoose";

const mongoUrl: string = "mongodb://mongodatabase:27017/Todo-app";

// Connect to MongoDB
mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

interface ITodo {
  title: string;
  description: string;
}

const TodoSchema: Schema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
export const Todo = model<ITodo>("Todo", TodoSchema);

// Create a User model
export const User = model<IUser>("User", UserSchema);
