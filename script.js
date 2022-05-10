console.log("This Jobtestq website");

const menuIcon = document.querySelector(".menu-icon");
const SideBar = document.querySelector(".side-bar-contents");
const span = document.querySelectorAll(".sidespan");
const logo = document.querySelector(".logo");
const logosvg = document.querySelector(".logo-svg");
const hr = document.querySelector(".hr-visible");
const sidebar = document.querySelector(".side-bar");
const sear = document.querySelector(".search");
const menumobile = document.querySelector(".menu-icon-mobile");
const profile = document.querySelector(".profile-2");
const maincontent = document.querySelector(".main-content");
const maincontentclose = document.querySelector(".main-content-close");
const mobilenav = document.querySelector(".mobile-nav");

menuIcon.onclick = function () {
  SideBar.classList.toggle("side-bar-contents-active");

  span.forEach((sidespan) => {
    sidespan.classList.toggle("side-bar-contents-span-active");
  });

  // logo.classList.toggle("logo-active")

  if (SideBar.classList.contains("side-bar-contents-active")) {
    logosvg.style.visibility = "hidden";
    logo.innerHTML = `<img src="assets/logo.svg">`;
    hr.classList.add("hr-active");
    sidebar.classList.add("side-bar-active");
    menuIcon.classList.add("menu-icon-active");
    sear.classList.add("menu-icon-search-active");
  } else {
    logosvg.style.visibility = "visible";
    logo.innerHTML = `<img src="assets/logo1.svg">`;
    hr.classList.remove("hr-active");
    sidebar.classList.remove("side-bar-active");
    menuIcon.classList.remove("menu-icon-active");
    sear.classList.remove("menu-icon-search-active");
  }

  console.log("This is working");
  console.log(menuIcon.onclick);
};

menumobile.onclick = function () {
  if (window.matchMedia("(max-width: 481px)").matches) {
    sidebar.style.display = "block";
    sidebar.classList.add("side-bar-mobile-active");
    maincontent.classList.add("main-content-close");
    maincontent.style.display = "none";
    mobilenav.style.display = "none";
    maincontentclose.style.display = "block";
  } else {
    sidebar.style.display = "none";
    sidebar.classList.remove("side-bar-mobile-active");
  }

  console.log("This is working");
};

maincontentclose.onclick = function () {
  sidebar.style.display = "none";
  maincontent.style.display = "block";
  mobilenav.style.display = "block";
  maincontentclose.style.display = "none";
  maincontent.classList.remove("main-content-close");
};

// function openCloseNav() {
//     console.log("openCloseNav");
//     // console.log(document.getElementById("side-bar").style.width)
//     if (document.getElementsByClassName("side-bar").style.width = "80px") {
//         document.getElementsByClassName("side-bar").style.width = "250px";
//     } else {
//        document.getElementsByClassName("side-bar").style.width = '0px'
//     }
// }

// let menuIcon = document.querySelector(".icon");
// let sideBar = document.querySelector(".side-bar-contents");
// let span = document.getElementsByTagName("span");
// let main = document.querySelector("main");

// menuIcon.onclick = function () {
//   if (menuIcon.onclick == 1) {
//     sideBar.style.width = "30px";
//     span.style.display = "none";
//   } else menuIcon.onclick == 1;
//   {
//     sideBar.style.width = "20%";
//   }
//   console.log("menuIcon");
//   console.log(menuIcon.onclick);
// };
