(function() {
  let toggleButton = document.querySelector(".nav-toggle");
  let navItems = document.querySelector(".nav-items");

  toggleButton.addEventListener("click", () => {
    navItems.classList.toggle("collapsed");
    toggleButton.classList.toggle("closed");
  });
})();
