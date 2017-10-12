const BaseModel = require('./BaseModel');

class Playlist extends BaseModel {
  static get tableName() {
    return 'playlists';
  }
}

module.exports = Playlist;
