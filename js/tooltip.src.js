/*
 * JS CSS Tooltip v2.0
 * https://github.com/mirelvt/js-css-tooltip
 *
 * Released under the MIT license
 *
 * Date: 2020-12-07
 */

(function() {
    "use strict";

    let tooltip, elm_edges, tooltip_text, elm_top;

    var Tooltip = {
        create: function(tooltip, elm) {
            // elm_edges relative to the viewport.
            elm_edges = elm.getBoundingClientRect();
            elm_top = elm_edges.top + elm_edges.height;
            tooltip_text = document.createTextNode(elm.getAttribute('data-tooltip'));
            tooltip.appendChild(tooltip_text);
            // Remove no-display + set the correct classname based on the position
            // of the elm.
            if (elm_edges.left > window.innerWidth - 100) {
                tooltip.className = 'tooltip-container tooltip-left';
            } else if ((elm_edges.left + (elm_edges.width / 2)) < 100) {
                tooltip.className = 'tooltip-container tooltip-right';
            } else {
                tooltip.className = 'tooltip-container tooltip-center';
            }
        },
        position: function(tooltip, elm) {
            // 10 = arrow height
            const viewport_edges = window.innerWidth - 100;
            const centered = (elm_edges.left + (elm_edges.width / 2)) - (tooltip.offsetWidth / 2);
            // Position tooltip on the left side of the elm if the elm touches
            // the viewports right edge and elm width is < 50px.
            if (elm_edges.left > viewport_edges && elm_edges.width < 50) {
                tooltip.style.left = (elm_edges.left - (tooltip.offsetWidth + elm_edges.width)) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            // Position tooltip on the left side of the elm if the elm touches
            // the viewports right edge and elm width is > 50px.
            } else if (elm_edges.left > viewport_edges && elm_edges.width > 50) {
                tooltip.style.left = (elm_edges.left - tooltip.offsetWidth - 20) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            // Position tooltip on the right side of the elm.
            } else if ((elm_edges.left + (elm_edges.width / 2)) < 100) {
                tooltip.className = 'tooltip-container tooltip-right';
                tooltip.style.left = (elm_edges.left + elm_edges.width + 20) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            // Position the tooltip above the element if there is not enough bottom space
            } else if ((elm_top + 10 + tooltip.offsetHeight) > window.innerHeight) {
                tooltip.className = 'tooltip-container tooltip-center-bottom';
                tooltip.style.left = centered + 'px';
                tooltip.style.top = elm_top - tooltip.offsetHeight - 35 + window.scrollY + 'px';
            } else {
                // Position the tooltip in the center of the elm.
                tooltip.style.left = centered + 'px';
                tooltip.style.top = elm_top + 10 + window.scrollY + 'px';
            }
        }
    };

    function showTooltipHover(evt) {
        const item = Object.create(Tooltip);
        const elm = evt.currentTarget;

        tooltip.setAttribute('aria-hidden', false);
        item.create(tooltip, elm);
        item.position(tooltip, elm);
    }

    function showTooltipKeyUp(evt) {
        const item = Object.create(Tooltip);
        const elm = evt.currentTarget;

        tooltip.setAttribute('aria-hidden', false);

        // Show tooltip on 'TAB'-key
        if (evt.keyCode == '9' ) {
            // First clean up:
            if (tooltip.firstChild) {
                tooltip.removeChild(tooltip.firstChild);
                tooltip.removeAttribute('style');
            }
            // Then set tooltip:
            item.create(tooltip, elm);
            item.position(tooltip, elm);
        }
    }

    function hideTooltipHover() {
        hideTooltip();
    }

    function hideTooltipKeyUp(evt) {
        // 27 = 'ESC'-key
        if (evt.keyCode == '27')
            hideTooltip();
    }

    function hideTooltipClick(evt) {
        if (!evt.target.hasAttribute('data-tooltip'))
            hideTooltip();
    }

    function hideTooltip() {
        tooltip.setAttribute('aria-hidden', true);
        tooltip.className = 'tooltip-container no-display';
        tooltip.textContent = '';
        tooltip.removeAttribute('style');
    }

    function onReady() {
        tooltip = document.documentElement.querySelector('.tooltip-container');
        const tooltip_elms = document.documentElement.querySelectorAll('[data-tooltip]');

        Array.prototype.forEach.call(tooltip_elms, function(elm) {
            elm.addEventListener('mouseover', showTooltipHover);
            elm.addEventListener('mouseout', hideTooltipHover);
            elm.addEventListener('keyup', showTooltipKeyUp);
            elm.addEventListener('keyup', hideTooltipKeyUp);
        });

        if (tooltip) {
            document.addEventListener('keyup', hideTooltipKeyUp);
            document.addEventListener('click', hideTooltipClick);
        }
    }

    document.addEventListener('DOMContentLoaded', onReady, false);
})();
