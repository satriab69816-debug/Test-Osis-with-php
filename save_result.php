<?php
require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['success' => false, 'message' => 'Metode tidak diizinkan.'], 405);
}

$data = json_input();

$nama  = trim((string)($data['name'] ?? ''));
$kelas = trim((string)($data['kelas'] ?? ''));
$absen = (int)($data['absen'] ?? 0);
$kode  = trim((string)($data['kode'] ?? ''));
$scores = $data['scores'] ?? null;
$hasilKode = trim((string)($data['result'] ?? ''));
$hasilNama = trim((string)($data['resultLabel'] ?? ''));
$skorTertinggi = (int)($data['topScore'] ?? 0);

if ($nama === '' || $kelas === '' || $kode === '' || $hasilKode === '' || !is_array($scores)) {
    json_out(['success' => false, 'message' => 'Data tidak lengkap.'], 400);
}

if (strtoupper($kode) !== strtoupper(PARTICIPANT_CODE)) {
    json_out(['success' => false, 'message' => 'Kode peserta tidak valid.'], 403);
}

$scoresJson = json_encode($scores);

$stmt = $mysqli->prepare(
    "INSERT INTO osis_participants (nama, kelas, absen, kode, scores, hasil_kode, hasil_nama, skor_tertinggi)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);
if (!$stmt) {
    json_out(['success' => false, 'message' => 'Query gagal disiapkan: ' . $mysqli->error], 500);
}
// urutan tipe: nama(s) kelas(s) absen(i) kode(s) scores(s) hasil_kode(s) hasil_nama(s) skor_tertinggi(i)
$stmt->bind_param(
    'ssissssi',
    $nama, $kelas, $absen, $kode, $scoresJson, $hasilKode, $hasilNama, $skorTertinggi
);

if (!$stmt->execute()) {
    json_out(['success' => false, 'message' => 'Gagal menyimpan data: ' . $stmt->error], 500);
}

json_out(['success' => true, 'id' => $stmt->insert_id]);
