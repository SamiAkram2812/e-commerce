const db = require("../models");
const brand = require("../models/brand");
const Brand = db.brands;

exports.addBrand = function (req, res) {
  // Validate request
  if (!req.body.id || !req.body.name || !req.body.description) {
    res.status(400).send({
        message: "Id, Name and description can not be empty!"
    });
    return;
}
// Create an Brands
const brand = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description
};
// Save Brand in the database
Address.create(brand)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating a new Brand."
        });
    });
}

exports.getBrand = function (req, res) {
    Brand.findByPk(req.params.id)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Brand " + req.params.id + "."
            });
        });

}

exports.getAllBrands = function (req, res) {
    brand.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

exports.deleteAllBrands = function (req, res) {

}

exports.deleteBrand = function (req, res) {
    const id = req.params.id;
    Address.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Brand was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Brand with id ${id}. Maybe Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Brand with id " + id
            });
        });
}

exports.updateBrand = function (req, res) {
    const id = req.params.id;

    Brand.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Brand was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Brand with id=${id}. Maybe Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Brand with id=${id}`
            });
        });
}