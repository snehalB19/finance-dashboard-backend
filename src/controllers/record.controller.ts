import { Request, Response } from 'express';

import { records } from '../data/records';

export const createRecord = (req: Request, res: Response) => {
    const { amount, type, category, date, notes } = req.body;

    if (!amount || !type || !category || !date) {
        return res.status(400).json({
            message: 'Amount, type, category and date are required'
        });
    }

    const newRecord = {
        id: records.length + 1,
        amount,
        type,
        category,
        date,
        notes
    };

    records.push(newRecord);

    res.status(201).json({
        message: 'Record created successfully',
        record: newRecord
    });
};

export const getRecords = (_: Request, res: Response) => {
    res.status(200).json(records);
};

export const updateRecord = (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const record = records.find(r => r.id === id);

    if (!record) {
        return res.status(404).json({ message: 'Record not found' });
    }

    Object.assign(record, req.body);

    res.status(200).json({
        message: 'Record updated successfully',
        record
    });
};

export const deleteRecord = (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const index = records.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Record not found'
        });
    }

    records.splice(index, 1);

    res.status(200).json({
        message: 'Record deleted successfully'
    });
};