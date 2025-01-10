// Tentukan tanggal tujuan
const tujuan = new Date("Jan 11, 2025 00:00:00").getTime();

// Fungsi menghitung mundur
const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime(); // Waktu sekarang
    const selisih = tujuan - sekarang; // Selisih waktu
  
    // Hitung hari, jam, menit, detik
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  
    // Ambil elemen teks dari HTML
    const teks = document.getElementById("teks");

  // Perbarui teks di elemen HTML
  teks.innerHTML =
    "1st anniversary dalam: " +
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik";

  // Jika waktu habis
  if (selisih < 0) {
    clearInterval(hitungMundur); // Hentikan interval

    // Tampilkan pop-up dengan tautan
    alert("Sekarang udah abis waktunya sayang.... kamu tinggal klik OK dulu sayang. Selamat menikmati love sekebon<3");
    window.location.href =
      "https://drive.google.com/file/d/1cUCynKJqJTm57-meW7Oz4fb85Ove9KDF/view?usp=sharing";

    // Perbarui teks
    teks.innerHTML = "Waktu habis";
  }
}, 1000);
