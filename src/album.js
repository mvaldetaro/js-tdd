import { API_URL } from './config';
import { toJSON } from './utils';

export const getAlbum = (pId) =>
  fetch(`${API_URL}/albums/${pId}`)
    .then(rData => toJSON(rData));

export const getAlbums = (pIds) =>
  fetch(`${API_URL}/albums/?ids=${pIds}`)
    .then(rData => toJSON(rData));

export const getAlbumTracks = (pId) =>
  fetch(`${API_URL}/albums/${pId}/tracks`)
    .then(rData => toJSON(rData));
