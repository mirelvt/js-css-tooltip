# js-css-tooltip 2.0

A custom tooltip which uses vanilla javascript and CSS3 animation. Version 2.0 now also supports keyboard navigation and is accessible with speech software. (Tested with MacOS voiceOver).

I created a simple [demo page](http://www.mirellavanteulingen.nl/demos/tooltip).

## Usage

The files you need are:
 - tooltip.min.js
 - tooltip.scss
 - _mixins.scss

 Add the tooltip.min.js file and tooltip container element at the bottom of the body:
```html
    <div class="tooltip-container" role="alertdialog" id="tooltipText" aria-hidden="true" aria-live="polite"></div>
    <script defer src="tooltip.min.js" type="text/javascript"></script>
</body>
```

Add the css file to your html page:
```html
<link rel="stylesheet" type="text/css" href="css/tooltip.min.css">
```

To create a tooltip, use the following html attributes:
-  data-tooltip="My tooltip text"
- aria-describedby="tooltipText"
- tabindex="0"
for example:
```html
<span data-tooltip="Tooltip in the left corner of the viewport" aria-describedby="tooltipText" tabindex="0">tooltip</span>
```

That's it.

## Customize .scss
If you want to use other colors or different animation for the tooltip, just change the colors and animation in the tooltip.scss file.

## Releases
- 2020-12-07 v2.0: Add keyboard and voiceOver accessibility. Update README.
- 2020-04-24 v1.2.4: Take window scroll position into account. Use terser + dart sass for minifying js/css. Update README.
- 2017-05-31 v1.2.3: Use ES6 const and let, fix eslint warnings. Remove css prefixes.
- 2017-01-09 v1.2.2: Handle tooltip elements which are smaller than 50px. For example, having a tooltip on an icon.
- 2016-09-29 v1.2.1: Refactor code.
- 2015-08-19  v1.0: First release.


