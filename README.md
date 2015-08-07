# js-css-tooltip

A custom tooltip which uses vanilla javascript and CSS3 animation. It is tested in IE9+, Firefox 17+, Chrome 20+ and Safari 5.0+.

## Usage
The only files you need are: tooltip.js, tooltip.scss and _mixins.scss.

Add the tooltip.js file in the bottom of the body:
```html
<script src="tooltip.js" type="text/javascript"></script>
```

Add the css file to your html page:
```html
<link rel="stylesheet" type="text/css" href="tooltip.css">
```

To create a tooltip, add the attributes **data-toggle="tooltip"** and **data-title=""** to your element, for example:
```html
<span data-toggle="tooltip" data-title="My tooltip text">Show my tooltip</span>
```

That's all you need to do.

## Customize .scss
If you want to use other colors for the tooltip, just change the colors in the tooltip.scss file.
