import { Scalars } from '@/generated';
import orderSchema from '../../../model/orderSchema';

export const deleteOrder = async (
  _: any,
  { id }: { id: Scalars['ID']['input'] }
) => {
  try {
    const deletedOrder = await orderSchema.findByIdAndDelete(id);

    if (!deletedOrder) {
      throw new Error('Order not found or delete failed');
    }

    console.log('Order deleted:', deletedOrder);
    return deletedOrder;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw new Error('Error deleting order');
  }
};
