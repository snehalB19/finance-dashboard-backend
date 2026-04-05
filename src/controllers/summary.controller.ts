import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getSummary = async (_: Request, res: Response) => {
    const records = await prisma.record.findMany();

    const totalIncome = records
        .filter(r => r.type === 'Income')
        .reduce((sum, r) => sum + r.amount, 0);

    const totalExpense = records
        .filter(r => r.type === 'Expense')
        .reduce((sum, r) => sum + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    res.status(200).json({
        totalIncome,
        totalExpense,
        netBalance
    });
};