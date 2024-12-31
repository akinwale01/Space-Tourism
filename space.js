var items= document.querySelectorAll(".selected")
for (var i = 0; i<items.length; i++){
    items[i].addEventListener("click", function(){
        items[0].classList.remove("selected")
        items[1].classList.remove("selected")
        items[2].classList.remove("selected");
        items[3].classList.remove("selected");

        this.classList.add("selected");
    })
}

var activate= document.querySelectorAll(".activate")
for (var i = 0; i<activate.length; i++){
        activate[i].addEventListener("click", function(){
        activate[0].classList.remove("selected")
        activate[1].classList.remove("selected")
        activate[2].classList.remove("selected");
        activate[3].classList.remove("selected");

        this.classList.add("activate");
    })
}


var item= document.querySelectorAll(".select")
for (var i = 0; i<item.length; i++){
    item[i].addEventListener("click", function(){
        item[0].classList.remove("select")
        item[1].classList.remove("select")
        item[2].classList.remove("select");
        item[3].classList.remove("select");

        this.classList.add("select");
    })
}

var select= document.querySelectorAll(".selection")
for (var i = 0; i<select.length; i++){
    select[i].addEventListener("click", function(){
        select[0].classList.remove("selection")
        select[1].classList.remove("selection")
        select[2].classList.remove("selection");
        select[3].classList.remove("selection");

        this.classList.add("selection");
    })
}


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const hr = document.querySelector('hr');
    const links = document.querySelectorAll('ul a');

    const handleClick = (event) => {
      event.preventDefault(); // Prevent page refresh

      const clickedHref = event.target.closest('a').getAttribute('href');

      if (clickedHref === 'index.html' || clickedHref === 'destination.html') {
        hr.style.width = '300px';
    } else {
        hr.style.width = '600px';
    }




      // After changing the <hr> width, navigate to the respective page
      setTimeout(() => {
        window.location.href = clickedHref;
      }, 500); // Wait for transition time before redirecting
    };

    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });
  });


var hamburgerMenu = document.querySelector(".hamburger-menu");
var closeButton =  document.querySelector(".close-button")
var menu = document.querySelector(".menu");

//To show the menu
var showMenu = () =>{
  menu.classList.add("visible");
  menu.style.transform = "translateX(0)";
  hamburgerMenu.style.display = "none";
  closeButton.style.display ="block";
};

const hideMenu = () => {
  menu.classList.remove('visible'); // Remove class to hide menu
  menu.style.transform = 'translateX(-100%)'; // Ensure the menu slides out if using transform CSS
  hamburgerMenu.style.display = 'block'; // Show hamburger button
  closeButton.style.display = 'none'; // Hide close button
};

// Function to check if the screen matches the desired size
const setupMenuForSmallScreen = () => {
  const isSmallScreen = window.matchMedia(
    '(max-width: 400px) and (max-height: 812px)'
  ).matches;

  if (isSmallScreen) {
    // Enable actions for smaller screens
    hamburgerMenu.style.display = 'block';
    menu.style.transform = 'translateX(-100%)'; // Hide menu initially
    menu.style.transition = 'transform 0.3s ease'; // Smooth slide effect

    // Add event listeners
    hamburgerMenu.addEventListener('click', showMenu);
    closeButton.addEventListener('click', hideMenu);
  } else {
    // Reset styles and actions for larger screens
    hamburgerMenu.style.display = 'none'; // Hide hamburger menu on larger screens
    closeButton.style.display = 'none'; // Ensure close button is hidden
    menu.style.transform = 'translateX(0)'; // Show menu by default
    hamburgerMenu.removeEventListener('click', showMenu);
    closeButton.removeEventListener('click', hideMenu);
  }
};

// Run setup on load
setupMenuForSmallScreen();

// Rerun setup whenever the window resizes
window.addEventListener('resize', setupMenuForSmallScreen);