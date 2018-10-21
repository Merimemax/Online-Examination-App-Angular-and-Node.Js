var admissionstaffModel = require('../models/admissionstaffModel.js');

/**
 * admissionstaffController.js
 *
 * @description :: Server-side logic for managing admissionstaffs.
 */
module.exports = {

    /**
     * admissionstaffController.list()
     */
    list: function (req, res) {
        admissionstaffModel.find(function (err, admissionstaffs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting admissionstaff.',
                    error: err
                });
            }
            return res.json(admissionstaffs);
        });
    },

    /**
     * admissionstaffController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        admissionstaffModel.findOne({_id: id}, function (err, admissionstaff) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting admissionstaff.',
                    error: err
                });
            }
            if (!admissionstaff) {
                return res.status(404).json({
                    message: 'No such admissionstaff'
                });
            }
            return res.json(admissionstaff);
        });
    },

    /**
     * admissionstaffController.create()
     */
    create: function (req, res) {
        var admissionstaff = new admissionstaffModel({
			fristname : req.body.fristname,
			lastname : req.body.lastname,
			email : req.body.email,
			username : req.body.username,
			password : req.body.password,
			hiredate : req.body.hiredate

        });

        admissionstaff.save(function (err, admissionstaff) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating admissionstaff',
                    error: err
                });
            }
            return res.status(201).json(admissionstaff);
        });
    },

    /**
     * admissionstaffController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        admissionstaffModel.findOne({_id: id}, function (err, admissionstaff) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting admissionstaff',
                    error: err
                });
            }
            if (!admissionstaff) {
                return res.status(404).json({
                    message: 'No such admissionstaff'
                });
            }

            admissionstaff.fristname = req.body.fristname ? req.body.fristname : admissionstaff.fristname;
			admissionstaff.lastname = req.body.lastname ? req.body.lastname : admissionstaff.lastname;
			admissionstaff.email = req.body.email ? req.body.email : admissionstaff.email;
			admissionstaff.username = req.body.username ? req.body.username : admissionstaff.username;
			admissionstaff.password = req.body.password ? req.body.password : admissionstaff.password;
			admissionstaff.hiredate = req.body.hiredate ? req.body.hiredate : admissionstaff.hiredate;
			
            admissionstaff.save(function (err, admissionstaff) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating admissionstaff.',
                        error: err
                    });
                }

                return res.json(admissionstaff);
            });
        });
    },

    /**
     * admissionstaffController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        admissionstaffModel.findByIdAndRemove(id, function (err, admissionstaff) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the admissionstaff.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
