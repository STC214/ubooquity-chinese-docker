(() => {
  const root = document.documentElement;
  const storageKey = "ubooquity.zhModern.layoutMode";
  const modes = ["auto", "desktop", "tablet", "phone"];
  const labels = {
    auto: "自动",
    desktop: "桌面",
    tablet: "平板",
    phone: "手机",
  };

  const getViewportDevice = () => {
    const width = window.innerWidth || root.clientWidth || 1024;
    const coarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const screenMin = Math.min(window.screen.width || width, window.screen.height || width);

    if (coarsePointer && screenMin <= 820) {
      return "phone";
    }

    if (width < 680) {
      return "phone";
    }

    if (width < 1100) {
      return "tablet";
    }

    return "desktop";
  };

  const getStoredMode = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return modes.includes(value) ? value : "auto";
    } catch (error) {
      return "auto";
    }
  };

  const storeMode = (mode) => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch (error) {
      // Some embedded browsers disable storage; the current page can still switch.
    }
  };

  const applyLayout = (mode) => {
    const layoutMode = modes.includes(mode) ? mode : "auto";
    const detectedDevice = getViewportDevice();
    const device = detectedDevice === "phone" || layoutMode === "auto" ? detectedDevice : layoutMode;

    root.dataset.layoutMode = layoutMode;
    root.dataset.device = device;

    document.querySelectorAll("[data-layout-mode-button]").forEach((button) => {
      const active = button.dataset.layoutModeButton === layoutMode;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  const buildLayoutSwitcher = () => {
    if (document.querySelector(".device-switcher")) {
      return;
    }

    const switcher = document.createElement("nav");
    switcher.className = "device-switcher";
    switcher.setAttribute("aria-label", "布局切换");

    modes.forEach((mode) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = labels[mode];
      button.dataset.layoutModeButton = mode;
      button.addEventListener("click", () => {
        storeMode(mode);
        applyLayout(mode);
      });
      switcher.appendChild(button);
    });

    document.body.appendChild(switcher);
    document.body.classList.add("has-device-switcher");
  };

  document.addEventListener("DOMContentLoaded", () => {
    root.classList.add("theme-ready");
    applyLayout(getStoredMode());
    buildLayoutSwitcher();
    applyLayout(getStoredMode());

    window.addEventListener("resize", () => {
      if (root.dataset.layoutMode === "auto") {
        applyLayout("auto");
      }
    });

    document.querySelectorAll("[data-card-link]").forEach((card) => {
      card.addEventListener("click", (event) => {
        const anchor = card.querySelector("a[data-card-primary]");
        if (!anchor || event.target.closest("a, button, input, label")) {
          return;
        }
        anchor.click();
      });
    });
  });
})();
