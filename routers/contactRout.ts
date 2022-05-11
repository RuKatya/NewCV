import { Router } from 'express';
import { hendleSaveMessage } from '../controllers/contactCont';

const router = Router();

router
    .post('/sendUserData', hendleSaveMessage)

module.exports = router;