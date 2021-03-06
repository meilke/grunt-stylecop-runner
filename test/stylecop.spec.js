var expect = require('expect.js'),
    stylecop = require('../tasks/stylecop.js'),
    shell;

describe('stylecop', function() {

  beforeEach(function() {
    shell = {exec: require('sinon').spy()};
  });

  it('is called normally', function() {
    var result = stylecop.examine(shell, {include: 'path/to/folder', path: 's'});
    expect(shell.exec.calledWith('s', ['-p', '"path/to/folder"'])).to.be(true);
  });
});