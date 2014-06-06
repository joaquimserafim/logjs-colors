var Logjs = require('log');
var chalk = require('chalk');
var inherits = require('util').inherits;
var fmt = require('util').format;

var colors = {
  'EMERGENCY': chalk.white.bgRed.bold,
  'ALERT':  chalk.blue.bgRed.bold,
  'CRITICAL': chalk.red.bold,
  'ERROR': chalk.red,
  'WARNING': chalk.yellow,
  'NOTICE': chalk.cyan,
  'INFO': chalk.green,
  'DEBUG': chalk.gray
};


module.exports = Log;

function Log (level, stream) {
  if (!(this instanceof Log)) return new Log(level, stream);
  Logjs.call(this, level, stream);
}

inherits(Log, Logjs);

Log.prototype.log = function (levelStr, args) {
  if (Logjs[levelStr] <= this.level) {
    var msg = fmt.apply(null, args);
    this.stream.write(colors[levelStr](
                      '[' + new Date() + ']' +
                      ' ' + levelStr +
                      ' ' + msg) + '\n');
  }
};
