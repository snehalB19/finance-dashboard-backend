import express from 'express';
import {checkRole} from '../middleware/role.middleware';

import {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
} from '../controllers/record.controller';

const router = express.Router();

router.post('/', checkRole(['ADMIN']), createRecord);
router.get('/', checkRole(['ADMIN', 'ANALYST', 'VIEWER']), getRecords);
router.put('/:id', checkRole(['ADMIN']), updateRecord);
router.delete('/:id', checkRole(['ADMIN']), deleteRecord);

export default router;