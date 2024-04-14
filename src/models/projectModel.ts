const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const localizedContentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    needs: {
      type: String,
      required: true,
    },
    solutions: {
      type: String,
      required: true,
    },
    challenges: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
const projectSchema = new Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  projectUrl: {
    type: String,
  },
  technologies: {
    type: [String],
    required: true,
  },
  localization: {
    fr: localizedContentSchema,
    en: localizedContentSchema,
  },
  images: {
    type: [String],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("projects", projectSchema);
