import { searchAlbuns } from '../src/main';

global.fetch = require('node-fetch');

// Define fetch cmo global para rodar no nodejs

const albuns = searchAlbuns('Foo Fighters');

albuns.then(rData => rData.albums.items.map(xItem => console.log(xItem.name)));
