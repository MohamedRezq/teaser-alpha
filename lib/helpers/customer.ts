import mongoose from "mongoose";
import CustomerModel, { ICustomer } from "../models/CustomerModel";

export const createCustomer = async (
  name: string,
  email: string,
  applications: {
    id: number;
    label: string;
  }[]
): Promise<any> => {
  try {
    if (!CustomerModel) {
      return null;
    }
    CustomerModel.collection
      .insertOne({
        name,
        email,
        applications,
      })
      .then((data) => {})
      .catch((err) => {});

    return;
  } catch (error) {
    throw error;
  }
};
