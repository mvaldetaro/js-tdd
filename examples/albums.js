global.fetch = require('node-fetch');
import { searchAlbuns } from '../src/main.js';
// import fetch from 'node-fetch';
// Define fetch cmo global para rodar no nodejs

const albuns = searchAlbuns('Foo Fighters');
console.log(albuns);

albuns.then(rData => console.log(rData));
