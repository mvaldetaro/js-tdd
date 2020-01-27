export const getAlbum = (pId) => fetch(`https://api.spotify.com/v1/albums/${pId}`).then(rData => rData.json());
export const getAlbumTracks = () => {};
