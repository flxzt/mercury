// Elevator
window.addEventListener('scroll', e => {
    const threshold = 300;
    document.querySelector('.elevator-button').style.visibility = window.scrollY > threshold ? 'visible' : 'hidden';
    document.querySelector('.elevator-button').style.opacity = window.scrollY > threshold ? '1' : '0';
});

window.onload = function () {
    var elevator = new Elevator({
        element: document.querySelector('.elevator-button'),
        mainAudio: '/audio/elevator/music.mp3',
        endAudio: '/audio/elevator/ding.mp3'
    });
}
