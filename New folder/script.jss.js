document.addEventListener('DOMContentLoaded', function () {
    const playPauseButton = document.getElementById('play-pause');
    const audioPlayer = document.getElementById('audio-player');
    const trackList = document.getElementById('track-list');
    const playlistList = document.getElementById('playlist-list');
    const lyricsElement = document.getElementById('lyrics');
    const profileInfo = document.getElementById('profile-info');
    const beatAnimation = document.getElementById('beat-animation');
    let isPlaying = false;
    let currentTrack = null;
    let playlists = [];

    // Handle Play/Pause
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
            beatAnimation.style.animation = 'none';
        } else {
            if (currentTrack) {
                audioPlayer.play();
                playPauseButton.textContent = 'Pause';
                beatAnimation.style.animation = 'beat 1s infinite';
            }
        }
        isPlaying = !isPlaying;
    });

    // Handle Track Click
    trackList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('track-item')) {
            const src = target.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
            isPlaying = true;
            currentTrack = src;
            updateLyrics(src);
        }
    });

    // Handle Playlist Creation
    document.getElementById('create-playlist').addEventListener('click', function () {
        const playlistName = prompt('Enter playlist name:');
        if (playlistName) {
            const playlistItem = document.createElement('li');
            playlistItem.className = 'playlist-item';
            playlistItem.textContent = playlistName;
            playlistItem.addEventListener('click', function () {
                alert(`Playing playlist: ${playlistName}`);
                // Implement playlist play functionality here
            });
            playlistList.appendChild(playlistItem);
            playlists.push(playlistName);
        }
    });

    // Handle Profile Editing
    document.getElementById('edit-profile').addEventListener('click', function () {
        const newUsername = prompt('Enter new username:');
        if (newUsername) {
            profileInfo.textContent = `Username: ${newUsername}`;
        }
    });

    // Update Lyrics
    function updateLyrics(track) {
        // Placeholder: Update with actual lyrics based on the track
        if (track === 'track1.mp3') {
            lyricsElement.textContent = 'Lyrics for Track 1...';
        } else if (track === 'track2.mp3') {
            lyricsElement
