import watchModel from "../../model/watchSchema";

export const getAllWatches = async () => {
  console.log("Fetching all watches...");

  try {
    const watches = await watchModel.find().sort({ createdAt: -1 });
    console.log(`Found ${watches} watches`);
    return watches;
  } catch (error) {
    console.error("Error fetching watches:", error);
    throw new Error("Error fetching watches");
  }
};
