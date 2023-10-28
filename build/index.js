"use strict";

var _admin = _interopRequireDefault(require("routes/admin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const express = require('express');
const app = express();
app.use('/admin', _admin.default);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//export default app