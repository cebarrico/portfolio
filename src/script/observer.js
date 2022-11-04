const about = document.querySelector(".observer-about");
const listKnow = document.querySelectorAll(".opacity");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("appear", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(about);
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("appear", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

listKnow.forEach((list) => {
  observer2.observe(list);
});
