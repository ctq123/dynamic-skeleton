'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSkeleton = require('./rcSkeleton.less');

var _rcSkeleton2 = _interopRequireDefault(_rcSkeleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skeleton = exports.Skeleton = function (_PureComponent) {
  _inherits(Skeleton, _PureComponent);

  function Skeleton() {
    _classCallCheck(this, Skeleton);

    return _possibleConstructorReturn(this, (Skeleton.__proto__ || Object.getPrototypeOf(Skeleton)).apply(this, arguments));
  }

  _createClass(Skeleton, [{
    key: 'generateSkeleton',
    value: function generateSkeleton() {
      var _props = this.props,
          children = _props.children,
          _props$level = _props.level,
          level = _props$level === undefined ? 1 : _props$level,
          animation = _props.animation,
          _props$imgClassName = _props.imgClassName,
          imgClassName = _props$imgClassName === undefined ? '' : _props$imgClassName;

      var animationClassName = animation ? _rcSkeleton2.default['skeleton-animation'] : '';
      if (!children || children.length === 0) {
        return children;
      }
      return children.map(function (item, i) {
        if (item.type === 'img' || imgClassName && item.props.className === imgClassName) {
          return _react2.default.createElement('div', { key: i, className: _rcSkeleton2.default['circle'] + ' ' + animationClassName });
        } else {
          return _react2.default.createElement('div', { key: i, className: _rcSkeleton2.default['paragraph'] + ' ' + animationClassName });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      console.log("children", children);
      return _react2.default.createElement(
        'div',
        { className: _rcSkeleton2.default['rc-skeleton'] },
        this.generateSkeleton()
      );
    }
  }]);

  return Skeleton;
}(_react.PureComponent);

exports.default = Skeleton;