function hamburgerClick() {
    let navbar = document.getElementById("navbar");
    let leftNavbar = document.getElementById("left-navbar");
    let navbarOptions = document.getElementById("navbar-option");
    
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        leftNavbar.className += " responsive";
        navbarOptions.className += " responsive";
    }  else {
        navbar.className =  "navbar";
        leftNavbar.className = "left-navbar";
        navbarOptions.className = "navbar-option";
    }

}