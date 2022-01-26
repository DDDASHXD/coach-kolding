const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navlink");
window.onscroll = () => {
  var current = "";
  var currentScrollPos = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.classList.contains(current)) {
      li.classList.add("current");
    }
  });

  if (currentScrollPos > 50) {
    document.getElementById('navbar').classList.add('scrolled');
    document.getElementById('scrollIcon').classList.add('hidden');
  } else if (currentScrollPos < 50) {
    document.getElementById('navbar').classList.remove('scrolled')
    document.getElementById('scrollIcon').classList.remove('hidden');
  }
  prevScrollpos = currentScrollPos;
};

const href = (x) => {
  document.location = x;
}