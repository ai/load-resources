var load = require('./');

var expect = require('chai').expect;

describe('load-resource', function () {

    it('loads files', function (done) {
        var results = [];

        load(['https://github.com/', 'https://twitter.com/'], '.css',
            function (css, url, last) {
                console.log(url);
                expect(css).to.be.a('string');
                results.push(url);

                if ( last ) done();
            });
    });

});
