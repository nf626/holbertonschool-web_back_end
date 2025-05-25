// routes middleware
import express from 'express';

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

function getRoutes() {
  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });

  router.get('/students:major', (req, res) => {
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });
}

export default getRoutes;
