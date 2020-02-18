"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbuns = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

var search = function search(pQuery, pType) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(pQuery, "&type=").concat(pType), _config.HEADERS).then(function (rData) {
    return (0, _utils.toJSON)(rData);
  });
};

exports.search = search;

var searchAlbuns = function searchAlbuns(pQuery) {
  return search(pQuery, 'album');
};

exports.searchAlbuns = searchAlbuns;

var searchArtists = function searchArtists(pQuery) {
  return search(pQuery, 'artist');
};

exports.searchArtists = searchArtists;

var searchTracks = function searchTracks(pQuery) {
  search(pQuery, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(pQuery) {
  search(pQuery, 'playlist');
};

exports.searchPlaylists = searchPlaylists;