const images = [
    "Background/hero.jpg",
    "Background/moto.jpg",
    "Background/sity.jpg"
];

let index = 0;
const slider = document.getElementById("slider");

// первая картинка ставится по индексу
slider.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
    index = (index + 1) % images.length;  
    slider.style.backgroundImage = `url(${images[index]})`;
}, 3000);