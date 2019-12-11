/**
 * Initialize the video iframe (SECOND STEP)
 * @param element The DOM Element which is an instance of YPE
 * @param elementConfig The configuration for this element
 * @param autoplay Should the video autostart (as it is the click target, generally only possible if activated in config)
 */
export function initializeYoutubeVideo(element, elementConfig, autoplay) {
  let youtubeBaseUrl = (elementConfig.useNoCookie) ? 'https://www.youtube-nocookie.com/embed/' : 'https://www.youtube.com/embed/';
  let videoUrl = youtubeBaseUrl + elementConfig.videoId;
  videoUrl += (elementConfig.videoAutoplay && autoplay) ? '?autoplay=1' : '?autoplay=0';
  videoUrl += elementConfig.videoAllowFullscreen ? '&fs=1' : '&fs=0';
  videoUrl += elementConfig.videoPlayerLanguage !== '' ? '&hl=' + elementConfig.videoPlayerLanguage : '';
  videoUrl += elementConfig.videoRelated ? '&rel=1' : '&rel=0';

  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('autoplay', '1');

  let wrapper = document.createElement('div');
  wrapper.classList.add('ype-video');
  wrapper.appendChild(iframe);

  let link = document.createElement('a');
  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);
  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');
  link.classList.add('ype-link');
  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));

  let text = document.createElement('p');
  text.classList.add('ype-hint');
  text.appendChild(document.createTextNode(elementConfig.privacyNoticeText));
  text.appendChild(link);

  element.innerHTML = '';
  element.appendChild(wrapper);
  element.appendChild(text);

  if(elementConfig.saveAcceptanceInCookie) {
    localStorage.setItem('ype-accepted-terms', '1');
  }
}

/**
 * Initialize the preview of the video (FIRST STEP)
 * @param element The DOM Element which is an instance of YPE
 * @param elementConfig The configuration for this element
 */
export function initializePreview(element, elementConfig) {
  let image = document.createElement('img');
  let previewImage = (elementConfig.previewImage === '') ? 'https://i.ytimg.com/vi/' + elementConfig.videoId + '/maxresdefault.jpg' : elementConfig.previewImage;
  image.setAttribute('src', previewImage);
  image.classList.add('ype-image');
  let overlay = document.createElement('div');
  overlay.classList.add('ype-image-overlay');

  if(elementConfig.previewImageOverlayIcon !== '') {
    let overlayIcon = document.createElement('img');
    overlayIcon.setAttribute('src', elementConfig.previewImageOverlayIcon);
    overlayIcon.classList.add('ype-image-overlay-icon');
    overlay.appendChild(overlayIcon);
  }

  let imageWrapper = document.createElement('div');
  imageWrapper.classList.add('ype-image-wrapper');
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(overlay);
  imageWrapper.addEventListener("click", () => {
    highlightHint(element, elementConfig);
  });
  element.appendChild(imageWrapper);

  let link = document.createElement('a');
  link.setAttribute('href', elementConfig.privacyDeclarationLinkUrl);
  link.setAttribute('target', elementConfig.openPrivacyDeclarationLinkInNewTab ? '_blank' : '_self');
  link.classList.add('ype-link');
  link.appendChild(document.createTextNode(elementConfig.privacyDeclarationLinkText));

  let text = document.createElement('span');
  text.appendChild(document.createTextNode(elementConfig.privacyAcceptText));
  text.classList.add('ype-text');
  text.appendChild(link);

  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('ype-checkbox');

  let hint = document.createElement('div');
  hint.classList.add('ype-hint');
  hint.appendChild(checkbox);
  hint.appendChild(text);
  element.appendChild(hint);

  document.addEventListener("click", (event) => {
    if(event.target.classList.contains('ype-checkbox')) {
      initializeYoutubeVideo(element, elementConfig, (event.target === checkbox));
    }
  });
}

function highlightHint(element, elementConfig) {
  let hint = element.querySelector('.ype-hint');
  hint.style.color = elementConfig.privacyNoticeTextHighlightColor;
}
