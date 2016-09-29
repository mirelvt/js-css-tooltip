# js-css-tooltip 1.2.1

A custom tooltip which uses vanilla javascript and CSS3 animation.
It is tested in IE9+, Firefox 17+, Chrome 20+ and Safari 5.0+.

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
If you want to use other colors for the tooltip, just change the colors in the tooltip.scss file.

## Releases
2016-09-29 v1.2.1: Refactor code.
2015-08-19  v1.0: First release.


