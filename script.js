const absensi = document.querySelectorAll(".absensi");

absensi.forEach((item, idx) => {
  item.addEventListener("click", function () {
    absensi.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});

// notification

// notif profil
const profil = document.querySelectorAll(".profil");
const cardprofil = document.querySelector(".card-profil");

profil.forEach((p) => {
  p.addEventListener("click", function () {
    cardprofil.classList.add("active");
  });
});

// Event listener hanya sekali, di luar forEach
document.addEventListener("click", function (e) {
  // cek jika klik di luar cardprofil dan bukan tombol profil
  if (
    !cardprofil.contains(e.target) &&
    !Array.from(profil).some((el) => el.contains(e.target))
  ) {
    cardprofil.classList.remove("active");
  }
});

// notif log out
const notif = document.querySelector(".notif");
const logout = document.querySelectorAll(".logout");
const cardnotif = document.querySelector(".card-notif");
const btnLogout = document.querySelector(".btn-alert:nth-child(1)");
const btnKembali = document.querySelector(".btn-alert:nth-child(2)");

logout.forEach((btn) => {
  btn.addEventListener("click", function () {
    notif.classList.add("active");
    cardnotif.classList.add("active");
  });
});

btnKembali.addEventListener("click", function () {
  notif.classList.remove("active");
  cardnotif.classList.remove("active");
});

// login page

// section
const section = document.querySelectorAll(".section");

absensi.forEach((sec, idx) => {
  sec.addEventListener("click", function () {
    section.forEach((s) => s.classList.remove("active"));
    section[idx].classList.add("active");
  });
});

// jam kerja
// tanggal default
const tanggal = document.querySelectorAll(".tanggal");

tanggal.forEach((date) => {
  date.value = new Date().toISOString().split("T")[0];
});
