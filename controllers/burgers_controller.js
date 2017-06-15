var db = require("../models");

exports.create = function(req, res) {
    db.Burger.create({
            burger_name: req.body.burger_name
        })
        .then(function(dbBurger) {
            console.log(dbBurger);
            res.redirect("/");
        });
};

exports.update = function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.burger_id
        }
    }).then(function(dbBurger) {
        res.redirect("/");
    });
};
