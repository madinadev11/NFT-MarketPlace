function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateTime, 1000);
  
  
  const menuIcon = document.querySelector('.menu');
  const navLinks = document.querySelector('nav');
  
  menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });