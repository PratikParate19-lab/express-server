import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});
export const User = mongoose.model('user', userSchema);
