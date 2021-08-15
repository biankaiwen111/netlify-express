const mongoose = require("mongoose");

const agreementSchema = new mongoose.Schema({
  cc: {
    type: String,
    required: "community college name is required",
  },
  major: {
    type: String,
    required: "major is required",
  },
  university: {
    type: String,
    required: "university name is required",
  },
  sections: {
    type: Array,
    required: "sections are required",
  },
});

module.exports = mongoose.model("Agreement", agreementSchema);
