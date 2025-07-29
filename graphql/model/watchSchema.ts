import mongoose from "mongoose";

const { Schema } = mongoose;

const watchSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ["Digital", "Analog", "Smart", "Automatic", "Chronograph"],
    required: true
  },
  image: {
    type: String,
    required: true
  },
  adImage: {
    type: [String],
    required: true
  },
  onSale: {
    type: Boolean,
    default: false
  },
  discountPercent: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  saleEndsAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Watch = mongoose.models.Watch || mongoose.model('Watch', watchSchema);

export default Watch;
