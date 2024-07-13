
document.querySelector('.gift img').addEventListener('click', () => {
    // Play a birthday song (you can add your own song or use a library like Howler.js)
    const audio = new Audio('birthday-song.mp3');
    audio.play();
     // Animate the balloons 
    document.querySelectorAll('.balloons img').forEach((img) => {
        img.style.animationPlayState = 'running';
    });
});
