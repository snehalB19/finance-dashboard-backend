
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const createRecord = async (req: Request, res: Response) => {
    const { amount, type, category, date, notes } = req.body;

    const newRecord = await prisma.record.create({
        data: {
            amount,
            type,
            category,
            date: new Date(date),
            notes
        }
    });

    res.status(201).json({
        message: 'Record created successfully',
        record: newRecord
    });
};

export const getRecords = async (_: Request, res: Response) => {
    const records = await prisma.record.findMany();

    res.status(200).json(records);
};

export const updateRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const updatedRecord = await prisma.record.update({
        where: { id },
        data: req.body
    });

    res.status(200).json({
        message: 'Record updated successfully',
        record: updatedRecord
    });
};

export const deleteRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await prisma.record.delete({
        where: { id }
    });

    res.status(200).json({
        message: 'Record deleted successfully'
    });
};