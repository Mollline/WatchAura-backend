import watchModel from "../../../model/watchSchema";
import { MutationDeleteWatchArgs } from '@/generated';

export const deleteWatch = async (
  _: unknown,  args: MutationDeleteWatchArgs 
) => {
  const { id } = args
  console.log("Deleting watch:", {id});

  try {
    const deletedWatch = await watchModel.findByIdAndDelete(id);

    if (!deletedWatch) {
      throw new Error("Watch not found");
    }

    console.log("Watch deletedWatch:", deletedWatch);
    return deletedWatch;
  } catch (error) {
    console.error("Error deleting watch:", error);
    throw new Error("Error deleting watch");
  }
};
