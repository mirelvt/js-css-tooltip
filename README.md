# js-css-tooltip 1.2.4

A custom tooltip which uses vanilla javascript and CSS3 animation.
It is tested in IE11+, Firefox 50+, Chrome 50+ and Safari 10+.

I created a simple [demo page](http://www.mirellavanteulingen.nl/demos/tooltip).

## Usage

The files you need are:
 - tooltip.min.js
 - tooltip.scss
 - _mixins.scss

Add the tooltip.min.js file and tooltip container element at the bottom of the body:
```html
    <div class="tooltip-container no-display"></div>
    <script src="tooltip.min.js" type="text/javascript"></script>
</body>
```

Add the css file to your html page:
```html
<link rel="stylesheet" type="text/css" href="css/tooltip.min.css">
```

To create a tooltip, add the attribute **data-tooltip="My tooltip info"** to your element, for example:
```html
<span data-tooltip="My tooltip text">Show my tooltip</span>
```

That's it.

## Customize .scss
If you want to use other colors or different animation for the tooltip, just change the colors and animation in the tooltip.scss file.

## Releases
- 2020-04-24 v1.2.4: Take window scroll position into account. Use terser + dart sass for minifying js/css. Update README.
- 2017-05-31 v1.2.3: Use ES6 const and let, fix eslint warnings. Remove css prefixes.
- 2017-01-09 v1.2.2: Handle tooltip elements which are smaller than 50px. For example, having a tooltip on an icon.
- 2016-09-29 v1.2.1: Refactor code.
- 2015-08-19  v1.0: First release.


