/*
 * JS CSS Tooltip v1.2.1
 * https://github.com/mirelvt/js-css-tooltip
 *
 * Released under the MIT license
 *
 * Date: 2016-09-29
 */

(function() {
    "use strict";

    var tooltip, elm_edges, tooltip_text;

    var Tooltip =  {
        create: function(tooltip, elm) {
            elm_edges = elm.getBoundingClientRect(); // relative to the viewport;
            tooltip_text = document.createTextNode(elm.getAttribute('data-tooltip'));
            tooltip.appendChild(tooltip_text);

            // Remove no-display + set the correct classname based on the position
            // of the elm.
            if (elm_edges.left > (window.innerWidth - 100)) {
                tooltip.className = 'tooltip-container tooltip-left';
            } else if ((elm_edges.left + (elm_edges.width / 2)) < 100) {
                tooltip.className = 'tooltip-container tooltip-right';
            } else {
                tooltip.className = 'tooltip-container tooltip-center';
            }
        },
        position: function(tooltip, elm) {
            var elm_top = elm_edges.top + elm_edges.height + 10; // 10 = arrow height

            // position tooltip on the left side of the elm.
            // 220 = the max width + arrow width of the tooltip.
            if (elm_edges.left > (window.innerWidth - 100)) {
                tooltip.style.left = (elm_edges.left - 220) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            } else if ((elm_edges.left + (elm_edges.width / 2)) < 100) {
                // position tooltip on the right side of the elm.
                tooltip.style.left = (elm_edges.left + elm_edges.width + 20) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            } else {
                // Position the toolbox in the center of the elm.
                var centered = (elm_edges.left + (elm_edges.width / 2)) - (tooltip.offsetWidth / 2);
                tooltip.style.left = centered + 'px';
                tooltip.style.top = elm_top + 'px';
            }
        },
    };

    function showTooltip(evt) {
        var item = Object.create(Tooltip);
        item.create(tooltip, evt.currentTarget);
        item.position(tooltip, evt.currentTarget);
    }

    function hideTooltip() {
        tooltip.className = 'tooltip-container no-display';
        tooltip.removeChild(tooltip.firstChild);
        tooltip.removeAttribute('style');
    }

    function onReady() {
        tooltip = document.documentElement.querySelector('.tooltip-container');
        var tooltip_elms = document.documentElement.querySelectorAll('[data-tooltip]');

        Array.prototype.forEach.call(tooltip_elms, function(elm) {
            elm.addEventListener('mouseover',  showTooltip , false);
            elm.addEventListener('mouseout', hideTooltip, false);
        });
    }

    document.addEventListener('DOMContentLoaded', onReady, false);
})();