(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOMServer"), require("Draft"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOMServer", "Draft"], factory);
	else if(typeof exports === 'object')
		exports["DraftConvert"] = factory(require("React"), require("ReactDOMServer"), require("Draft"));
	else
		root["DraftConvert"] = factory(root["React"], root["ReactDOMServer"], root["Draft"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__version = exports.parseHTML = exports.convertToHTML = undefined;

	var _convertToHTML = __webpack_require__(11);

	var _convertToHTML2 = _interopRequireDefault(_convertToHTML);

	var _parseHTML = __webpack_require__(19);

	var _parseHTML2 = _interopRequireDefault(_parseHTML);

	var _package = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.convertToHTML = _convertToHTML2.default;
	exports.parseHTML = _parseHTML2.default;
	exports.__version = _package.version;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = splitReactElement;

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// see http://w3c.github.io/html/syntax.html#writing-html-documents-elements
	var VOID_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

	function splitReactElement(element) {
	  if (VOID_TAGS.indexOf(element.type) !== -1) {
	    return _server2.default.renderToStaticMarkup(element);
	  }

	  var tags = _server2.default.renderToStaticMarkup(_react2.default.cloneElement(element, {}, '\r')).split('\r');

	  (0, _invariant2.default)(tags.length > 1, 'convertToHTML: Element of type ' + element.type + ' must render children');

	  (0, _invariant2.default)(tags.length < 3, 'convertToHTML: Element of type ' + element.type + ' cannot use carriage return character');

	  return {
	    start: tags[0],
	    end: tags[1]
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (r1, r2) {
	  if (r1.offset === r2.offset) {
	    return r2.length - r1.length;
	  }
	  return r1.offset - r2.offset;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (newFn, rest) {
	  return function () {
	    var newResult = newFn.apply(undefined, arguments);
	    if (newResult !== undefined && newResult !== null) {
	      return newResult;
	    }

	    return rest.apply(undefined, arguments);
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getElementHTML;

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _server2 = _interopRequireDefault(_server);

	var _splitReactElement = __webpack_require__(3);

	var _splitReactElement2 = _interopRequireDefault(_splitReactElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasChildren(element) {
	  return _react2.default.isValidElement(element) && _react2.default.Children.count(element.props.children) > 0;
	}

	function getElementHTML(element) {
	  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	  if (element === undefined || element === null) {
	    return element;
	  }

	  if (typeof element === 'string') {
	    return element;
	  }

	  if (_react2.default.isValidElement(element)) {
	    if (hasChildren(element)) {
	      return _server2.default.renderToStaticMarkup(element);
	    }

	    var tags = (0, _splitReactElement2.default)(element);

	    if (text !== null) {
	      var start = tags.start,
	          end = tags.end;

	      return start + text + end;
	    }

	    return tags;
	  }

	  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(element, 'start') && Object.prototype.hasOwnProperty.call(element, 'end'), 'convertToHTML: received conversion data without either an HTML string, ReactElement or an object with start/end tags');

	  if (text !== null) {
	    var _start = element.start,
	        _end = element.end;

	    return _start + text + _end;
	  }

	  return element;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateMutation;
	function updateMutation(mutation, originalOffset, originalLength, newLength, prefixLength, suffixLength) {
	  // three cases we can reasonably adjust - disjoint mutations that
	  // happen later on where the offset will need to be changed,
	  // mutations that completely contain the new one where we can adjust
	  // the length, and mutations that occur partially within the new one.
	  var lengthDiff = newLength - originalLength;

	  var mutationAfterChange = originalOffset + originalLength <= mutation.offset;
	  if (mutationAfterChange) {
	    return Object.assign({}, mutation, {
	      offset: mutation.offset + lengthDiff
	    });
	  }

	  var mutationContainsChange = originalOffset >= mutation.offset && originalOffset + originalLength <= mutation.offset + mutation.length;
	  if (mutationContainsChange) {
	    return Object.assign({}, mutation, {
	      length: mutation.length + lengthDiff
	    });
	  }

	  var mutationWithinPrefixChange = mutation.offset >= originalOffset && mutation.offset + mutation.length <= originalOffset + originalLength && prefixLength > 0;
	  if (mutationWithinPrefixChange) {
	    return Object.assign({}, mutation, {
	      offset: mutation.offset + prefixLength
	    });
	  }

	  var mutationContainsPrefix = mutation.offset < originalOffset && mutation.offset + mutation.length <= originalOffset + originalLength && mutation.offset + mutation.length > originalOffset && prefixLength > 0;
	  if (mutationContainsPrefix) {
	    return [Object.assign({}, mutation, {
	      length: originalOffset - mutation.offset
	    }), Object.assign({}, mutation, {
	      offset: originalOffset + prefixLength,
	      length: mutation.offset - originalOffset + mutation.length
	    })];
	  }

	  var mutationContainsSuffix = mutation.offset >= originalOffset && mutation.offset + mutation.length > originalOffset + originalLength && originalOffset + originalLength > mutation.offset && suffixLength > 0;
	  if (mutationContainsSuffix) {
	    return [Object.assign({}, mutation, {
	      offset: mutation.offset + prefixLength,
	      length: originalOffset + originalLength - mutation.offset
	    }), Object.assign({}, mutation, {
	      offset: originalOffset + originalLength + prefixLength + suffixLength,
	      length: mutation.offset + mutation.length - (originalOffset + originalLength)
	    })];
	  }

	  return mutation;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _updateMutation = __webpack_require__(8);

	var _updateMutation2 = _interopRequireDefault(_updateMutation);

	var _rangeSort = __webpack_require__(5);

	var _rangeSort2 = _interopRequireDefault(_rangeSort);

	var _getElementHTML = __webpack_require__(7);

	var _getElementHTML2 = _interopRequireDefault(_getElementHTML);

	var _getElementTagLength = __webpack_require__(17);

	var _getElementTagLength2 = _interopRequireDefault(_getElementTagLength);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var converter = function converter() {
	  var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var originalText = arguments[1];

	  return originalText;
	};

	exports.default = function (block, entityMap) {
	  var entityConverter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : converter;

	  var resultText = [].concat(_toConsumableArray(block.text));

	  var getEntityHTML = entityConverter;

	  if (entityConverter.__isMiddleware) {
	    getEntityHTML = entityConverter(converter);
	  }

	  if (Object.prototype.hasOwnProperty.call(block, 'entityRanges') && block.entityRanges.length > 0) {
	    var entities = block.entityRanges.sort(_rangeSort2.default);

	    var styles = block.inlineStyleRanges;

	    var _loop = function _loop(index) {
	      var entityRange = entities[index];
	      var entity = entityMap[entityRange.key];

	      var originalText = resultText.slice(entityRange.offset, entityRange.offset + entityRange.length).join('');

	      var entityHTML = getEntityHTML(entity, originalText);
	      var converted = [].concat(_toConsumableArray((0, _getElementHTML2.default)(entityHTML, originalText) || originalText));

	      var prefixLength = (0, _getElementTagLength2.default)(entityHTML, 'start');
	      var suffixLength = (0, _getElementTagLength2.default)(entityHTML, 'end');

	      var updateLaterMutation = function updateLaterMutation(mutation, mutationIndex) {
	        if (mutationIndex > index || Object.prototype.hasOwnProperty.call(mutation, 'style')) {
	          return (0, _updateMutation2.default)(mutation, entityRange.offset, entityRange.length, converted.length, prefixLength, suffixLength);
	        }
	        return mutation;
	      };

	      var updateLaterMutations = function updateLaterMutations(mutationList) {
	        return mutationList.reduce(function (acc, mutation, mutationIndex) {
	          var updatedMutation = updateLaterMutation(mutation, mutationIndex);
	          if (Array.isArray(updatedMutation)) {
	            return acc.concat(updatedMutation);
	          }

	          return acc.concat([updatedMutation]);
	        }, []);
	      };

	      entities = updateLaterMutations(entities);
	      styles = updateLaterMutations(styles);

	      resultText = [].concat(_toConsumableArray(resultText.slice(0, entityRange.offset)), _toConsumableArray(converted), _toConsumableArray(resultText.slice(entityRange.offset + entityRange.length)));
	    };

	    for (var index = 0; index < entities.length; index++) {
	      _loop(index);
	    }

	    return Object.assign({}, block, {
	      text: resultText.join(''),
	      inlineStyleRanges: styles,
	      entityRanges: entities
	    });
	  }

	  return block;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _styleObjectFunction = __webpack_require__(20);

	var _styleObjectFunction2 = _interopRequireDefault(_styleObjectFunction);

	var _accumulateFunction = __webpack_require__(6);

	var _accumulateFunction2 = _interopRequireDefault(_accumulateFunction);

	var _getElementHTML = __webpack_require__(7);

	var _getElementHTML2 = _interopRequireDefault(_getElementHTML);

	var _rangeSort = __webpack_require__(5);

	var _rangeSort2 = _interopRequireDefault(_rangeSort);

	var _defaultInlineHTML = __webpack_require__(13);

	var _defaultInlineHTML2 = _interopRequireDefault(_defaultInlineHTML);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var subtractStyles = function subtractStyles(original, toRemove) {
	  return original.filter(function (el) {
	    return !toRemove.some(function (elToRemove) {
	      return elToRemove.style === el.style;
	    });
	  });
	};

	var popEndingStyles = function popEndingStyles(styleStack, endingStyles) {
	  return endingStyles.reduceRight(function (stack, style) {
	    var styleToRemove = stack[stack.length - 1];

	    (0, _invariant2.default)(styleToRemove.style === style.style, 'Style ' + styleToRemove.style + ' to be removed doesn\'t match expected ' + style.style);

	    return stack.slice(0, -1);
	  }, styleStack);
	};

	var characterStyles = function characterStyles(offset, ranges) {
	  return ranges.filter(function (range) {
	    return offset >= range.offset && offset < range.offset + range.length;
	  });
	};

	var rangeIsSubset = function rangeIsSubset(firstRange, secondRange) {
	  // returns true if the second range is a subset of the first
	  var secondStartWithinFirst = firstRange.offset <= secondRange.offset;
	  var secondEndWithinFirst = firstRange.offset + firstRange.length >= secondRange.offset + secondRange.length;

	  return secondStartWithinFirst && secondEndWithinFirst;
	};

	var latestStyleLast = function latestStyleLast(s1, s2) {
	  // make sure longer-lasting styles are added first
	  var s2endIndex = s2.offset + s2.length;
	  var s1endIndex = s1.offset + s1.length;
	  return s2endIndex - s1endIndex;
	};

	var getStylesToReset = function getStylesToReset(remainingStyles, newStyles) {
	  var i = 0;
	  while (i < remainingStyles.length) {
	    if (newStyles.every(rangeIsSubset.bind(null, remainingStyles[i]))) {
	      i++;
	    } else {
	      return remainingStyles.slice(i);
	    }
	  }
	  return [];
	};

	var appendStartMarkup = function appendStartMarkup(inlineHTML, string, styleRange) {
	  return string + (0, _getElementHTML2.default)(inlineHTML(styleRange.style)).start;
	};

	var prependEndMarkup = function prependEndMarkup(inlineHTML, string, styleRange) {
	  return (0, _getElementHTML2.default)(inlineHTML(styleRange.style)).end + string;
	};

	var defaultCustomInlineHTML = function defaultCustomInlineHTML(next) {
	  return function (style) {
	    return next(style);
	  };
	};
	defaultCustomInlineHTML.__isMiddleware = true;

	exports.default = function (rawBlock) {
	  var customInlineHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultCustomInlineHTML;

	  (0, _invariant2.default)(rawBlock !== null && rawBlock !== undefined, 'Expected raw block to be non-null');

	  var inlineHTML = void 0;
	  if (customInlineHTML.__isMiddleware === true) {
	    inlineHTML = customInlineHTML(_defaultInlineHTML2.default);
	  } else {
	    inlineHTML = (0, _accumulateFunction2.default)((0, _styleObjectFunction2.default)(customInlineHTML), (0, _styleObjectFunction2.default)(_defaultInlineHTML2.default));
	  }

	  var result = '';
	  var styleStack = [];

	  var sortedRanges = rawBlock.inlineStyleRanges.sort(_rangeSort2.default);

	  var originalTextArray = [].concat(_toConsumableArray(rawBlock.text));

	  for (var i = 0; i < originalTextArray.length; i++) {
	    var styles = characterStyles(i, sortedRanges);

	    var endingStyles = subtractStyles(styleStack, styles);
	    var newStyles = subtractStyles(styles, styleStack);
	    var remainingStyles = subtractStyles(styleStack, endingStyles);

	    // reset styles: look for any already existing styles that will need to
	    // end before styles that are being added on this character. to solve this
	    // close out those current tags and all nested children,
	    // then open new ones nested within the new styles.
	    var resetStyles = getStylesToReset(remainingStyles, newStyles);

	    var openingStyles = resetStyles.concat(newStyles).sort(latestStyleLast);

	    var openingStyleTags = openingStyles.reduce(appendStartMarkup.bind(null, inlineHTML), '');
	    var endingStyleTags = endingStyles.concat(resetStyles).reduce(prependEndMarkup.bind(null, inlineHTML), '');

	    result += endingStyleTags + openingStyleTags + originalTextArray[i];

	    styleStack = popEndingStyles(styleStack, resetStyles.concat(endingStyles));
	    styleStack = styleStack.concat(openingStyles);

	    (0, _invariant2.default)(styleStack.length === styles.length, 'Character ' + i + ': ' + (styleStack.length - styles.length) + ' styles left on stack that should no longer be there');
	  }

	  result = styleStack.reduceRight(function (res, openStyle) {
	    return res + (0, _getElementHTML2.default)(inlineHTML(openStyle.style)).end;
	  }, result);

	  return result;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _server2 = _interopRequireDefault(_server);

	var _draftJs = __webpack_require__(22);

	var _encodeBlock = __webpack_require__(14);

	var _encodeBlock2 = _interopRequireDefault(_encodeBlock);

	var _blockEntities = __webpack_require__(9);

	var _blockEntities2 = _interopRequireDefault(_blockEntities);

	var _blockInlineStyles = __webpack_require__(10);

	var _blockInlineStyles2 = _interopRequireDefault(_blockInlineStyles);

	var _accumulateFunction = __webpack_require__(6);

	var _accumulateFunction2 = _interopRequireDefault(_accumulateFunction);

	var _blockTypeObjectFunction = __webpack_require__(15);

	var _blockTypeObjectFunction2 = _interopRequireDefault(_blockTypeObjectFunction);

	var _getBlockTags = __webpack_require__(16);

	var _getBlockTags2 = _interopRequireDefault(_getBlockTags);

	var _getNestedBlockTags = __webpack_require__(18);

	var _getNestedBlockTags2 = _interopRequireDefault(_getNestedBlockTags);

	var _defaultBlockHTML = __webpack_require__(12);

	var _defaultBlockHTML2 = _interopRequireDefault(_defaultBlockHTML);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Immutable from 'immutable'; // eslint-disable-line no-unused-vars
	var NESTED_BLOCK_TYPES = ['ordered-list-item', 'unordered-list-item'];

	var defaultEntityToHTML = function defaultEntityToHTML(entity, originalText) {
	  return originalText;
	};

	var convertToHTML = function convertToHTML(_ref) {
	  var _ref$styleToHTML = _ref.styleToHTML,
	      styleToHTML = _ref$styleToHTML === undefined ? {} : _ref$styleToHTML,
	      _ref$blockToHTML = _ref.blockToHTML,
	      blockToHTML = _ref$blockToHTML === undefined ? {} : _ref$blockToHTML,
	      _ref$entityToHTML = _ref.entityToHTML,
	      entityToHTML = _ref$entityToHTML === undefined ? defaultEntityToHTML : _ref$entityToHTML;
	  return function (contentState) {
	    (0, _invariant2.default)(contentState !== null && contentState !== undefined, 'Expected contentState to be non-null');

	    var getBlockHTML = void 0;
	    if (blockToHTML.__isMiddleware === true) {
	      getBlockHTML = blockToHTML((0, _blockTypeObjectFunction2.default)(_defaultBlockHTML2.default));
	    } else {
	      getBlockHTML = (0, _accumulateFunction2.default)((0, _blockTypeObjectFunction2.default)(blockToHTML), (0, _blockTypeObjectFunction2.default)(_defaultBlockHTML2.default));
	    }

	    var rawState = (0, _draftJs.convertToRaw)(contentState);

	    var listStack = [];

	    var result = rawState.blocks.map(function (block) {
	      var type = block.type,
	          depth = block.depth;


	      var closeNestTags = '';
	      var openNestTags = '';

	      if (NESTED_BLOCK_TYPES.indexOf(type) === -1) {
	        // this block can't be nested, so reset all nesting if necessary
	        closeNestTags = listStack.reduceRight(function (string, nestedBlock) {
	          return string + (0, _getNestedBlockTags2.default)(getBlockHTML(nestedBlock)).nestEnd;
	        }, '');
	        listStack = [];
	      } else {
	        while (depth + 1 !== listStack.length || type !== listStack[depth].type) {
	          if (depth + 1 === listStack.length) {
	            // depth is right but doesn't match type
	            var blockToClose = listStack[depth];
	            closeNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(blockToClose)).nestEnd;
	            openNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(block)).nestStart;
	            listStack[depth] = block;
	          } else if (depth + 1 < listStack.length) {
	            var _blockToClose = listStack[listStack.length - 1];
	            closeNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(_blockToClose)).nestEnd;
	            listStack = listStack.slice(0, -1);
	          } else {
	            openNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(block)).nestStart;
	            listStack.push(block);
	          }
	        }
	      }

	      var innerHTML = (0, _blockInlineStyles2.default)((0, _blockEntities2.default)((0, _encodeBlock2.default)(block), rawState.entityMap, entityToHTML), styleToHTML);

	      var blockHTML = (0, _getBlockTags2.default)(getBlockHTML(block));

	      var html = void 0;

	      if (typeof blockHTML === 'string') {
	        html = blockHTML;
	      } else {
	        html = blockHTML.start + innerHTML + blockHTML.end;
	      }

	      if (innerHTML.length === 0 && Object.prototype.hasOwnProperty.call(blockHTML, 'empty')) {
	        if (_react2.default.isValidElement(blockHTML.empty)) {
	          html = _server2.default.renderToStaticMarkup(blockHTML.empty);
	        } else {
	          html = blockHTML.empty;
	        }
	      }

	      return closeNestTags + openNestTags + html;
	    }).join('');

	    result = listStack.reduce(function (res, nestBlock) {
	      return res + (0, _getNestedBlockTags2.default)(getBlockHTML(nestBlock)).nestEnd;
	    }, result);

	    return result;
	  };
	};

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (args.length === 1 && Object.prototype.hasOwnProperty.call(args[0], '_map') && args[0].getBlockMap != null) {
	    // skip higher-order function and use defaults
	    return convertToHTML({}).apply(undefined, args);
	  }

	  return convertToHTML.apply(undefined, args);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  'unstyled': _react2.default.createElement('p', null),
	  'paragraph': _react2.default.createElement('p', null),
	  'header-one': _react2.default.createElement('h1', null),
	  'header-two': _react2.default.createElement('h2', null),
	  'header-three': _react2.default.createElement('h3', null),
	  'header-four': _react2.default.createElement('h4', null),
	  'header-five': _react2.default.createElement('h5', null),
	  'header-six': _react2.default.createElement('h6', null),
	  'blockquote': _react2.default.createElement('blockquote', null),
	  'unordered-list-item': {
	    element: _react2.default.createElement('li', null),
	    nest: _react2.default.createElement('ul', null)
	  },
	  'ordered-list-item': {
	    element: _react2.default.createElement('li', null),
	    nest: _react2.default.createElement('ol', null)
	  },
	  'media': _react2.default.createElement('figure', null)
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultInlineHTML;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultInlineHTML(style) {
	  switch (style) {
	    case 'BOLD':
	      return _react2.default.createElement('strong', null);
	    case 'ITALIC':
	      return _react2.default.createElement('em', null);
	    case 'UNDERLINE':
	      return _react2.default.createElement('u', null);
	    case 'CODE':
	      return _react2.default.createElement('code', null);
	    default:
	      return {
	        start: '',
	        end: ''
	      };
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _updateMutation = __webpack_require__(8);

	var _updateMutation2 = _interopRequireDefault(_updateMutation);

	var _rangeSort = __webpack_require__(5);

	var _rangeSort2 = _interopRequireDefault(_rangeSort);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ENTITY_MAP = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '\n': '<br/>'
	};

	exports.default = function (block) {
	  var blockText = [].concat(_toConsumableArray(block.text));

	  var entities = block.entityRanges.sort(_rangeSort2.default);
	  var styles = block.inlineStyleRanges.sort(_rangeSort2.default);
	  var resultText = '';

	  var _loop = function _loop(index) {
	    var char = blockText[index];

	    if (ENTITY_MAP[char] !== undefined) {
	      (function () {
	        var encoded = ENTITY_MAP[char];
	        var resultIndex = resultText.length;
	        resultText += encoded;

	        var updateForChar = function updateForChar(mutation) {
	          return (0, _updateMutation2.default)(mutation, resultIndex, char.length, encoded.length, 0, 0);
	        };

	        entities = entities.map(updateForChar);
	        styles = styles.map(updateForChar);
	      })();
	    } else {
	      resultText += char;
	    }
	  };

	  for (var index = 0; index < blockText.length; index++) {
	    _loop(index);
	  }

	  return Object.assign({}, block, {
	    text: resultText,
	    inlineStyleRanges: styles,
	    entityRanges: entities
	  });
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (typeObject) {
	  return function (block) {
	    if (typeof typeObject === 'function') {
	      // handle case where typeObject is already a function
	      return typeObject(block);
	    }

	    return typeObject[block.type];
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBlockTags;

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(4);

	var _server2 = _interopRequireDefault(_server);

	var _splitReactElement = __webpack_require__(3);

	var _splitReactElement2 = _interopRequireDefault(_splitReactElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasChildren(element) {
	  return _react2.default.isValidElement(element) && _react2.default.Children.count(element.props.children) > 0;
	}

	function getBlockTags(blockHTML) {
	  (0, _invariant2.default)(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');

	  if (typeof blockHTML === 'string') {
	    return blockHTML;
	  }

	  if (_react2.default.isValidElement(blockHTML)) {
	    if (hasChildren(blockHTML)) {
	      return _server2.default.renderToStaticMarkup(blockHTML);
	    }

	    return (0, _splitReactElement2.default)(blockHTML);
	  }

	  if (Object.prototype.hasOwnProperty.call(blockHTML, 'element') && _react2.default.isValidElement(blockHTML.element)) {
	    return Object.assign({}, blockHTML, (0, _splitReactElement2.default)(blockHTML.element));
	  }

	  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(blockHTML, 'start') && Object.prototype.hasOwnProperty.call(blockHTML, 'end'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');

	  return blockHTML;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _splitReactElement = __webpack_require__(3);

	var _splitReactElement2 = _interopRequireDefault(_splitReactElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getElementTagLength = function getElementTagLength(element) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';

	  if (_react2.default.isValidElement(element)) {
	    var length = (0, _splitReactElement2.default)(element)[type].length;

	    var child = _react2.default.Children.toArray(element.props.children)[0];
	    return length + (child && _react2.default.isValidElement(child) ? getElementTagLength(child, type) : 0);
	  }

	  if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object') {
	    return element[type] ? element[type].length : 0;
	  }

	  return 0;
	};

	exports.default = getElementTagLength;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getNestedBlockTags;

	var _invariant = __webpack_require__(2);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _splitReactElement2 = __webpack_require__(3);

	var _splitReactElement3 = _interopRequireDefault(_splitReactElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getNestedBlockTags(blockHTML) {
	  (0, _invariant2.default)(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');

	  if (_react2.default.isValidElement(blockHTML.nest)) {
	    var _splitReactElement = (0, _splitReactElement3.default)(blockHTML.nest),
	        start = _splitReactElement.start,
	        end = _splitReactElement.end;

	    return Object.assign({}, blockHTML, {
	      nestStart: start,
	      nestEnd: end
	    });
	  }

	  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(blockHTML, 'nestStart') && Object.prototype.hasOwnProperty.call(blockHTML, 'nestEnd'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');

	  return blockHTML;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parseHTML;
	var fallback = function fallback(html) {
	  var doc = document.implementation.createHTMLDocument('');
	  doc.documentElement.innerHTML = html;
	  return doc;
	};

	function parseHTML(html) {
	  var doc = void 0;
	  if (typeof DOMParser !== 'undefined') {
	    var parser = new DOMParser();
	    doc = parser.parseFromString(html, 'text/html');
	    if (doc === null || doc.body === null) {
	      doc = fallback(html);
	    }
	  } else {
	    doc = fallback(html);
	  }
	  return doc.body;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (object) {
	  return function (style) {
	    if (typeof object === 'function') {
	      return object(style);
	    }

	    return object[style];
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"name": "draft-convert",
		"version": "1.4.9",
		"description": "Extensibly serialize & deserialize Draft.js ContentState",
		"main": "lib/index.js",
		"repository": "wahack/draft-convert",
		"scripts": {
			"build": "npm run build:commonjs && npm run build:umd && npm run build:umd:min",
			"build:commonjs": "cross-env BABEL_ENV=commonjs babel src --out-dir lib",
			"build:umd": "webpack --config webpack.config.development.js ./src/index.js ./dist/draft-convert.js",
			"build:umd:min": "webpack --config webpack.config.production.js ./src/index.js ./dist/draft-convert.min.js",
			"jest": "jest",
			"jest:watch": "jest --watch",
			"jest:debug": "node --debug-brk --inspect ./node_modules/.bin/jest -i",
			"test-once": "npm run jest",
			"test": "npm run jest",
			"test:karma": "karma start test/karma.config.js",
			"test-once:karma": "karma start test/karma.config.js --single-run",
			"clean": "rimraf ./dist && rimraf ./lib",
			"build-and-test": "npm run clean && npm run build && npm run test-once",
			"lint": "eslint src/ test/",
			"prepublish": "npm run lint && npm run build-and-test"
		},
		"files": [
			"dist",
			"lib"
		],
		"keywords": [
			"draft",
			"draftjs",
			"draft-convert",
			"convert"
		],
		"author": "bbriggs@hubspot.com",
		"license": "Apache-2.0",
		"peerDependencies": {
			"draft-js": ">=0.7.0",
			"react": "^15.0.2",
			"react-dom": "^15.0.2"
		},
		"dependencies": {
			"immutable": "~3.7.4",
			"invariant": "^2.2.1",
			"jsdom": "^11.1.0"
		},
		"devDependencies": {
			"babel-cli": "^6.10.1",
			"babel-core": "^6.7.7",
			"babel-eslint": "^7.1.1",
			"babel-jest": "^18.0.0",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.6.0",
			"babel-preset-react": "^6.5.0",
			"cross-env": "^3.1.4",
			"draft-js": "^0.8.1",
			"eslint": "3.12.0",
			"eslint-config-hubspot": "^7.0.0",
			"eslint-plugin-react": "6.8.0",
			"jasmine": "^2.2.0",
			"jest": "^18.1.0",
			"json-loader": "^0.5.4",
			"karma": "^0.13.22",
			"karma-chrome-launcher": "^0.2.3",
			"karma-jasmine": "^0.3.8",
			"karma-webpack": "^1.7.0",
			"react": "^15.4.2",
			"react-dom": "^15.4.2",
			"rimraf": "2.5.4",
			"webpack": "^1.13.0"
		},
		"jest": {
			"testRegex": "/test/spec/.*\\.js$"
		}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }
/******/ ])
});
;