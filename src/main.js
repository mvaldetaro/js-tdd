const BASE_URL = 'https://api.spotify.com/v1';

export const search = (pQuery, pType) =>
  fetch(`${BASE_URL}/search?q=${pQuery}&type=${pType}`).then(rData => {
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
