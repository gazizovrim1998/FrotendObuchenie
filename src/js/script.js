const buttons = document.querySelectorAll(".country");
const gallers = document.querySelectorAll(
  ".reproduce__francia, .reproduce__germany, .reproduce__avstria",
);
const gallerFrancia = document.querySelector(".reproduce__francia");
const gallerGermania = document.querySelector(".reproduce__germany");
const gallerAvstria = document.querySelector(".reproduce__avstria");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isAlreadyActive = button.classList.contains("active");
    buttons.forEach((btn) => btn.classList.remove("active"));
    if (!isAlreadyActive) {
      button.classList.add("active");
      galleryRemove();
      const isOpenFrancia = button.classList.contains(
        "reproduce__nav__francia",
      );
      const isOpenGermany = button.classList.contains(
        "reproduce__nav__germany",
      );
      const isOpenAvstria = button.classList.contains(
        "reproduce__nav__avstria",
      );
      if (isOpenFrancia) {
        gallerFrancia.classList.remove("display-none");
      }
      if (isOpenGermany) {
        gallerGermania.classList.remove("display-none");
      }
      if (isOpenAvstria) {
        gallerAvstria.classList.remove("display-none");
      }
    }
  });
});

const galleryRemove = () => {
  gallers.forEach((gallery) => {
    gallery.classList.add("display-none");
  });
};
