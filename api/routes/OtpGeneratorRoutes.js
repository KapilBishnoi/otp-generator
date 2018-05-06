'use strict'
module.exports = function (app) {
  var OtpGenerator = require('../controllers/OtpGeneratorController')

  // todoList Routes
  app.route('/')
    .get(OtpGenerator.GetOtp)
}
