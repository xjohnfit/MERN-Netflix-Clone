import UserModel from "../models/UserModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
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

    // Check if username is already taken
    const usernameExists = await UserModel.findOne({ username });
    if(usernameExists) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    // Check if password is at least 6 characters long
    if(password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    
    // Create a new user
    const user = new UserModel({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await user.save();
        res.status(201).json({ success: true, message: 'User created successfully', user: user });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    // Get the email and password from the request body
    const { email, password } = req.body;

    try {

        // Check if the fields are not empty
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields',
            });
        }

        // Check if the user exists
        const user = await UserModel.findOne({ email });

        if(user) {
            
            // Check if the password is correct
            const passwordMatch = await bcryptjs.compare(password, user.password);
            
            if(passwordMatch){

                // Create a token
                const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
                    expiresIn: '7d',
                });

                // Set the cookie
                res.cookie("jwt", token, {
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
                    httpOnly: true, // prevent XSS attacks
                    sameSite: "strict", //prevent CSRF attacks
                    secure: process.env.NODE_ENV === "production" ? true : false, // cookie only works in https in production
                });

                // Remove the password from the user object
                const { password, ...others } = user._doc;


                // Send the response
                res.status(201).json({
                    success: true,
                    user: others,
                    token,
                });

            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials',
                });
            }
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        
    } catch (error) {
        console.log('Error in authController.login: ', error);
        res.status(401).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

export { signUp, login };