const text = document.querySelector("h1");
const img = document.querySelector("img");

window.addEventListener("mousemove", (details) => {
  img.style.transform = `translate(-50%,-50%)rotate(-25deg) translate(${
    details.pageX * 0.05
  }px,${details.pageY * 0.05}px)`;
  text.style.transform = `translate(-50%,-50%) translate(${
    1 - details.pageX * 0.05
  }px,${1 - details.pageY * 0.05}px)`;
});
