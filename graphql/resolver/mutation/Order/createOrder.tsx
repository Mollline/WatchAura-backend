import { CreateOrderInput } from '@/generated';
import orderSchema from '../../../model/orderSchema';
import Watch from '../../../model/watchSchema'; // your Watch mongoose model
import mongoose from 'mongoose';

export const createOrder = async (
  _: CreateOrderInput,
  { input }: { input: CreateOrderInput }
) => {
  const { deliveryPlace, phoneNumber, totalPrice, items } = input;
  console.log("Input values:", { deliveryPlace, phoneNumber, totalPrice, items });
  try {
    const newOrder = await orderSchema.create({
      deliveryPlace,
      phoneNumber,
      totalPrice,
      items,
    });

    if (!newOrder) {
      throw new Error('Failed to create order');
    }

    console.log("New order created", newOrder)
    return newOrder
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Error creating order');
  }
};

// import { CreateOrderInput } from '@/generated';
// import orderSchema from '../../../model/orderSchema';
// import Watch from '../../../model/watchSchema';
// import mongoose from 'mongoose';

// export const createOrder = async (
//   _: CreateOrderInput,
//   { input }: { input: CreateOrderInput }
// ) => {
//   const { deliveryPlace, phoneNumber, totalPrice, items } = input;

//   try {
//     const newOrder = await orderSchema.create({
//       deliveryPlace,
//       phoneNumber,
//       totalPrice,
//       items,
//     });

//     if (!newOrder) {
//       throw new Error('Failed to create order');
//     }

//     // Populate the watch field
//     const populatedOrder = await newOrder.populate({
//       path: 'items.watch',
//       model: 'Watch',
//     });

//     // Convert to plain object and fix ObjectId serialization
//     const orderObj = populatedOrder.toObject();

//     // Convert _id fields to string
//     orderObj._id = orderObj._id.toString();
//     orderObj.items = orderObj.items.map((item: any) => ({
//       ...item,
//       _id: item._id.toString(),
//       watch: {
//         ...item.watch,
//         _id: item.watch._id.toString(),
//       },
//     }));

//     return orderObj;
//   } catch (error) {
//     console.error('Error creating order:', error);
//     throw new Error('Error creating order');
//   }
// };
