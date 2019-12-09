export function initializeYoutubeVideo(element, elementConfig) {
  element.innerHTML = '';
  let youtubeBaseUrl = (elementConfig.useNoCookie) ? 'https://www.youtube-nocookie.com/embed/' : 'https://www.youtube.com/embed/';
  let videoUrl = youtubeBaseUrl + elementConfig.videoId;
  videoUrl += elementConfig.videoAutoplay ? '?autoplay=1' : '?autoplay=0';
  videoUrl += elementConfig.videoAllowFullscreen ? '&fs=1' : '&fs=0';
  videoUrl += elementConfig.videoPlayerLanguage !== '' ? '&hl=' + elementConfig.videoPlayerLanguage : '';
  videoUrl += elementConfig.videoRelated ? '&rel=1' : '&rel=0';

  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  // iframe.setAttribute('width', '560');
  // iframe.setAttribute('height', '315');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('autoplay', '1');
  element.appendChild(iframe);

  let link = document.createElement('a');
  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);
  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');
  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));

  let text = document.createElement('p');
  text.appendChild(document.createTextNode(elementConfig.privacyNoticeText));
  text.appendChild(link);

  element.appendChild(text);
}

export function initializePreview(element, elementConfig) {
  let image = document.createElement('img');
  image.setAttribute('src', elementConfig.previewImage);

  /*image.addEventListener('click', () => {
    initializeYoutubeVideo(element, elementConfig);
  });*/
  element.appendChild(image);

  let link = document.createElement('a');
  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);
  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');
  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));
  console.log('link', link);

  let text = document.createElement('p');
  text.appendChild(document.createTextNode(elementConfig.privacyAcceptText));
  text.appendChild(link);

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener("click", () => {
    initializeYoutubeVideo(element, elementConfig);
  });


  let hint = document.createElement('div');
  hint.appendChild(checkbox);
  hint.appendChild(text);


  element.appendChild(hint);
}