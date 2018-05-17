var playlist = {
  Ella: 'A-Tisket, A-Tasket',
  Louis: 'Hello, Dolly',
  Trane: 'A Love Supreme',
  Miles: 'Freddie Freeloader'
}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist.
}