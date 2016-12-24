var randomstring = require("randomstring");
var pick = require('object-pick');
var md5 = require('md5');

module.exports = function (G,conf) {

    var T = G.E[conf.tayrProp];
    var table = conf.table;
    var tableProps = conf.tableProps;

    var exports = {
        list: function () {
            return new Promise(function(resolve, reject) {
                T.find(table).then(function (list) {
                    resolve(list);
                })
            });
        },
        add: function (req) {
            return new Promise(function(resolve, reject) {
                var item = new T.tayr(table,pick(req.body,tableProps));
                item.store().then(function () {
                    resolve(item);
                })
            });
        },
        edit: function (req) {
            return new Promise(function(resolve, reject) {
                var item = new T.tayr(table,pick(req.body,tableProps));
                item.id = req.body.id;
                item.store().then(function () {
                    resolve(item);
                })
            });
        },
        delete: function (req) {
            return new Promise(function(resolve, reject) {
                var item = new T.tayr(table,{
                    id: req.body.id
                });
                item.delete().then(function () {
                    resolve(true);
                });
            });
        },
    };

    return exports;
}
