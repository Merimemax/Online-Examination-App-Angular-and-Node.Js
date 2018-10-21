var AdminModel = require('../models/AdminModel.js');

/**
 * AdminController.js
 *
 * @description :: Server-side logic for managing Admins.
 */
module.exports = {

    /**
     * AdminController.list()
     */
    list: function (req, res) {
        AdminModel.find(function (err, Admins) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Admin.',
                    error: err
                });
            }
            return res.json(Admins);
        });
    },

    /**
     * AdminController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        AdminModel.findOne({ _id: id }, function (err, Admin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Admin.',
                    error: err
                });
            }
            if (!Admin) {
                return res.status(404).json({
                    message: 'No such Admin'
                });
            }
            return res.json(Admin);
        });
    },

    /**
     * AdminController.create()
     */
    create: function (req, res) {
        var Admin = new AdminModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password

        });

        Admin.save(function (err, Admin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Admin',
                    error: err
                });
            }
            return res.status(201).json(Admin);
        });
    },

    /**
     * AdminController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        AdminModel.findOne({ _id: id }, function (err, Admin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Admin',
                    error: err
                });
            }
            if (!Admin) {
                return res.status(404).json({
                    message: 'No such Admin'
                });
            }

            Admin.firstname = req.body.firstname ? req.body.firstname : Admin.firstname;
            Admin.lastname = req.body.lastname ? req.body.lastname : Admin.lastname;
            Admin.email = req.body.email ? req.body.email : Admin.email;
            Admin.username = req.body.username ? req.body.username : Admin.username;
            Admin.password = req.body.password ? req.body.password : Admin.password;

            Admin.save(function (err, Admin) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Admin.',
                        error: err
                    });
                }

                return res.json(Admin);
            });
        });
    },

    /**
     * AdminController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        AdminModel.findByIdAndRemove(id, function (err, Admin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Admin.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
