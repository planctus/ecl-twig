(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# ECL Twig - EC Icon component\n\nnpm package: `@ecl-twig/ec-component-icon`\n\n```shell\nnpm install --save @ecl-twig/ec-component-icon\n```\n\n### Parameters\n\n- **\"icon\"** (associative array) (default: 'predefined structure below')\n  - \"path\" (string) (default: '') - path/url to general icon file (eg. /path-to-icon/icon.svg)\n  - \"type\" (string) (default: '') - type of icon. Available types are 'general', 'branded', 'notifications', 'ui'. A full list of icon types is available on the [ECL Iconography](https://v2--europa-component-library.netlify.com/ec/guidelines/iconography/)\n  - \"name\" (string) (default: '') - name of icon, eg. 'facebook', 'twitter'. A full list of icon names is available on the [ECL Iconography](https://v2--europa-component-library.netlify.com/ec/guidelines/iconography/)\n  - \"size\" (string) (default: 'm') size of icon. Available sizes are 'xs','s','m','l','xl','2xl','fluid'\n  - \"transform\" (string) (default: '') Transformation of icon. Available transformations are 'rotate-0', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical')\n  - \"color\" (string) (default: '') Color of icon. Available colors are 'default', 'inverted', 'primary'\n- **\"extra_classes\"** (optional) (string) (default: '') Extra classes (space separated)\n- **\"extra_attributes\"** (optional) (array) (default: []) Extra attributes\n  - \"name\" (string) Attribute name, eg. 'data-test'\n  - \"value\" (string) Attribute value, eg: 'data-test-1'\n\n### Example:\n\n\x3c!-- prettier-ignore --\x3e\n```twig\n{% include '@ecl-twig/ec-component-icon/ecl-icon.html.twig' with { \n  icon: { \n    path: '/static/mediaicons.svg', \n    type: 'branded', \n    name: 'facebook', \n    size: 'm', \n    transform: 'rotate-90', \n    color: 'primary' \n  }, \n  extra_classes: 'my-extra-class-1 my-extra-class-2', \n  extra_attributes: [ \n    { name: 'data-test', value: 'data-test-value' }, \n    { name: 'data-test-1', value: 'data-test-value-1' } \n  ] \n} %} \n```\n"},297:function(module){module.exports=JSON.parse('{"a":"2.19.0"}')},298:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#notifications--notifications--success"></use>\n</svg>\n'},299:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#notifications--notifications--success"></use>\n</svg>\n'},300:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#branded--branded--facebook"></use>\n</svg>\n'},301:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#branded--branded--facebook"></use>\n</svg>\n'},306:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#ui--general--audio"></use>\n</svg>\n'},307:function(module,exports){module.exports='<svg class="ecl-icon ecl-icon--m" focusable="false" aria-hidden="true">\n  <use xlink:href="icons.svg#ui--general--audio"></use>\n</svg>\n'},308:function(module,exports,__webpack_require__){__webpack_require__(309),__webpack_require__(451),module.exports=__webpack_require__(452)},370:function(module,exports){},452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(82),__webpack_require__(40),__webpack_require__(159),__webpack_require__(21),__webpack_require__(18),__webpack_require__(164),__webpack_require__(41),__webpack_require__(26);var _storybook_html__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(90),_storybook_theming__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(637),__webpack_require__(293)),_lerna_json__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(297);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_8__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_10__.create)({base:"light",brandTitle:"ECL Twig - php - v".concat(_lerna_json__WEBPACK_IMPORTED_MODULE_11__.a),brandUrl:"https://github.com/ec-europa/ecl-twig",brandImage:null}),sidebarAnimations:!1}});var contexts=[__webpack_require__(656)];Object(_storybook_html__WEBPACK_IMPORTED_MODULE_8__.configure)((function(){contexts.forEach((function(context){context.keys().filter((function(key){return!key.includes("node_modules")})).forEach(context)}))}),module)}.call(this,__webpack_require__(232)(module))},656:function(module,exports,__webpack_require__){var map={"./ec/icon/story/icon.story.js":657};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=656},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _icon_success_php_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(298),_icon_success_php_html__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_icon_success_php_html__WEBPACK_IMPORTED_MODULE_0__),_js_icon_success_js_html__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(299),_js_icon_success_js_html__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_js_icon_success_js_html__WEBPACK_IMPORTED_MODULE_1__),_icon_facebook_php_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(300),_icon_facebook_php_html__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_icon_facebook_php_html__WEBPACK_IMPORTED_MODULE_2__),_js_icon_facebook_js_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(301),_js_icon_facebook_js_html__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_js_icon_facebook_js_html__WEBPACK_IMPORTED_MODULE_3__),_storybook_html__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(90),_ecl_twig_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(302),_ecl_twig_storybook_addon_code__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(303),_ecl_twig_storybook_addon_diff__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(304),_ecl_twig_storybook_addon_jscode__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(305),_js_icon_audio_js_html__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(306),_js_icon_audio_js_html__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_js_icon_audio_js_html__WEBPACK_IMPORTED_MODULE_9__),_README_md__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(134),_icon_audio_php_html__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(307),_icon_audio_php_html__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_icon_audio_php_html__WEBPACK_IMPORTED_MODULE_11__);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Components/icon",module).addDecorator(_ecl_twig_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_5__.a).addDecorator(_ecl_twig_storybook_addon_code__WEBPACK_IMPORTED_MODULE_6__.a).addDecorator(_ecl_twig_storybook_addon_jscode__WEBPACK_IMPORTED_MODULE_8__.a).addDecorator(_ecl_twig_storybook_addon_diff__WEBPACK_IMPORTED_MODULE_7__.a).add("icon--audio",(function(){return _icon_audio_php_html__WEBPACK_IMPORTED_MODULE_11___default.a}),{notes:{markdown:_README_md__WEBPACK_IMPORTED_MODULE_10__.a},diff:{jsmarkup:_js_icon_audio_js_html__WEBPACK_IMPORTED_MODULE_9___default.a}}).add("icon--facebook",(function(){return _icon_facebook_php_html__WEBPACK_IMPORTED_MODULE_2___default.a}),{notes:{markdown:_README_md__WEBPACK_IMPORTED_MODULE_10__.a},diff:{jsmarkup:_js_icon_facebook_js_html__WEBPACK_IMPORTED_MODULE_3___default.a}}).add("icon--success",(function(){return _icon_success_php_html__WEBPACK_IMPORTED_MODULE_0___default.a}),{notes:{markdown:_README_md__WEBPACK_IMPORTED_MODULE_10__.a},diff:{jsmarkup:_js_icon_success_js_html__WEBPACK_IMPORTED_MODULE_1___default.a}})}.call(this,__webpack_require__(232)(module))}},[[308,1,2]]]);
//# sourceMappingURL=main.54dd687d17afec5c5b1f.bundle.js.map