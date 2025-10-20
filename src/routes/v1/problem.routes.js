const express = require("express");
const problemRouter = express.Router();

const { problemController } = require("../../controllers/index");


problemRouter.get('/ping', problemController.pingController);

problemRouter.post('/', problemController.addProblem);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.put('/:id', problemController.updateProblem);

problemRouter.delete('/:id', problemController.deleteProblem);





module.exports = problemRouter;