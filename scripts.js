const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`);
  placeForResults.append(document.createElement("br"));
});

let typed = new Typed(".auto-type", {
  strings: ["Software Engineer", "Web Developer", "Medical Professional"],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});
