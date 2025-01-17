import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';

// Get all users controller
const getAllUsers = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await UserModel.find().sort({_id: -1}).limit(10) : await UserModel.find();
            res.status(200).json({ message: 'Users fetched', users });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(403).json({ message: 'You are not allowed to see all users!' });
    }
};

// Get single user by id controller
const getSingleUser = async (req, res) => {

    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        const { password, ...others } = user._doc;
        res.status(200).json({ message: 'User fetched', user: others });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update user by id controller
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    if (req.user.id === id || req.user.isAdmin) {
        if (password) {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(password, salt);
        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json({
                message: 'User updated successfully',
                user: updatedUser,
            });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(403).json({ message: 'You can update only your account!' });
    }
};

// Delete user by id controller
const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (req.user.id === id || req.user.isAdmin) {
        try {
            const response = await UserModel.findByIdAndDelete(id);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(403).json({ message: 'You can delete only your account!' });
    }
};

// Get user stats controller
const getUserStats = async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
  
try {
    const data = await UserModel.aggregate([
        {
            $project: {
                month: { $month: '$createdAt' },
            },
        },
        {
            $group: {
                _id: '$month',
                total: { $sum: 1 },
            },
        },
    ]);
    if(data) {
        res.status(200).json({ message: 'User stats fetched', data });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
} catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
    
}
  };

export { getAllUsers, getSingleUser, updateUser, deleteUser, getUserStats };
