import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, role } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({
            message: 'Name, email and role are required'
        });
    }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return res.status(400).json({
            message: 'User already exists'
        });
    }

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            role
        }
    });

    res.status(201).json({
        message: 'User registered successfully',
        user: newUser
    });
};

export const loginUser = (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: 'Email is required'
        });
    }

    res.status(200).json({
        message: 'Login successful',
        token: 'mock-jwt-token',
        email
    });
};