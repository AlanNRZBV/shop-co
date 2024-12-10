import { Model } from "mongoose";

declare interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

declare type UserModel = Model<User>;
