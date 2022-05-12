import { Router } from 'express';
import {
    hendleAddProject,
    hendleGetAllProjects,
} from '../controllers/projectsCont';
const router = Router();

router
    .get('/getProjects', hendleGetAllProjects)
    .post('/sendNewProject', hendleAddProject)

module.exports = router;