const buttons = document.querySelectorAll('.country');
const gallers = document.querySelectorAll('.gallery');
const gallerFrancia = document.querySelector('.gallery.francia');
const gallerGermania = document.querySelector('.gallery.germany');
const gallerAvstria = document.querySelector('.gallery.avstria');


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const isAlreadyActive = button.classList.contains('active');
    buttons.forEach((btn) => btn.classList.remove('active'));
    if (!isAlreadyActive) {
      button.classList.add('active');
      galleryRemove()
      const isOpenFrancia = button.classList.contains('francia')
      const isOpenGermany = button.classList.contains('germany')
      const isOpenAvstria = button.classList.contains('avstria')
      if (isOpenFrancia) {
        gallerFrancia.classList.remove('display-none')
      }
      if (isOpenGermany) {
        gallerGermania.classList.remove('display-none')
      }
      if (isOpenAvstria) {
        gallerAvstria.classList.remove('display-none')
      }
    }
  });
});

const galleryRemove = () => {
gallers.forEach((gallery) => {
    gallery.classList.add('display-none')})}




