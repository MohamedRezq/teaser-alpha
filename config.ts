import mongoose from "mongoose";
//-------------------------------------------------------------------//
export const APP_TITLE = "AlphaSaas";
export const APP_DESCRIPTION = "AlphaSaas Teaser Website";
//-------------------------------------------------------------------//
const DB_URL = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_USER}:${process.env.NEXT_PUBLIC_MONGO_PASS}@${process.env.NEXT_PUBLIC_MONGO_CLUSTER}.mongodb.net/${process.env.NEXT_PUBLIC_MONGO_DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});
export const MONGO_DB = db;
//-------------------------------------------------------------------//
export const EMAIL_USERNAME = process.env.NEXT_PUBLIC_ADMIN_GMAIL_USERNAME;
export const EMAIL_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_GMAIL_PASSWORD;
