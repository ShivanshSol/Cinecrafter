// Loader

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    if (loader) {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 500); // optional
    }
  });

