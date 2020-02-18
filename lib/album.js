"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = require("./utils");

var getAlbum = function getAlbum(pId) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(pId)).then(function (rData) {
    return (0, _utils.toJSON)(rData);
  });
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(pIds) {
  return fetch("".concat(_config.API_URL, "/albums/?ids=").concat(pIds)).then(function (rData) {
    return (0, _utils.toJSON)(rData);
  });
};

exports.getAlbums = getAlbums;

var getAlbumTracks = function getAlbumTracks(pId) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(pId, "/tracks")).then(function (rData) {
    return (0, _utils.toJSON)(rData);
  });
};

exports.getAlbumTracks = getAlbumTracks;