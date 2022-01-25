const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navlink");
window.onscroll = () => {
  var current = "";
  var currentScrollPos = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.classList.contains(current)) {
      li.classList.add("current");
    }
  });

  if (currentScrollPos > 100) {
    document.getElementById('navbar').classList.add('scrolled');
    document.getElementById('scrollIcon').classList.add('hidden');
  } else if (currentScrollPos < 100) {
    document.getElementById('navbar').classList.remove('scrolled')
    document.getElementById('scrollIcon').classList.remove('hidden');
  }
  prevScrollpos = currentScrollPos;
};