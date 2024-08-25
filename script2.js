document.addEventListener('DOMContentLoaded', () => {
    const doorSound = document.getElementById('door-sound');

    document.body.addEventListener('click', () => {
        if (doorSound.paused) {
            // Jouer le son de la porte
            doorSound.play();
            
            // Rediriger vers une autre page après la fin du son
            doorSound.onended = () => {
                window.location.href = 'autre-page.html'; // Remplacez par l'URL de la page vers laquelle vous voulez rediriger
            };
        }
    });
});
