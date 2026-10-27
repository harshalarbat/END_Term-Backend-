
import Movie from "../models/Movie.js";

// GET /api/movies
export const getMovies = async (req, res) => {
  try {
    const { genre, type, search, trending, featured } = req.query;

    const filter = {};

    if (genre) filter.genre = genre;
    if (type) filter.type = type;
    if (trending !== undefined) filter.trending = trending === "true";
    if (featured !== undefined) filter.featured = featured === "true";

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const movies = await Movie.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: movies.length,
      movies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch movies"
    });
  }
};

// GET /api/movies/:id
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found"
      });
    }

    res.status(200).json({
      success: true,
      movie
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid movie ID"
    });
  }
};

// POST /api/movies
export const createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      genre,
      releaseYear,
      maturityRating,
      duration,
      posterUrl,
      backdropUrl,
      trailerUrl,
      videoUrl,
      featured,
      trending
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    const movie = await Movie.create({
      title,
      description,
      type,
      genre,
      releaseYear,
      maturityRating,
      duration,
      posterUrl,
      backdropUrl,
      trailerUrl,
      videoUrl,
      featured,
      trending
    });

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      movie
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create movie",
      error: error.message
    });
  }
};
 