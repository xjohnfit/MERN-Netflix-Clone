import MovieModel from '../models/MovieModel.js';

// Create movie
const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new MovieModel(req.body);

        const title = req.body.title;
        const existingMovie = await MovieModel.findOne({ title });

        if (existingMovie) {
            return res.status(400).json({ message: 'Movie already exists' });
        }

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json({
                movie: savedMovie,
                successMessage: 'Movie created successfully',
            });
        } catch (error) {
            res.status(500).json({ error: 'Error saving movie' });
        }
    } else {
        res.status(403).json('You are not admin. Access denied.');
    }
};

// Get all
const getAll = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await MovieModel.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json({ message: 'Error getting movies' });
        }
    } else {
        res.status(403).json('You are not admin. Access denied.');
    }
};

// Get movie by id
const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await MovieModel.findById(id);
        res.status(200).json({ movie: movie, successMessage: 'Movie fetched successfully' });
    } catch (error) {
        res.status(500).json({ error: error, message: 'Error getting movie' });
    }
};

//Get random movie
const getRandomMovie = async (req, res) => {
    const type = req.query.type;
    try {
        if (type === 'show') {
            const randomSeries = await MovieModel.aggregate([
                { $match: { type: 'show' } },
                { $sample: { size: 1 } },
            ]);
            res.status(200).json(randomSeries);
        } else if (type === 'movie') {
            const randomMovie = await MovieModel.aggregate([
                { $match: { type: 'movie' } },
                { $sample: { size: 1 } },
            ]);
            res.status(200).json(randomMovie);
        } else {
            const random = await MovieModel.aggregate([
                { $sample: { size: 1 } },
            ]);
            res.status(200).json(random);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error getting random movie' });
    }
};

// Update movie controller
const updateMovie = async (req, res) => {
    console.log(req);
    const { id } = req.params;
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await MovieModel.findByIdAndUpdate(
                id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json({
                updatedMovie,
                successMessage: 'Movie updated successfully',
            });
        } catch (error) {
            res.status(500).json({ message: 'Error updating movie' });
        }
    } else {
        res.status(403).json('You are not admin. Access denied.');
    }
};

// Delete movie
const deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const { id } = req.params;
        try {
            await MovieModel.findByIdAndDelete(id);
            res.status(200).json({
                successMessage: 'Movie deleted successfully',
            });
        } catch (err) {
            res.status(500).json({
                error: 'Error deleting movie',
            });
        }
    }
};

export {
    createMovie,
    getAll,
    getMovieById,
    getRandomMovie,
    updateMovie,
    deleteMovie,
};
