// 🎧 Unmute one video when clicked, pause/mute others
const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("click", () => {
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
        v.muted = true;
      }
    });

    if (video.paused) {
      video.play();
      video.muted = false;
    } else {
      video.pause();
      video.muted = true;
    }
  });
});

// 🎵 Floating rotating music icon
const musicIcon = document.createElement("div");
musicIcon.innerHTML = "🎵";
musicIcon.classList.add("music-icon");
document.body.appendChild(musicIcon);

videos.forEach(video => {
  video.addEventListener("play", () => musicIcon.style.opacity = "1");
  video.addEventListener("pause", () => {
    if (![...videos].some(v => !v.paused)) {
      musicIcon.style.opacity = "0";
    }
  });
});

// 💖✨ Floating background elements (hearts, stars, glowing orbs)
const floating = document.getElementById("floating");
const types = ["heart", "star", "orb"];

for (let i = 0; i < 25; i++) {
  const el = document.createElement("div");
  el.classList.add(types[Math.floor(Math.random() * types.length)]);
  if (el.classList.contains("heart")) el.textContent = "💖";
  if (el.classList.contains("star")) el.textContent = "✨";
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 8 + Math.random() * 5 + "s";
  el.style.animationDelay = Math.random() * 5 + "s";
  floating.appendChild(el);
}
