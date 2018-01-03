const express = require('express');
const questionData = require('./../model/question/question');

const router = express.Router();

router.get('/question/list', (req, res, next) => res.json(questionData.editInlineAndCellData));

module.exports = function (app) {
  app.use('/api', router);
};
