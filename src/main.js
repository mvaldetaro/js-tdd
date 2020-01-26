import { API_URL, HEADERS } from './config';

export const search = (pQuery, pType) =>
  fetch(`${API_URL}/search?q=${pQuery}&type=${pType}`, HEADERS).then(rData => {
    const xJsonData = rData.json();
    return xJsonData;
  });
export const searchAlbuns = pQuery => search(pQuery, 'album');
export const searchArtists = pQuery => search(pQuery, 'artist');
export const searchTracks = pQuery => {
  search(pQuery, 'track');
};
export const searchPlaylists = pQuery => {
  search(pQuery, 'playlist');
};
