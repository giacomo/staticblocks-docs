(function () {
  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  if (button && menu) {
    button.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  }
})();