import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
{
  userName: {
    type: String,
    required: true
  },
  pasw: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    default: null
  }
});

const Account = mongoose.model("Account", accountSchema);
export default Account