// routes middleware
import express from 'express';

import getHomepage from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

router.get('/', getHomepage);

router.get('/students', StudentsController.getAllStudents());

router.get('/students:major', StudentsController.getAllStudents());

export default router;
