const absensi = document.querySelectorAll(".absensi");

absensi.forEach((item) => {
  item.addEventListener("click", function () {
    absensi.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// notification
const notif = document.querySelector(".notif");
const logout = document.getElementById("logout");
const cardnotif = document.querySelector(".card-notif");
const btnLogout = document.querySelector(".btn-alert:nth-child(1)");
const btnKembali = document.querySelector(".btn-alert:nth-child(2)");

logout.addEventListener("click", function () {
  notif.classList.add("active");
  cardnotif.classList.add("active");
  btnKembali.addEventListener("click", function () {
    notif.classList.remove("active");
    cardnotif.classList.remove("active");
  });
});

// login page
