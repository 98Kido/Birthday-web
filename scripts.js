document.addEventListener('DOMContentLoaded', () => {
    // Display an alert message when the page loads
    alert('Happy Birthday, [Friend\'s Name]!');

    // Get the button and audio elements
    const playSongButton = document.getElementById('play-song');
    const birthdaySong = document.getElementById('birthday-song');

    // Add an event listener to the button to play the birthday song
    playSongButton.addEventListener('click', () => {
        birthdaySong.play().catch(error => {
            console.error('Error playing the birthday song:', error);
            alert('Unable to play the birthday song. Please check the console for more details.');
        });
    });
});