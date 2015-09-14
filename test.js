var findPartials = require('./'),
  chai = require('chai'),
  expect = chai.expect;

var fs = require('fs');


describe('find-assemble-partials', function () {

  it('should return partials as an array', function (done) {
    fs.readFile('./src/layouts/default.hbs', 'utf8', function (err, data) {
      var partials = findPartials(data);

      expect(partials).to.be.an('array');
      done();
    });
  });

  it('should return a empty array when there are no partial files', function (done) {
    fs.readFile('./src/layouts/docs.hbs', 'utf8', function (err, data) {
      var partials = findPartials(data);

      expect(partials).to.be.empty;
      done();
    });
  });
});

