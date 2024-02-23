const trail = document.querySelector('.trail');
const car = document.querySelector('.car');
const car2 = document.querySelector('.car2'); // Added second car
const wheel1 = document.querySelector('.wheel1 img');
const wheel2 = document.querySelector('.wheel2 img');
const wheel3 = document.querySelector('.wheel3 img'); // Added third wheel
const wheel4 = document.querySelector('.wheel4 img'); // Added fourth wheel
const playButton = document.getElementById('playButton');
const bgMusic = document.getElementById('bgMusic');

let isAnimating = false;

// starts animations
function startAnimations() {
    trail.style.animationPlayState = 'running';
    car.style.animationPlayState = 'running';
    car2.style.animationPlayState = 'running'; // Added second car animation
    wheel1.style.animationPlayState = 'running';
    wheel2.style.animationPlayState = 'running';
    wheel3.style.animationPlayState = 'running'; // Added third wheel animation
    wheel4.style.animationPlayState = 'running'; // Added fourth wheel animation
    isAnimating = true;
    bgMusic.play();
}

// stops animations
function stopAnimations() {
    trail.style.animationPlayState = 'paused';
    car.style.animationPlayState = 'paused';
    car2.style.animationPlayState = 'paused'; // Added second car animation
    wheel1.style.animationPlayState = 'paused';
    wheel2.style.animationPlayState = 'paused';
    wheel3.style.animationPlayState = 'paused'; // Added third wheel animation
    wheel4.style.animationPlayState = 'paused'; // Added fourth wheel animation
    isAnimating = false;
    bgMusic.pause();
}

// move animations and music when the play button is clicked
playButton.addEventListener('click', () => {
    if (isAnimating) {
        stopAnimations();
    } else {
        startAnimations();
    }
});
