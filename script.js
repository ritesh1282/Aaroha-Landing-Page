let element = document.body.querySelector(".slideshow");


const images = [
    'Assets/Slideshow/1.jpg',
    'Assets/Slideshow/2.jpg',
    'Assets/Slideshow/3.jpg',
    'Assets/Slideshow/4.jpg',
    'Assets/Slideshow/5.jpg',
    'Assets/Slideshow/6.jpg',
    'Assets/Slideshow/7.jpg',
    'Assets/Slideshow/8.jpg',
    'Assets/Slideshow/9.jpg'


];
let currentImageIndex = 0;

function changeBackgroundImage() {

    element.classList.remove('slide-in'); // Reset animation
    void element.offsetWidth; // Trigger reflow to restart the animation

    currentImageIndex = (currentImageIndex + 1) % images.length;
    element.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    element.classList.add('slide-in');
}

let box = document.body.querySelectorAll(".hide");

let button = document.body.querySelectorAll("#btn");

let flag = true;







