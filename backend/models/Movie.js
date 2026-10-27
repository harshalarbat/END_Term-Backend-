
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["movie", "series"],
      default: "movie"
    },
    genre: [{
      type: String
    }],
    releaseYear: {
      type: Number
    },
    maturityRating: {
      type: String,
      default: "U/A 13+"
    },
    duration: {
      type: Number
    },
    posterUrl: {
      type: String,
      default: ""
    },
    backdropUrl: {
      type: String,
      default: ""
    },
    trailerUrl: {
      type: String,
      default: ""
    },
    videoUrl: {
      type: String,
      default: ""
    },
    featured: {
      type: Boolean,
      default: false
    },
    trending: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
