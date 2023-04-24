//navbar Header
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//Banner Slider
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
  4;
}, 5000);

//wishlist button
function addWishlist() {
  console.log("Adding item wishlist");
  document.getElementById("wishlisted-now").style.display = "block";
  document.getElementById("color-now").style.color = "red";
}

function removeWishlist() {
  console.log("Remove item wishlist");
  document.getElementById("wishlisted-now").style.display = "none";
  document.getElementById("color-now").style.color = "#333";
}

var wishlistButton = document.getElementById("wishlist-now");
var wishlist = document.getElementsByClassName("product-wishlist");

wishlistButton.addEventListener("click", function () {
  wishlist.classList.toggle("active");
});

//Empty wrapper class

function addWrapper() {
  console.log("Adding Empty Wrapper");
  document.getElementsByClassName("empty-order-wrapper").style.display = "none";
  document.getElementsByClassName("not-empty-wrapper").style.display = "block";
}

function removeWrapper() {
  console.log("Removed Empty Wrapper");
  document.getElementsByClassName("empty-order-wrapper").style.display =
    "block";
  document.getElementsByClassName("not-empty-wrapper").style.display = "none";
}

var emptyWrapper = document.getElementById("empty-wrapper");
var notemptyWrapper = document.getElementById("not-empty-wrapper");

//srolling products
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
