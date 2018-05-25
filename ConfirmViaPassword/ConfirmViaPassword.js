'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _class, _class2, _temp2; // Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _mobxReact = require('mobx-react');
var _mobx = require('@parity/mobx');var _mobx2 = _interopRequireDefault(_mobx);
var _IdentityIcon = require('@parity/ui/lib/IdentityIcon');var _IdentityIcon2 = _interopRequireDefault(_IdentityIcon);
var _Button = require('semantic-ui-react/dist/commonjs/elements/Button');var _Button2 = _interopRequireDefault(_Button);
var _Form = require('semantic-ui-react/dist/commonjs/collections/Form');var _Form2 = _interopRequireDefault(_Form);
var _Input = require('semantic-ui-react/dist/commonjs/elements/Input');var _Input2 = _interopRequireDefault(_Input);
var _reactIntl = require('react-intl');
var _pick = require('lodash/pick');var _pick2 = _interopRequireDefault(_pick);

var _ConfirmViaPassword = require('./ConfirmViaPassword.css');var _ConfirmViaPassword2 = _interopRequireDefault(_ConfirmViaPassword);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var



ConfirmViaPassword = (0, _mobxReact.observer)(_class = (0, _reactIntl.injectIntl)(_class = (_temp2 = _class2 = function (_Component) {_inherits(ConfirmViaPassword, _Component);function ConfirmViaPassword() {var _ref;var _temp, _this, _ret;_classCallCheck(this, ConfirmViaPassword);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConfirmViaPassword.__proto__ || Object.getPrototypeOf(ConfirmViaPassword)).call.apply(_ref, [this].concat(args))), _this), _this.













    state = {
      isSending: false,
      password: '',
      passwordError: null }, _this.


    allAccountsInfoStore = _mobx2.default.parity.allAccountsInfo().get(_this.context.api), _this.

    handleChange = function (_ref2) {var value = _ref2.target.value;return (
        _this.setState({
          password: value }));}, _this.


    handleConfirm = function () {var
      api = _this.context.api;var _this$props =
      _this.props,request = _this$props.request,transaction = _this$props.transaction;var _this$state =
      _this.state,isSending = _this$state.isSending,password = _this$state.password;

      if (isSending) {
        return;
      }

      _this.setState({ isSending: true }, function () {
        // Note that transaction can be null, in this case confirmRequest will
        // sign the message that was initially in the request
        return api.signer.
        confirmRequest(
        request.id,
        (0, _pick2.default)(transaction, ['condition', 'gas', 'gasPrice']),
        password).

        then(function () {return _this.setState({ isSending: false });}).
        catch(function (error) {return (
            _this.setState({ isSending: false, passwordError: error.text }));});

      });
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(ConfirmViaPassword, [{ key: 'render', value: function render()

    {var _props =
      this.props,address = _props.address,isDisabled = _props.isDisabled;var
      isSending = this.state.isSending;

      return (
        _react2.default.createElement('div', { className: _ConfirmViaPassword2.default.confirmForm },
          _react2.default.createElement(_Form2.default, null,
            this.renderPassword(),
            this.renderHint(),
            this.renderError(),
            _react2.default.createElement(_Button2.default, {
              className: _ConfirmViaPassword2.default.confirmButton,
              content:
              /* eslint-disable indent,react/jsx-indent-props */
              isSending ?
              _react2.default.createElement(_reactIntl.FormattedMessage, {
                id: 'signer.txPendingConfirm.buttons.confirmBusy',
                defaultMessage: 'Confirming...' }) :

              _react2.default.createElement(_reactIntl.FormattedMessage, {
                id: 'signer.txPendingConfirm.buttons.confirmRequest',
                defaultMessage: 'Confirm Request' })

              /* eslint-disable indent,react/jsx-indent-props */,

              disabled: isDisabled || isSending,
              fluid: true,
              icon:
              _react2.default.createElement(_IdentityIcon2.default, {
                address: address,
                button: true,
                className: _ConfirmViaPassword2.default.signerIcon }),


              onClick: this.handleConfirm }))));




    } }, { key: 'renderError', value: function renderError()

    {var
      passwordError = this.state.passwordError;

      return (
        _react2.default.createElement('div', { className: _ConfirmViaPassword2.default.error },
          passwordError));


    } }, { key: 'renderPassword', value: function renderPassword()

    {var _props2 =
      this.props,formatMessage = _props2.intl.formatMessage,isFocused = _props2.isFocused;var _state =
      this.state,password = _state.password,passwordError = _state.passwordError;

      return (
        _react2.default.createElement('div', null,
          _react2.default.createElement('label', null,
            _react2.default.createElement(_reactIntl.FormattedMessage, {
              id: 'signer.txPendingConfirm.password.unlock.label',
              defaultMessage: 'Account Password:' })),


          _react2.default.createElement(_Input2.default, {
            className: _ConfirmViaPassword2.default.passwordInput,
            error: !!passwordError,
            focus: isFocused,
            onChange: this.handleChange,
            placeholder: formatMessage({
              defaultMessage: 'unlock the account',
              id: 'signer.txPendingConfirm.password.unlock.hint' }),

            type: 'password',
            value: password })));



    } }, { key: 'renderHint', value: function renderHint()

    {var
      address = this.props.address;
      var account = this.allAccountsInfoStore.allAccountsInfo[address];
      var passwordHint =
      account && account.meta && account.meta.passwordHint || null;

      if (!passwordHint) {
        return null;
      }

      return (
        _react2.default.createElement('div', { className: _ConfirmViaPassword2.default.passwordHint },
          _react2.default.createElement(_reactIntl.FormattedMessage, {
            id: 'signer.txPendingConfirm.passwordHint',
            defaultMessage: '(hint) {passwordHint}',
            values: {
              passwordHint: passwordHint } })));




    } }]);return ConfirmViaPassword;}(_react.Component), _class2.contextTypes = { api: _propTypes2.default.object.isRequired }, _class2.propTypes = { address: _propTypes2.default.string.isRequired, intl: _reactIntl.intlShape, isDisabled: _propTypes2.default.bool, isFocused: _propTypes2.default.bool, request: _propTypes2.default.object.isRequired, transaction: _propTypes2.default.object }, _temp2)) || _class) || _class;exports.default =


ConfirmViaPassword;