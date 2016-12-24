var assert = require('assert');
var request = require('request');
describe('CRUD', function() {
    describe('list:', function() {
        it('should return an array', function(done) {
            this.timeout(5000);
            request.post({url: 'http://localhost:3000/crud/list'},function(err, res, body) {
                if (err) done(err);
                else if (Array.isArray(JSON.parse(body))) {
                    done();
                }
            });
        });
    });

    describe('add:', function() {
        it('should return json with id and name', function(done) {
            this.timeout(5000);
            request.post({url: 'http://localhost:3000/crud/add',form: {name: 'ism'}},function(err, res, body) {
                body = JSON.parse(body);
                if (err) done(err);
                else if (body.hasOwnProperty('id') && body.hasOwnProperty('name')) {
                    done();
                    edit(body.id);
                }
            });
        });
    });

    function edit(id) {
        describe('edit:', function() {
            it('should return json with id and modified name', function(done) {
                this.timeout(5000);
                request.post({url: 'http://localhost:3000/crud/edit',form: {id: id, name: 'smia'}},function(err, res, body) {
                    body = JSON.parse(body);
                    if (err) done(err);
                    else if (body.hasOwnProperty('id') && body.hasOwnProperty('name') && body.id == id && body.name == "smia") {
                        done();
                        del(body.id);
                    }
                });
            });
        });
    }

    function del(id) {
        describe('delete:', function() {
            it('should return json with success true', function(done) {
                this.timeout(5000);
                request.post({url: 'http://localhost:3000/crud/delete',form: {id: id}},function(err, res, body) {
                    body = JSON.parse(body);
                    if (err) done(err);
                    else if (body.hasOwnProperty('success') && body.success == true) {
                        done();
                    }
                });
            });
        });
    }
});
