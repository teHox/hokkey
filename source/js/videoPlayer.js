{
  const videoContainers = document.querySelectorAll(".video__video-continer");
  function playButtonHandler({ event: e, video, videoContainer }) {
    const playButton = videoContainer.querySelector(".control__play-button");
    const controlContainer = videoContainer.querySelector(".control");

    playButton.classList.toggle("control__play-button_active");
    controlContainer.classList.toggle("control_active");

    video.play();
  }
  function pauseButtonHandler({ event: e, video, videoContainer }) {
    const controlPauseButton = videoContainer.querySelector(".pause-button");
    const controlPlayButton = videoContainer.querySelector(".play-button");

    controlPauseButton.classList.toggle("pause-button_active");
    controlPlayButton.classList.toggle("play-button_active");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  function videoProgressBarHandler({
    event: e,
    video,
    videoContainer,
    target,
  }) {
    const bar = videoContainer.querySelector(".control__progress-bar");

    let elementWidth = ~~target.offsetWidth;
    let x = ~~e.offsetX;
    let time = ~~((100 * x) / elementWidth);

    bar.style.width = time + "%";

    if (video.paused) {
      video.currentTime = video.duration * (x / elementWidth);
    } else {
      video.pause();
      video.currentTime = video.duration * (x / elementWidth);
      video.play();
    }
  }
  function videoTimeForBarHandler({ event: e, video, videoContainer }) {
    const bar = videoContainer.querySelector(".control__progress-bar");
    let d = video.duration;
    let c = video.currentTime;
    bar.style.width = Math.trunc((100 * c) / d) + "%";
  }
  function valuemButtonHandler({ event: e, video, videoContainer }) {
    const muteButtonOn = videoContainer.querySelector(".mute-button-on");
    const muteButtonOff = videoContainer.querySelector(".mute-button-off");

    muteButtonOn.classList.toggle("mute-button-on_active");
    muteButtonOff.classList.toggle("mute-button-off_active");

    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }
  function fullScreenButtonHandler({
    event: e,
    video,
    videoContainer,
    target,
  }) {
    video.requestFullscreen();
  }
  function initPlayer({
    playButton,
    pauseButton,
    videoProgressBar,
    valuemButton,
    video,
    i: videoContainer,
    fullScreenButton,
  }) {
    video.onload = () => {
      const duration = (video.duration / 60).toFixed(2).split(".").join(":");
      const timeContainer = videoContainer.querySelector(
        ".control__video-time"
      );
      timeContainer.innerText = duration;
    };
    fullScreenButton.addEventListener("click", () =>
      fullScreenButtonHandler({ event, video, videoContainer })
    );
    playButton.addEventListener("click", (event) =>
      playButtonHandler({ event, video, videoContainer })
    );
    pauseButton.addEventListener("click", (event) =>
      pauseButtonHandler({ event, video, videoContainer })
    );
    videoProgressBar.addEventListener("click", function (event) {
      let target = this;
      videoProgressBarHandler({ event, video, videoContainer, target });
    });
    valuemButton.addEventListener("click", (event) =>
      valuemButtonHandler({ event, video, videoContainer })
    );
    video.addEventListener("timeupdate", (event) =>
      videoTimeForBarHandler({ event, video, videoContainer })
    );
    video.addEventListener("click", () =>
      pauseButtonHandler({ event, video, videoContainer })
    );
  }

  for (let i of videoContainers) {
    const playButton = i.querySelector(".control__play-button");
    const pauseButton = i.querySelector(".control__pause-button");
    const videoProgressBar = i.querySelector(
      ".control__progress-bar-container"
    );
    const valuemButton = i.querySelector(".control__sound-button");
    const video = i.querySelector(".video__player");
    const fullScreenButton = i.querySelector(".control__fullscreen-button");

    initPlayer({
      playButton,
      pauseButton,
      videoProgressBar,
      valuemButton,
      video,
      i,
      fullScreenButton,
    });
  }
}
