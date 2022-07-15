// function setupVideo(video) {
//   let link = video.querySelector('.gym__video-link');
//   let media = video.querySelector('.gym__video-media');
//   let button = video.querySelector('.gym__video-button');
//   let id = parseMediaURL(media);
// }

// export {setupVideo};

function findVideos() {
  let videos = document.querySelectorAll('.gym__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.gym__video-link');
  let button = video.querySelector('.gym__video-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__video--enabled');
}


function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.classList.add('gym__video-media');

  return iframe;
}

function generateURL() {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/9TZXsZItgdw' + query;
}

export {findVideos};
