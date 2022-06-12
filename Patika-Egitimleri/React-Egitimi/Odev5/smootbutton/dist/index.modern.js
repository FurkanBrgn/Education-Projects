import React from 'react';

var styles = {"default":"_3UK6o","primary":"_3ljpl","bordered":"_32duB"};

var SmootButton = function SmootButton(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return /*#__PURE__*/React.createElement("button", {
    className: styles[type]
  }, text);
};

export default SmootButton;
//# sourceMappingURL=index.modern.js.map
