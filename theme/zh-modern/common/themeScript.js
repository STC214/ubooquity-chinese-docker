document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("theme-ready");

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
