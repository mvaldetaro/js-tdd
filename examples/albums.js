global.fetch = require('node-fetch');
import { searchAlbuns } from '../src/main.js';

// Define fetch cmo global para rodar no nodejs

const albuns = searchAlbuns('Foo Fighters');

albuns.then(rData => console.log(rData));
