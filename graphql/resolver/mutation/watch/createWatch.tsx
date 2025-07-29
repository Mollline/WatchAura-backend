import { CreateWatchInput } from "@/generated";
import watchModel from "../../../model/watchSchema";

export const createWatch = async (_: CreateWatchInput, { input }: { input: CreateWatchInput }
) => {
  const { brand, discountPercent, image, onSale, price, quantity, saleEndsAt, type,adImage} = input

  try {
    const createdWatch = await watchModel.create({brand, discountPercent, image, onSale, price, quantity, saleEndsAt, type,adImage});

    if (!createdWatch) {
      throw new Error("Failed to create watch");
    }

    console.log("Watch createdWatch:", createdWatch);
    return createdWatch;
  } catch (error) {
    console.error("Error creating watch:", error);
    throw new Error("Error creating watch");
  }
};
