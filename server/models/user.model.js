const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      hash: {
        type: String,
        required: true,
      },
      salt: {
        type: String,
        required: true,
      },
    },
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/di5uhy426/image/upload/v1712291653/profile-picture.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
