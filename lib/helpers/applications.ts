import ApplicationModel, { IApplication } from "../models/ApplicationModel";

export const getApplications = async (): Promise<IApplication[]> => {
  try {
    const applications = (await ApplicationModel?.find()) || [];
    return applications;
  } catch (error) {
    throw error; // Re-throw the error to handle it in your Next.js component.
  }
};
