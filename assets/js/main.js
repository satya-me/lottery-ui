const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});






// date




// slick slider

$('.slider_area').slick({
  dots: true,
  arrows: false,
   autoplay: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,

});


// navbar
const menubar = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu_list');
const navbar = document.querySelector('.navbar');
menubar.onclick = ()=>{
    menubar.classList.toggle("active");
	menuList.classList.toggle("active");

}

