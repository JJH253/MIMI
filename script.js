// 🎧 Unmute a video when clicked, and pause/mute others
const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("click", () => {
    // Pause and mute all other videos
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
        v.muted = true;
      }
    });

    // Toggle play/pause for clicked video
    if (video.paused) {
      video.play();
      video.muted = false;
    } else {
      video.pause();
      video.muted = true;
    }
  });
});

// Optional 🎵 floating music icon (appears when any video plays)
const musicIcon = document.createElement("div");
musicIcon.innerHTML = "🎵";
musicIcon.classList.add("music-icon");
document.body.appendChild(musicIcon);

const style = document.createElement("style");
style.textContent = `
.music-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 1.8rem;
  opacity: 0;
  animation: spin 5s linear infinite;
  transition: opacity 0.5s ease;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

// Show icon only while a video is playing
videos.forEach(video => {
  video.addEventListener("play", () => musicIcon.style.opacity = "1");
  video.addEventListener("pause", () => {
    if (![...videos].some(v => !v.paused)) {
      musicIcon.style.opacity = "0";
    }
  });
});
