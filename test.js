var load = require('./');

var expect = require('chai').expect;

describe('load-resource', function () {

    it('loads files', function (done) {
        load(['https://github.com/', 'https://twitter.com/'], '.css',
            function (css, url, last) {
                console.log(url);
                expect(css).to.be.a('string');
                if ( last ) done();
            });
    });

    it('loads file from GitHub', function (done) {
        var results = [];

        load(['github:twbs/bootstrap:dist/css/bootstrap.css'], '.css',
            function (css, url, last) {
                expect(last).to.be.true;
                expect(url).to.eql(
                    'https://raw.githubusercontent.com/twbs/bootstrap/' +
                    'master/dist/css/bootstrap.css');
                expect(css).to.include('normalize.css');
                done();
            });
    });

});
