import { Request, Response } from 'express';
import { records } from '../data/records';

export const getSummary = (_: Request, res: Response) => {
    const totalIncome = records
        .filter(r => r.type === 'Income')
        .reduce((sum, r) => sum + r.amount, 0);

    const totalExpense = records
        .filter(r => r.type === 'Expense')
        .reduce((sum, r) => sum + r.amount, 0);

    const netBalance = totalIncome - totalExpense;

    const categoryTotals = records.reduce((acc: any, record) => {
        acc[record.category] = (acc[record.category] || 0) + record.amount;
        return acc;
    }, {});

    res.status(200).json({
        totalIncome,
        totalExpense,
        netBalance,
        categoryTotals
    });
};