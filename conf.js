var randomstring = require("randomstring");

module.exports = function (G) {

    var exports = {
        tayrProp: 'T',
        table: 'crud',
        tableProps: [
            'name'
        ],
        msg: {
            name: 'name',
            add: 'add',
            edit: 'edit',
            delete: 'delete'
        }
    };

    return exports;
};
