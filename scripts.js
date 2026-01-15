const follower = document.getElementById('follow-image');

// track mouse movement
window.addEventListener('mousemove', (e) => {
    const x = e.clientX - follower.width / 2;
    const y = e.clientY - follower.height / 2;
    follower.style.transform = `translate(${x}px, ${y}px)`;
});

