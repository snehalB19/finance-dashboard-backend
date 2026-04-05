import { Request, Response } from 'express';

export const registerUser = (req: Request, res: Response) => {
    const { name, email, role } = req.body;

    res.status(201).json({
        message: 'User registered successfully',
        user: { name, email, role }
    });
};

export const loginUser = (req: Request, res: Response) => {
    const { email } = req.body;

    res.status(200).json({
        message: 'Login successful',
        token: 'mock-jwt-token',
        email
    });
};