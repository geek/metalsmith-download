// Load modules

var Fs = require('fs');
var Code = require('code');
var Lab = require('lab');
var Metalsmith = require('metalsmith');
var Download = require('../');


// Declare internals

var internals = {};


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Metalsmith Download', function () {

    it('requires file and url', function (done) {

        var fn = function () {

            Download({});
        };

        expect(fn).to.throw();
        done();
    });

    it('requires options', function (done) {

        var fn = function () {

            Download();
        };

        expect(fn).to.throw();
        done();
    });

    it('can download url to local file', function (done) {

        var options = {
            url: 'https://raw.githubusercontent.com/geek/metalsmith-download/master/README.md',
            file: __dirname + '/README.tmp'
        };
        Metalsmith(__dirname).use(Download(options)).build(function (err) {

            expect(err).to.not.exist();
            var file = Fs.readFileSync(options.file);
            expect(file).to.exist();
            expect(file.toString()).to.contain('download');
            Fs.unlinkSync(options.file);
            done();
        });
    });

    it('gracefully handles invalid url', function (done) {

        var options = {
            url: 'https://localhost:1',
            file: __dirname + '/README.tmp'
        };
        Metalsmith(__dirname).use(Download(options)).build(function (err) {

            expect(err).to.exist();
            done();
        });
    });
});
