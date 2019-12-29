/*
Spotify Wrapper API
*/

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai); // chai utiliza as interfaces da sinonChai
sinonStubPromise(sinon); // sinon stub recebe todos os objetos de sinon

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    // search (gen)
    it('deve existir o metodo search', () => {
      expect(search).to.exist;
    });
    // searchAlbuns
    it('deve existir o metodo searchAlbuns', () => {
      expect(searchAlbuns).to.exist;
    });
    // searchArtists
    it('deve existir o metodo searchArtists', () => {
      expect(searchArtists).to.exist;
    });
    // searchTracks
    it('deve existir o metodo searchTracks', () => {
      expect(searchTracks).to.exist;
    });
    // searchPlaylists
    it('deve existir o metodo searchPlaylists', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('search (gen)', () => {
    it('deve executar uma chamada ajax (fetch) ', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const xArtist = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
