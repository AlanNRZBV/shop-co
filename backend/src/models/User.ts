import mongoose from "mongoose";
import { User, UserModel } from "../types";

const UserSchema = new mongoose.Schema<User, UserModel>({});
