import orderSchema from '../../model/orderSchema';
import { Order } from '@/generated';

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const orders = await orderSchema.find().populate('items.watch'); // optional: populate watch info
    console.log('Fetched orders:', orders);
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw new Error('Failed to fetch orders');
  }
};
