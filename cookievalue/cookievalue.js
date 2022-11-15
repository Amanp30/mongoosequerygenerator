"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.cookievalue = function (name, x) {
  var cookie = x.split(`${name + "="}`);
  cookie.shift();
  return (cookie = cookie.toString());
};
