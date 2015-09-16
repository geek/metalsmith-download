// Load modules

var Fs = require('fs');
var Hoek = require('hoek');
var Wreck = require('wreck');


// Declare internals

var internals = {};


module.exports = function (options) {

    Hoek.assert(options && options.url && options.file, 'Requires options for url and file');

    return function (files, metalsmith, next) {

        var file = Fs.createWriteStream(options.file);
        Wreck.request('get', options.url, { rejectUnauthorized: false }, function (err, res) {

            if (err) {
                return next(err);
            }

            res.pipe(file);
            next();
        });
    };
};
