# Sistem Tes Minat & Bakat OSIS — SMKN 2 Kuta Selatan

Versi ini sudah terhubung ke **PHP + MySQL** (siap dipakai di hosting InfinityFree), bukan lagi `localStorage`.

## Isi folder
```
index.html          halaman utama (peserta, panitia, tes, hasil, dashboard)
style.css           desain
app.js              logika quiz + panggilan ke API PHP
api/
  config.php        kredensial database & helper
  save_result.php   simpan hasil tes peserta -> MySQL
  admin_login.php   login panitia (session PHP)
  admin_logout.php  logout panitia
  get_results.php   ambil semua data peserta (khusus panitia yang login)
  clear_results.php hapus semua data (khusus panitia yang login)
db/
  schema.sql        query pembuatan tabel MySQL
```

## Langkah setup di InfinityFree

1. **Database sudah tersedia**
   Kamu sudah punya database khusus untuk aplikasi ini: `if0_42738443_testosisdwisaka`.
   File `api/config.php` sudah diset memakai database ini — tidak perlu ubah apa-apa
   di langkah ini.

2. **Buat tabel**
   Buka phpMyAdmin dari vPanel → pilih database `if0_42738443_testosisdwisaka` → tab **SQL** →
   tempel isi `db/schema.sql` → jalankan (Go).

3. **Kredensial**
   `api/config.php` sudah terisi otomatis:
   - Host: `sql208.infinityfree.com`
   - Port: `3306`
   - User: `if0_42738443`
   - Password: `iBR6nm7mCY`
   - Database: `if0_42738443_testosisdwisaka`

   Login dashboard panitia:
   - Username: `panitiaosis`
   - Password: `osis2026new`

   Kode unik peserta yang wajib dimasukkan untuk bisa mengikuti tes:
   - `OSIS2026-2027`

   Semua nilai ini bisa diganti di `api/config.php` (konstanta `ADMIN_USERNAME`,
   `ADMIN_PASSWORD`, `PARTICIPANT_CODE`).

4. **Upload semua file**
   Upload seluruh isi folder ini (termasuk folder `api/` dan `db/`) ke `htdocs/`
   di File Manager / FTP InfinityFree. Susunan folder harus tetap sama seperti
   di atas (jangan pindahkan `api/` ke tempat lain, karena `app.js` memanggil
   `api/nama-file.php` secara relatif).

5. **Coba akses**
   Buka `https://domainkamu.com/` (atau subfolder tempat kamu upload).
   - Login peserta → isi data → kerjakan soal → hasil otomatis tersimpan ke MySQL.
   - Login panitia (`panitia` / `osis2026`) → dashboard menampilkan data langsung
     dari database, bisa dicari, di-export CSV, atau dihapus semua.

## Keamanan & catatan penting

- **Ganti password admin secara berkala.** Buka `api/config.php` dan ubah nilai
  `ADMIN_USERNAME` / `ADMIN_PASSWORD` sesuai kebutuhan (saat ini sudah diset ke
  `panitiaosis` / `osis2026new`, bukan lagi nilai demo lama).
- Form login panitia di halaman web **tidak lagi auto-isi** username/password,
  jadi harus diketik manual setiap login.
- Peserta wajib memasukkan **kode unik `OSIS2026-2027`** (bisa diganti di
  konstanta `PARTICIPANT_CODE` pada `api/config.php`) sebelum bisa memulai
  tes. Kode ini divalidasi baik di sisi browser maupun di server
  (`save_result.php`), jadi tidak bisa dilewati.
- **Jangan publikasikan `api/config.php`** ke repo publik (GitHub, dsb) karena
  berisi password database. Kalau memakai Git, tambahkan file ini ke
  `.gitignore` atau simpan kredensial di file terpisah yang tidak di-commit.
- Login panitia memakai PHP session (cookie), jadi harus diakses lewat domain
  HTTP/HTTPS sungguhan (bukan dibuka langsung dari `file://` di komputer).
- InfinityFree kadang membatasi koneksi database dari luar server hosting
  mereka — normalnya ini tidak masalah karena PHP-nya juga jalan di server
  yang sama.

## Soal & penilaian

- Total **49 soal** pilihan ganda, mencakup 7 Sekbid: Kerohanian & Ketakwaan,
  Kebangsaan, Organisasi & Pendidikan, Kewirausahaan, Kesehatan & Olahraga,
  Seni Sastra & Budaya, serta Dokumentasi & Publikasi.
- Soal sudah disusun ulang agar tiap Sekbid mendapat porsi opsi jawaban yang
  seimbang (sekitar 27–28 kemunculan per Sekbid), sehingga hasil rekomendasi
  tidak bias ke satu bidang tertentu.
- Skor akhir = jumlah opsi jawaban yang dipilih peserta untuk tiap Sekbid;
  Sekbid dengan skor tertinggi menjadi rekomendasi utama.
