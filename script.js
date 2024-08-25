document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const content = document.getElementById('content');
    const body = document.body;
    const blurEffect = document.querySelector('.blur-effect');
    const forestSound = document.getElementById('forest-sound');
    const interactiveArea = document.querySelector('.interactive-area');
    const codeDialog = document.getElementById('code-dialog');
    const codeInput = document.getElementById('code-input');
    const submitCodeButton = document.getElementById('submit-code');
    const resultDialog = document.getElementById('result-dialog');
    const closeDialogButton = document.getElementById('close-dialog');

    let animationLaunched = false;

    document.body.addEventListener('click', () => {
        if (animationLaunched) return;

        animationLaunched = true;

        welcomeScreen.style.display = 'none';
        content.style.display = 'flex';
        body.style.backgroundImage = 'url(img.png)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        blurEffect.style.display = 'block';

        if (forestSound) {
            forestSound.play();
        }

        setTimeout(afficherMot, 2000);
    });

    interactiveArea.addEventListener('click', () => {
        codeDialog.style.display = 'block';
    });

    submitCodeButton.addEventListener('click', () => {
        if (codeInput.value === '57832941') {
            codeDialog.style.display = 'none';
            resultDialog.style.display = 'block';
        } else {
            alert('Code incorrect');
        }
    });

    closeDialogButton.addEventListener('click', () => {
        resultDialog.style.display = 'none';
    });

    function afficherMot() {
        const phrase = "Cinq, sept, huit, trois, deux, neuf, quatre, un";
        const mots = phrase.split(" ");
        const container = document.getElementById("phrase");
        let currentWordIndex = 0;

        function afficherMotRec() {
            container.textContent = ""; 

            const span = document.createElement("span");
            span.className = "word";
            span.textContent = mots[currentWordIndex];
            container.appendChild(span);

            setTimeout(() => {
                span.style.opacity = 1;
            }, 50);

            currentWordIndex++;
            if (currentWordIndex < mots.length) {
                setTimeout(afficherMotRec, 500);
            } else {
                // Ajouter un délai avant de faire disparaître le dernier mot
                setTimeout(() => {
                    span.classList.add('fade-out');
                }, 500);
            }
        }

        afficherMotRec();
    }
});
