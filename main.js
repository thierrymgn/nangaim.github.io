const ratio = 0.3
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible")
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r)
})
