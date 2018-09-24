var playlist = { 'Imagine Dragons': 'Whatever It Takes' };

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, obj, { [artistName]: songTitle })
}

updatePlaylist(playlist, 'Slowdive', 'Alison');
