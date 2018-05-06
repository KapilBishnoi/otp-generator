'use strict'

// var val = Math.floor(1000 + Math.random() * 9000)

exports.GetOtp = function (req, res) {
  res.send('{' + '"OTP":' + Math.floor(1000 + Math.random() * 9000) + '}')
}
