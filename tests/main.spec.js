/*
Spotify Wrapper API
*/

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai); // chai utiliza as interfaces da sinonChai

const BASE_URL = 'https://api.spotify.com/v1';

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
    let stubedFetch;
    let promise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('deve executar uma chamada ajax (fetch) ', () => {
      search();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('deve executar uma chamada ajax (fetch) ', () => {
      context('passando apenas um tipo', () => {
        search('Incubus', 'artist');
        expect(stubedFetch).to.have.been.calledWith(
          `${BASE_URL}/search?q=Incubus&type=artist`,
        );
        search('Incubus', 'album');
        expect(stubedFetch).to.have.been.calledWith(
          `${BASE_URL}/search?q=Incubus&type=album`,
        );
      });
      context('passando apenas mais de um tipo', () => {
        search('Incubus', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith(
          `${BASE_URL}/search?q=Incubus&type=artist,album`,
        );
      });
    });

    it('deve retornar json data da Promise ', () => {
      const xArtists = search('Incubus', 'artist');
      return xArtists.then(rData => expect(rData).to.be.eql({ album: 'name' }));
    });
  });
});
