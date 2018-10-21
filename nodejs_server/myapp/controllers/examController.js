var examModel = require('../models/examModel.js');

/**
 * examController.js
 *
 * @description :: Server-side logic for managing exams.
 */
module.exports = {

    /**
     * examController.list()
     */
    list: function (req, res) {
        examModel.find(function (err, exams) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting exam.',
                    error: err
                });
            }
            return res.json(exams);
        });
    },

    /**
     * examController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        examModel.findOne({_id: id}, function (err, exam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting exam.',
                    error: err
                });
            }
            if (!exam) {
                return res.status(404).json({
                    message: 'No such exam'
                });
            }
            return res.json(exam);
        });
    },

    /**
     * examController.create()
     */
    create: function (req, res) {
        var exam = new examModel({
			title : req.body.title,
			question : req.body.question,
			examnumber : req.body.examnumber

        });

        exam.save(function (err, exam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating exam',
                    error: err
                });
            }
            return res.status(201).json(exam);
        });
    },

    /**
     * examController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        examModel.findOne({_id: id}, function (err, exam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting exam',
                    error: err
                });
            }
            if (!exam) {
                return res.status(404).json({
                    message: 'No such exam'
                });
            }

            exam.title = req.body.title ? req.body.title : exam.title;
			exam.question = req.body.question ? req.body.question : exam.question;
			exam.examnumber = req.body.examnumber ? req.body.examnumber : exam.examnumber;
			
            exam.save(function (err, exam) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating exam.',
                        error: err
                    });
                }

                return res.json(exam);
            });
        });
    },

    /**
     * examController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        examModel.findByIdAndRemove(id, function (err, exam) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the exam.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
