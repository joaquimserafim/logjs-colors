var test = require('tape');
var Log = require('./');
var fs = require('fs');



test('logging to a file', function (t) {
  t.plan(1);
  var file = __dirname + '/file.log';
  var stream = fs.createWriteStream(file, {flags: 'a'});
  var log = new Log('debug', stream);

  log.debug('a debug message');
  log.info('a info message');
  log.notice('a notice message');
  log.warning('a warning message');
  log.error('a error message');
  log.critical('a critical message');
  log.alert('a alert message');
  log.emergency('a emergency message');


  var read = fs.createReadStream(file);

  read.pipe(process.stdout);

  fs.unlink(file, t.throws);
});
