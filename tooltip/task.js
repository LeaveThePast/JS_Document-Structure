const tooltipTriggers = document.querySelectorAll(".has-tooltip");

tooltipTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); // Предотвращаем распространение события

        const tooltipText = trigger.getAttribute("title");

        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = tooltipText;

        const rect = trigger.getBoundingClientRect();
        tooltip.style.top = rect.bottom + "px";
        tooltip.style.left = rect.left + "px";

        document.body.appendChild(tooltip);

        tooltip.classList.add("tooltip_active");

        document.body.addEventListener("click", function hideTooltip(event) {
            event.stopPropagation(); // Предотвращаем распространение события
            tooltip.classList.remove("tooltip_active");
            tooltip.remove();
            document.body.removeEventListener("click", hideTooltip);
        });
    });
});