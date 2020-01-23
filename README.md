# Basilicom's Youtube Privacy Embed

[![Latest Version on NPM](https://img.shields.io/npm/v/youtube-privacy-embed.svg?style=flat-square)](https://npmjs.com/package/youtube-privacy-embed)
[![Software License](https://img.shields.io/github/license/basilicom/youtube-privacy-embed?style=flat-square)](LICENSE.md)

This package allows you to include Videos from YouTube in a privacy enforced way. After opening the page, the user also has to check a checkbox
and with this accept the privacy terms. Only then the connection to YouTube is established and the regular YouTube embed iframe is included.

## Install

You can install the package via yarn or npm:

```bash
$ yarn add youtube-privacy-embed
$ npm install youtube-privacy-embed --save
```

## Usage

**Setup**

JavaScript:

```js
import * as youtubePrivacyEmbed from 'youtube-privacy-embed';

youtubePrivacyEmbed.initialize('js-privacy-embed');
```

If wanted, you can also include a basic css file:

```css
@import "node_modules/youtube-privacy-embed/dist/style.css";
```

**Usage**

Include the following HTML snippet where you want to show the YouTube video:

```html
<div class="js-privacy-embed"
    data-ype-video-id="ZT4WRRhacWk">
    
</div>
```

**Configuration**

You can find the default configuration and all possible options in the [config.json](src/config.json) file.

You can overwrite them with own parameters on the initialization, like this:

```js
youtubePrivacyEmbed.initialize('js-privacy-embed', {
    useNoCookie: false,
    videoAutoplay: true
});
```

You can also overwrite the defaults (and your settings from the configuration) via data-attributes in the html part, 
where you at least should include the video id. Please note the changed property names: You must prepend it with `data-ype-`, 
and convert uppercase letters to `-` plus their lowercase equivalent. Eg. the property `videoAllowFullscreen` in the JS 
settings become `data-ype-video-allow-fullscreen` when you set it via the data attributes.

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please contact [basilicom](https://basilicom.de) instead of using the issue tracker.

## License

The GPL License (GPL v3.0). Please see [License File](LICENSE) for more information.

## Credits

- [schmidtflo](https://github.com/schmidtflo)

### About Basilicom

We design and program applications that are far beyond out-of-the-box-solutions. Online, mobile, social. Official Pimcore partner.