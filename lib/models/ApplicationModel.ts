import mongoose, { Document, Model } from "mongoose";

export interface IApplication extends Document {
  id: number;
  label: string;
}

let ApplicationModel: Model<IApplication> | undefined =
  mongoose.models.Application;

// If it doesn't exist, define and compile the model.
if (!ApplicationModel) {
  const applicationSchema = new mongoose.Schema({
    id: Number,
    label: String,
  });

  ApplicationModel = mongoose.model<IApplication>(
    "Application",
    applicationSchema
  );
}

export default ApplicationModel;
