import { EditOrderInput, Scalars } from '@/generated';
import orderSchema from '../../../model/orderSchema';

export const editOrder = async (
  _: any,
  { id, input }: { id: Scalars['ID']['input']; input: EditOrderInput }
) => {
  try {
    const updatedOrder = await orderSchema.findByIdAndUpdate(id, input, { new: true });

    if (!updatedOrder) {
      throw new Error('Order not found or update failed');
    }

    console.log('Order updated:', updatedOrder);
    return updatedOrder;
  } catch (error) {
    console.error('Error editing order:', error);
    throw new Error('Error editing order');
  }
};
