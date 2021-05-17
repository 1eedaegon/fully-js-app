import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: { unique: true },
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    avartar: {
      type: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

export default User;
