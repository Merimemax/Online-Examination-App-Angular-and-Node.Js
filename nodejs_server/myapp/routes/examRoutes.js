var express = require('express');
var router = express.Router();
var examController = require('../controllers/examController.js');

/*
 * GET
 */
router.get('/', examController.list);

/*
 * GET
 */
router.get('/:id', examController.show);

/*
 * POST
 */
router.post('/', examController.create);

/*
 * PUT
 */
router.put('/:id', examController.update);

/*
 * DELETE
 */
router.delete('/:id', examController.remove);

module.exports = router;
