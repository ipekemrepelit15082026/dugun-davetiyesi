// Çiçek animasyonu
const flowerContainer = document.getElementById("flowers");
const flowers = ["🌸", "🌺", "🌼", "💮"];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (7 + Math.random() * 5) + "s";
  flower.style.opacity = Math.random();

  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 400);

const openBtn = document.getElementById("openInvitation");
const envelope = document.querySelector(".envelope");
const intro = document.getElementById("intro");
const mainSite = document.getElementById("main-site");
const music = document.getElementById("bg-music");

openBtn.addEventListener("click", () => {
  // Zarf aç ve kart çıkar
  envelope.classList.add("open");

  // Müzik başlat
  music.play().catch(() => {});

  // Kart çıkma animasyonu tamamlanınca siteyi göster
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transition = "opacity 3s ease";
    mainSite.style.display = "block";
  }, 2000);

  // Intro kaldır
  setTimeout(() => {
    intro.style.display = "none";
  }, 2500);
});