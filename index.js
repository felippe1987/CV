document.getElementById("menuIcon").addEventListener("click", function () {
  const menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("active");
});

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

document.querySelectorAll(".menu-list a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    smoothScroll(target);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    const projectCard = item.querySelector(".project-card");

    item.addEventListener("click", function () {
      projectCard.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!item.contains(e.target)) {
        projectCard.classList.remove("active");
      }
    });
  });
});
