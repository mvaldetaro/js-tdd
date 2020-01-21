const BASE_URL = 'https://api.spotify.com/v1';

export const search = (pQuery, pType) => fetch(`${BASE_URL}/search?q=${pQuery}&type=${pType}`).then(rData => {
  const xJsonData = rData.json();
  return xJsonData;
});
export const searchAlbuns = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
