const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    secondHand.classList.add('loaded');
    minHand.classList.add('loaded');
    hourHand.classList.add('loaded');

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees === 0 || secondsDegrees === 360) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    const mins = now.getMinutes();
    const minsDegrees = (mins * 6) + 90;
    if (minsDegrees === 0 || minsDegrees === 360) {
        minHand.style.transition = 'none';
    } else {
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
    }

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90;
    if (hoursDegrees === 0 || minsDegrees === 360) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
}
setInterval(setDate, 1000)