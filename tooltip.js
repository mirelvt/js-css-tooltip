(function() {
    "use strict";

    function tooltipComponent(container) {
        var elm, tooltip_text, elm_edges,
            tooltip = container.querySelector('.tooltip-container'),
            tooltip_elms = container.querySelectorAll('[data-toggle]');

        for (var i = 0; i < tooltip_elms.length; i++) {
            tooltip_elms[i].addEventListener('mouseover', showTooltip, false);
            tooltip_elms[i].addEventListener('mouseout', hideTooltip, false);
        };

        function showTooltip(evt) {
            elm = evt.target;
            elm_edges = elm.getBoundingClientRect(); // relative to the viewport
            tooltip_text = document.createTextNode(elm.getAttribute('data-title'));
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
            posTooltip(elm, tooltip);
        }

        // Reset tooltip to hidden state
        function hideTooltip(evt) {
            elm = evt.target;
            tooltip.className = 'tooltip-container no-display';
            tooltip.removeChild(tooltip.firstChild);
            tooltip.removeAttribute('style');
        }

        function posTooltip(elm, tooltip) {
            var elm_top = elm.offsetTop + elm_edges.height + 10; // 10 = arrow height

            // position tooltip on the left side of the elm.
            // 220 = the max width + arrow width of the tooltip.
            if (elm_edges.left > (window.innerWidth - 100)) {
                tooltip.style.left = (elm_edges.left - 220) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            }
            else if ((elm_edges.left + (elm_edges.width / 2)) < 100) {
                // position tooltip on the right side of the elm.
                tooltip.style.left = (elm_edges.left + elm_edges.width + 20) + 'px';
                tooltip.style.top = elm.offsetTop + 'px';
            } else {
                // Position the toolbox in the center of the elm.
                var centered = (elm_edges.left + (elm_edges.width / 2)) - (tooltip.offsetWidth / 2);
                tooltip.style.left = centered + 'px';
                tooltip.style.top = elm_top + 'px';
            }
        }
    }

    function onReady() {
        tooltipComponent(document.querySelector('body'));
    }

    document.addEventListener('DOMContentLoaded', onReady, false);
})();