import UserModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';

const authController = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the fields are not empty
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Check if the user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    

    // Create a new user
    const user = new UserModel({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export { authController };