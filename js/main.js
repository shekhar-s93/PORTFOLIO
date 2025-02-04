document.addEventListener("DOMContentLoaded", function () {
    const projectMenu = document.querySelector(".project_menu");
    const dropdown = projectMenu.querySelector(".dropdown");
    const dropdownIcon = projectMenu.querySelector(".dropdown-icon");
  
    // Add click event listener to toggle the dropdown
    projectMenu.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
  
      // Toggle the dropdown menu visibility
      projectMenu.classList.toggle("active");
  
      // Update the dropdown icon
      if (projectMenu.classList.contains("active")) {
        dropdownIcon.innerHTML = "&#9650;"; // Up arrow
      } else {
        dropdownIcon.innerHTML = "&#9660;"; // Down arrow
      }
    });
  
    // Close dropdown when clicking outside of it
    document.addEventListener("click", function (e) {
      if (!projectMenu.contains(e.target)) {
        projectMenu.classList.remove("active");
        dropdownIcon.innerHTML = "&#9660;";
      }
    });
  });
  