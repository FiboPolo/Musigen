const { Schema, model } = require("mongoose");

const bandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        name: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
        yearsOfExperience: {
          type: Number,
          required: true,
        },
        favouriteGenre: {
          type: String,
          required: true,
        },
        favouriteBand: {
          type: String,
          required: true,
        },
      },
    ],
    genre: {
      type: String,
      required: true,
    },
    dateFounded: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Band = model("Band", bandSchema);

module.exports = Band;