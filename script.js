document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');
    const heartsBackground = document.getElementById('heartsBackground');
    
    // Create floating hearts background
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
        `;
        heart.className = `floating-heart float-${i % 3 + 1}`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsBackground.appendChild(heart);
    }

    let isOpen = false;

    cardContainer.addEventListener('click', () => {
        if (!isOpen) {
            isOpen = true;
            cardContainer.classList.add('opened');
            envelope.classList.add('opened');
            
            // Show message after envelope animation
            setTimeout(() => {
                message.classList.add('visible');
            }, 1000);
        }
    });
});