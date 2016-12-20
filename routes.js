var express = require('express');
var router = express.Router();
var tayrPassport = require('tayr-passport');

module.exports = function(G) {

    var T = G[G.crud.conf.tayrProp];
    var table = G.crud.conf.table;


    router.post('/list', function(req, res, next) {
        G.crud.helpers.list().then(function (list) {
            res.json(list);
        });
    });

    router.post('/add', function(req, res, next) {
        G.crud.helpers.add(req).then(function (item) {
            res.json(item);
        });
    });

    router.post('/edit', function(req, res, next) {
        G.crud.helpers.edit(req).then(function (item) {
            res.json(item);
        });
    });

    router.post('/delete', function(req, res, next) {
        G.crud.helpers.delete(req).then(function (deleted) {
            res.json(item);
        });
    });

    return router;
};
