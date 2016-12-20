var randomstring = require("randomstring");
var pick = require('object-pick');
var md5 = require('md5');

module.exports = function (G) {

    var T = G[G.crud.conf.tayrProp];
    var table = G.crud.conf.table;
    var tableProps = G.crud.conf.tableProps;

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
                var item.id = req.body.id;
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
