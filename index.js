function toggleNavbar() {
  var mobileNav = document.getElementById("mobile-nav");
  var icon = document.getElementById("icon");
  if (mobileNav.classList.contains("responsive_nav")) {
    mobileNav.classList.remove("responsive_nav");
    icon.innerHTML = '<i class="fa fa-bars"></i>';
  } else {
    mobileNav.classList.add("responsive_nav");
    icon.innerHTML = '<i class="fa fa-times"></i>';
  }
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Get the current year
var currentYear = new Date().getFullYear();

// Set the copyright text
document.getElementById("copyright").textContent =
  "Muskaan Shaikh Copyright © " + currentYear + " All Rights Reserved.";

// Function to toggle the mobile nav
// function toggleNavbar() {
//   var mobileNav = document.getElementById("mobile-nav");
//   var icon = document.getElementById("icon");

//   if (mobileNav.classList.contains("responsive_nav")) {
//     mobileNav.classList.remove("responsive_nav");
//     icon.innerHTML = '<i class="fa fa-bars"></i>';
//   } else {
//     mobileNav.classList.add("responsive_nav");
//     icon.innerHTML = '<i class="fa fa-times"></i>';
//   }
// }

function toggleNavbar() {
  var mobileNav = document.getElementById("mobile-nav");
  var iconsContainer = document.getElementById("icons-container");

  if (mobileNav.classList.contains("responsive_nav")) {
    mobileNav.classList.remove("responsive_nav");
  } else {
    mobileNav.classList.add("responsive_nav");
  }

  // Toggle the visibility of the icons container
  if (iconsContainer.style.display === "none") {
    iconsContainer.style.display = "block";
  } else {
    iconsContainer.style.display = "none";
  }
}




// Function to close the mobile nav when a link is clicked
function closeMobileNav() {
  var mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.classList.contains("responsive_nav")) {
    mobileNav.classList.remove("responsive_nav");
    document.getElementById("icon").innerHTML = '<i class="fa fa-bars"></i>';
  }
}

// Add click event listeners to close the mobile nav when links are clicked
var links = document.querySelectorAll("#mobile-nav a");
links.forEach(function (link) {
  link.addEventListener("click", closeMobileNav);
});

// Function to toggle the mobile nav
function toggleNavbar() {
  var mobileNav = document.getElementById("mobile-nav");
  var icon = document.getElementById("icon");

  if (mobileNav.classList.contains("responsive_nav")) {
    mobileNav.classList.remove("responsive_nav");
    icon.innerHTML = '<i class="fa fa-bars"></i>';
  } else {
    mobileNav.classList.add("responsive_nav");
    icon.innerHTML = '<i class="fa fa-times"></i>';
  }
}

// Function to close the mobile nav when a link is clicked
function closeMobileNav() {
  var mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.remove("responsive_nav");
  document.getElementById("icon").innerHTML = '<i class="fa fa-bars"></i>';
}

// Add click event listeners to close the mobile nav when links are clicked
var links = document.querySelectorAll("#mobile-nav a");
links.forEach(function (link) {
  link.addEventListener("click", closeMobileNav);
});

// Add an event listener to show the button when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.getElementById("icon");
  icon.innerHTML = '<i class="fa fa-bars"></i>';
});
