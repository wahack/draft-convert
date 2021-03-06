'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__version = exports.parseHTML = exports.convertToHTML = undefined;

var _convertToHTML = require('./convertToHTML');

var _convertToHTML2 = _interopRequireDefault(_convertToHTML);

var _parseHTML = require('./util/parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.convertToHTML = _convertToHTML2.default;
exports.parseHTML = _parseHTML2.default;
exports.__version = _package.version;