const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: String,
    title: String,
    thumb: String
  },
  { timestamps: false }
);

module.exports = mongoose.model("Data", DataSchema);
