import { Router } from 'express';
import { hendleSaveMessage } from '../controllers/contactCont';
import { validation } from '../validation';

const router = Router();

router
    .post('/sendUserData', validation, hendleSaveMessage)

module.exports = router;