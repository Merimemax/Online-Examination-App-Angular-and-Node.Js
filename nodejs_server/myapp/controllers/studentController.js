var studentModel = require('../models/studentModel.js');

/**
 * studentController.js
 *
 * @description :: Server-side logic for managing students.
 */
module.exports = {

    /**
     * studentController.list()
     */
    list: function (req, res) {
        studentModel.find(function (err, students) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting student.',
                    error: err
                });
            }
            return res.json(students);
        });
    },

    /**
     * studentController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        studentModel.findOne({ _id: id }, function (err, student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting student.',
                    error: err
                });
            }
            if (!student) {
                return res.status(404).json({
                    message: 'No such student'
                });
            }
            return res.json(student);
        });
    },

    /**
     * studentController.create()
     */
    create: function (req, res) {
        var student = new studentModel({
            fristname: req.body.fristname,
            lastname: req.body.lastname,
            email: req.body.email,
            status: req.body.status,
            isAnswered: req.body.isAnswered,
            result: req.body.result,
            questionandanswer: [{
                question: 'Q. ',
                Answer: 'A. '
            }]
        });

        student.save(function (err, student) {
            console.log(student);
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating student',
                    error: err
                });
            }
            return res.status(201).json(student);
        });
    },

    /**
     * studentController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        studentModel.findOne({ _id: id }, function (err, student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting student',
                    error: err
                });
            }
            if (!student) {
                return res.status(404).json({
                    message: 'No such student'
                });
            }

            student.fristname = req.body.fristname ? req.body.fristname : student.fristname;
            student.lastname = req.body.lastname ? req.body.lastname : student.lastname;
            student.email = req.body.email ? req.body.email : student.email;
            student.status = req.body.status ? req.body.status : student.status;
            student.isAnswered = req.body.isAnswered ? req.body.isAnswered : student.isAnswered;
            student.result = req.body.result ? req.body.result : student.result;

            student.save(function (err, student) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating student.',
                        error: err
                    });
                }

                return res.json(student);
            });
        });
    },

    /**
     * studentController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        studentModel.findByIdAndRemove(id, function (err, student) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the student.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
