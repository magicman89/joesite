(function () {
    const SCRIPT_ID = "fc-widget-script";
    const CONTAINER_ID = "fc-widget-container";

    function init() {
        const container = document.getElementById(CONTAINER_ID);
        if (!container) {
            console.warn("FutureCovered Widget: Container not found. Please add <div id='" + CONTAINER_ID + "'></div>");
            return;
        }

        // Check if iframe already exists
        if (container.querySelector("iframe")) return;

        // Get the script source to determine the base URL
        const script = document.getElementById(SCRIPT_ID) || document.currentScript;
        let baseUrl = "https://your-domain.com"; // Fallback

        if (script && script.src) {
            try {
                const url = new URL(script.src);
                baseUrl = url.origin;
            } catch {
                // use fallback
            }
        }

        const iframe = document.createElement("iframe");
        iframe.src = baseUrl + "/embed";
        iframe.style.width = "100%";
        iframe.style.height = "600px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "12px";
        iframe.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";

        container.appendChild(iframe);
    }

    // Run when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
