// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 500);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('search-bar');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  const tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
  const mobileMediaQuery = window.matchMedia('(max-width: 480px)');

  // Dropdown logic for menu
  function handleDropdown(e) {
    if (e.matches) {
      menuToggle && menuToggle.addEventListener('click', toggleDropdown);
    } else {
      menuToggle && menuToggle.removeEventListener('click', toggleDropdown);
    }
  }

  function toggleDropdown() {
    if (!menu || !menuToggle) return;
    menuToggle.style.transform = menuToggle.style.transform === 'rotate(-180deg)' ? 'none' : 'rotate(-180deg)';
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  // Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  if (
    menu &&
    menuToggle &&
    menu.style.display === 'flex' &&
    !menu.contains(event.target) &&
    event.target !== menuToggle
  ) {
    menu.style.display = 'none';
    menuToggle.style.transform = 'none';
  }
});

// Prevent menu from closing when clicking the toggle
if (menuToggle) {
  menuToggle.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleDropdown();
  });
}

  // Initial check and listeners for both queries
  handleDropdown(tabletMediaQuery);
  handleDropdown(mobileMediaQuery);

  // Listen for screen size changes
  if (tabletMediaQuery.addEventListener) {
    tabletMediaQuery.addEventListener('change', handleDropdown);
  } else {
    tabletMediaQuery.addListener(handleDropdown);
  }
  if (mobileMediaQuery.addEventListener) {
    mobileMediaQuery.addEventListener('change', handleDropdown);
  } else {
    mobileMediaQuery.addListener(handleDropdown);
  }

  // Search bar expand for mobile
  if (searchBtn && searchBar && searchInput) {
    searchBtn.addEventListener('click', () => {
      if (mobileMediaQuery.matches) {
        searchBar.style.position = 'absolute';
        searchBar.style.top = '0';
        searchBar.style.zIndex = '99999';
        searchBar.style.height = '100vh';
        searchBar.style.width = '100vw';
        searchBar.style.backgroundColor = 'black';
        searchInput.style.width = '280px';
      } else {
        searchBar.style = '';
        searchInput.style = '';
      }
    });
  }
});