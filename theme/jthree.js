ace.define("ace/theme/jthree",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-jthree";
exports.cssText = `

@font-face {
  font-family: 'CamingoCode';
  src: url('/fonts/CamingoCode/CamingoCode-Regular.ttf') format('truetype');
}

.ace-jthree .ace_gutter {
  background: #eee;
  color: #8F908A;
  font-size: 10px;
  line-height: 12px;
}
.ace-jthree .ace_gutter-layer {
  width: 47px !important;
}
.ace-jthree .ace_print-margin {
}
.ace-jthree {
  background-color: #fafafa;
  color: #434350;
  font-size: 12px;
  font-family: 'CamingoCode';
}
.ace-jthree .ace_cursor {
  color: #888;
}
.ace-jthree .ace_marker-layer .ace_selection {
  background: #e0e0e0;
}
.ace-jthree.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
}
.ace-jthree .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0);
}
.ace-jthree .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #e0e0e0;
}
.ace-jthree .ace_marker-layer .ace_active-line {
  background: #eee;
}
.ace-jthree .ace_gutter-active-line {
  background-color: #d8d8d8;
}
.ace-jthree .ace_marker-layer .ace_selected-word {
  border: 1px solid #e0e0e0;
}
.ace-jthree .ace_invisible {
  color: #52524d;
}
.ace-jthree .ace_entity.ace_name.ace_tag,
.ace-jthree .ace_keyword,
.ace-jthree .ace_meta.ace_tag,
.ace-jthree .ace_storage {
  color: #db5343;
}
.ace-jthree .ace_punctuation,
.ace-jthree .ace_punctuation.ace_tag {
  color: #434350;
}
.ace-jthree .ace_constant.ace_character,
.ace-jthree .ace_constant.ace_language,
.ace-jthree .ace_constant.ace_numeric,
.ace-jthree .ace_constant.ace_other {
  color: #4C9BA6;
}
.ace-jthree .ace_invalid {
  color: #F8F8F0;
  background-color: #db5343;
}
.ace-jthree .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #4C9BA6;
}
.ace-jthree .ace_support.ace_constant,
.ace-jthree .ace_support.ace_function {
  color: #8454DA;
}
.ace-jthree .ace_fold {
  background-color: #0083BE;
  border-color: #F8F8F2;
}
.ace-jthree .ace_storage.ace_type,
.ace-jthree .ace_support.ace_class,
.ace-jthree .ace_support.ace_type {
  font-style: italic;
  color: #8454DA;
}
.ace-jthree .ace_entity.ace_name.ace_function,
.ace-jthree .ace_entity.ace_other,
.ace-jthree .ace_entity.ace_other.ace_attribute-name,
.ace-jthree .ace_variable {
  color: #0083BE;
}
.ace-jthree .ace_variable.ace_parameter {
  font-style: italic;
  color: #FD971F;
}
.ace-jthree .ace_string {
  color: #4DA24B;
}
.ace-jthree .ace_comment {
  color: #839D9F;
}
.ace-jthree .ace_indent-guide {
  border-right: 1px solid #e6e6e6;
  margin-right: -1px;
}
`;

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);;
});
