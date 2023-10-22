const tooltipTriggers = document.querySelectorAll(".has-tooltip");

tooltipTriggers.forEach((trigger) => {
    let tooltip = null;

    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (tooltip && tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
            tooltip = null;
            return;
        }

        const tooltipText = trigger.getAttribute("title");

        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = tooltipText;

        const rect = trigger.getBoundingClientRect();
        tooltip.style.top = rect.bottom + "px";
        tooltip.style.left = rect.left + "px";

        document.body.appendChild(tooltip);
        tooltip.classList.add("tooltip_active");

        function hideTooltip(event) {
            event.stopPropagation();
            if (tooltip && tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
                tooltip = null;
            }
            document.body.removeEventListener("click", hideTooltip);
        }

        document.body.addEventListener("click", hideTooltip);
    });
});
