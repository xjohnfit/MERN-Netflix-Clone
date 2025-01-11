import ListModel from '../models/ListModel.js';

//CREATE LIST
const createList = async (req, res) => {
    const { isAdmin } = req.user;
    if(isAdmin) {
        const newList = new ListModel(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (error) {
            res.status(500).json({ message: 'Error saving list' });
        }
    } else {
        res.status(403).json({ message: 'You are not allowed to create a list' });
    }
};

//GET LISTS
const getLists = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let lists = [];
    try {
        if(typeQuery) {
            if(genreQuery) {
                lists = await ListModel.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } }
                ]);
            } else {
                lists = await ListModel.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } }
                ]);
            }
        } else {
            lists = await ListModel.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lists' });
    }
};

//DELETE LIST
const deleteList = async (req, res) => {
    const { isAdmin } = req.user;
    const { id } = req.params;
    if(isAdmin) {
        try {
            await ListModel.findByIdAndDelete(id);
            res.status(200).json({ message: 'List deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting list' });
        }
    } else {
        res.status(403).json({ message: 'You are not allowed to delete a list' });
    }
};

export { createList, getLists, deleteList };