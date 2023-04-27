const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
<<<<<<< HEAD
      required: false,
      unique: true
    },
    /*email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },*/
=======
      required: true,
      unique: true,
    },

>>>>>>> 09737ebf2b950344cb447f8192d825a6f5327a6e
    password: {
      type: String,
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
