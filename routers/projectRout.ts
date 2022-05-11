import { Router } from 'express';
import {
    hendleGetAllProjects,
} from '../controllers/projectsCont';
const router = Router();

router.get('/getProjects', hendleGetAllProjects)

module.exports = router;