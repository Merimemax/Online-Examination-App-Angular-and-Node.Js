var express = require('express');
var router = express.Router();
var admissionstaffController = require('../controllers/admissionstaffController.js');

/*
 * GET
 */
router.get('/', admissionstaffController.list);

/*
 * GET
 */
router.get('/:id', admissionstaffController.show);

/*
 * POST
 */
router.post('/', admissionstaffController.create);

/*
 * PUT
 */
router.put('/:id', admissionstaffController.update);

/*
 * DELETE
 */
router.delete('/:id', admissionstaffController.remove);

module.exports = router;
