import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import { API_URL } from '../src/config';

global.fetch = require('node-fetch');

chai.use(sinonChai);

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });


  describe('Smoke tests', () => {
    it('deveria existir metodo getAlbum', () => {
      expect(getAlbum).to.exist;
    });

    it('deveria existir metodo getAlbumTracks', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('deveria ocorrer o fetch', () => {
      getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xId = '4aawyAB9vmqN3uQ7FjRGTy';
      getAlbum(xId);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/${xId}`);
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xId = '5aawyAB9vmqN3uQ7FjRGT3';
      getAlbum(xId);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/${xId}`);
    });

    it('deveria retornar os dados', () => {
      const xAlbum = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      return xAlbum.then(rData => expect(rData).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbums', () => {
    it('deveria ocorrer o fetch', () => {
      getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xIds = ['4aawyAB9vmqN3uQ7FjRGTy', '5aawyAB9vmqN3uQ7FjRGT3'];
      getAlbums(xIds);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/?ids=${xIds}`);
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xIds = ['4aawyAB9vmqN3uQ7FjRGTy', '5aawyAB9vmqN3uQ7FjRGT3'];
      getAlbums(xIds);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/?ids=${xIds}`);
    });

    it('deveria retornar os dados', () => {
      const xAlbum = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '5aawyAB9vmqN3uQ7FjRGT3']);
      return xAlbum.then(rData => expect(rData).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbumTracks', () => {
    it('deveria ocorrer o fetch', () => {
      getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xId = '4aawyAB9vmqN3uQ7FjRGTy';
      getAlbumTracks(xId);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/${xId}/tracks`);
    });

    it('deveria deveria ocorrer o fetch com a url correta', () => {
      const xId = '5aawyAB9vmqN3uQ7FjRGT3';
      getAlbumTracks(xId);
      expect(stubedFetch).to.have.been.calledWith(`${API_URL}/albums/${xId}/tracks`);
    });

    it('deveria retornar os dados', () => {
      const xTracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      return xTracks.then(rData => expect(rData).to.be.eql({ album: 'name' }));
    });
  });
});
