// Ambil elemen
const toggle = document.getElementById ('menu-toggle');
const nav = document.querySelector('nav');

// Tambahkan event klik
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  // memunculkan loading
   setTimeout(() => {
    loader.style.display = "none";
  }, 5000); // 5000ms = 5 detik
});
document.addEventListener("DOMContentLoaded", function () {
  const exploreButton = document.querySelector(".explore");

  if (exploreButton) {
    exploreButton.addEventListener("click", function () {
      // Tambahkan class aktif (opsional)
      exploreButton.classList.add("active");

      // Arahkan ke halaman curhatan.html
      window.location.href = "curhatan.html";
    });
  }
});

