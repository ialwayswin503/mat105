 const root = document.documentElement;

function changeColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random hex color
  root.style.setProperty('--dynamic-color', randomColor);
}

setInterval(changeColor, 1000); // Change color every 1 second
const follower = document.getElementById('follow-image');

// Track mouse movement and move the image to follow the cursor
window.addEventListener('mousemove', (e) => {
  const x = e.clientX - follower.width / 2;
  const y = e.clientY - follower.height / 2;
  follower.style.transform = `translate(${x}px, ${y}px)`;
});
