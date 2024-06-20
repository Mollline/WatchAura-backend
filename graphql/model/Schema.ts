import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const noteModel = mongoose.models.notes || mongoose.model('notes', noteSchema);

export default noteModel;
