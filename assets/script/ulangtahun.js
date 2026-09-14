function tampilkanUcapan() {
  const pesan =
    "Selamat Ulang Tahun 🎉\nSemoga selalu sehat, bahagia, dan sukses terus ya!";
  const elemen = document.getElementById("birthdayMessage");
  elemen.textContent = pesan;
  elemen.style.animation = "fadeIn 2s ease forwards";
}
