'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcSkeleton = require('./dynamic-skeleton/rcSkeleton');

Object.defineProperty(exports, 'Skeleton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rcSkeleton).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }