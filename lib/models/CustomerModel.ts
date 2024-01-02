// lib/models/CustomerModel.ts
import mongoose, { Document, Model } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  email: string;
  applications: {
    id: number;
    label: string;
  }[];
}

let CustomerModel: Model<ICustomer> | undefined = mongoose?.models?.Customer;

// If it doesn't exist, define and compile the model.
if (!CustomerModel) {
  const applicationSchema = new mongoose.Schema({
    id: Number,
    label: String,
  });

  CustomerModel = mongoose.model<ICustomer>("Customer", applicationSchema);
}

export default CustomerModel;
