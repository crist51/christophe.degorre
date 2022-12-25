
// ---------------  Scroll animations --------------- \\

const generalAnimatedElements = [
  ...document.querySelectorAll("p"),
];
console.log(generalAnimatedElements);

const animatedContents = [
  ...generalAnimatedElements,
]

const intersectionObserver = new IntersectionObserver(handleIntersect, { rootMargin: "-20%" })
// we listen to the event at 20% off

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      intersectionObserver.unobserve(entry.target)
      // stop listening to the event
      console.log("erzr");
    }
  })
}