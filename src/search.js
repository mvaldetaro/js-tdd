import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const search = (pQuery, pType) =>
  fetch(`${API_URL}/search?q=${pQuery}&type=${pType}`, HEADERS)
    .then(rData => toJSON(rData));

export const searchAlbuns = pQuery => search(pQuery, 'album');
export const searchArtists = pQuery => search(pQuery, 'artist');
export const searchTracks = pQuery => {
  search(pQuery, 'track');
};
export const searchPlaylists = pQuery => {
  search(pQuery, 'playlist');
};
