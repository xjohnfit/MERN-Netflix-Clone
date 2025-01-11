import MovieModel from '../models/MovieModel.js';

// Create movie
const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new MovieModel(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json({ message: 'Error saving movie' });
        }
    } else {
        res.status(403).json('You are not admin. Access denied.');
    }
};

// Get all
const getAll = async (req, res) => {
    if(req.user.isAdmin) {
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
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json({ message: 'Error getting movie' });
    }
};

//Get random movie 
const getRandomMovie = async (req, res) => {
    const type = req.query.type;
    try {
        if(type === 'show') {
            const randomSeries = await MovieModel.aggregate([
                { $match: { isShow: true } },
                { $sample: { size: 1 } },
            ]);
            res.status(200).json(randomSeries);
        } else if(type === 'movie') {
            const randomMovie = await MovieModel.aggregate([
                { $match: { isShow: false } },
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

// Update movie
const updateMovie = async (req, res) => {
    const { id } = req.params;
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await MovieModel.findByIdAndUpdate(
                id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json({ message: 'Movie updated', updatedMovie });
        } catch (err) {
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
            res.status(200).json({ success: true, message: 'Movie deleted' });
        } catch (err) {}
        res.status(500).json({
            success: false,
            message: 'Error deleting movie',
        });
    }
};

export { createMovie, getAll, getMovieById, getRandomMovie, updateMovie, deleteMovie };
