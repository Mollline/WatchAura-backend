import { UpdateWatchInput } from "@/generated";
import watchModel from "../../../model/watchSchema";

export const updateWatch = async (
  _: UpdateWatchInput,
  { input }: { input: UpdateWatchInput }
) => {
  const { id, brand, discountPercent, image, onSale, price, quantity, saleEndsAt, type, adImage } = input;
  console.log("Updating watch:", id, brand, discountPercent, image, onSale, price, quantity, saleEndsAt, type, adImage);

  try {
    const updatedWatch = await watchModel.findByIdAndUpdate(
      id, { brand, discountPercent, image, onSale, price, quantity, saleEndsAt, type, adImage }, { new: true }
    );

    if (!updatedWatch) {
      throw new Error("Watch not found");
    }

    console.log("Watch updatedWatch:", updatedWatch);
    return updatedWatch;
  } catch (error) {
    console.error("Error updating watch:", error);
    throw new Error("Error updating watch");
  }
};
