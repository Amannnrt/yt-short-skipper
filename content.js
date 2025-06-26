document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    const video = document.querySelector('video.html5-main-video');
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  }
});