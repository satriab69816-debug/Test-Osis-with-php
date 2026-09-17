<?php
/**
 * Konfigurasi koneksi database MySQL (InfinityFree).
 *
 * PENTING:
 * - Ganti $DB_NAME dengan nama database KHUSUS untuk aplikasi OSIS ini
 *   (buat database baru di vPanel InfinityFree > MySQL Databases), supaya
 *   tabel tidak tercampur dengan project lain.
 * - Kalau terpaksa memakai database yang sudah ada (if0_42738443_bayu_portfolio),
 *   itu juga tetap aman karena semua tabel di file ini diberi prefix "osis_".
 * - Jangan upload file ini ke repo publik (GitHub dsb) karena berisi password DB.
 */

$DB_HOST = ';
$DB_PORT = ;
$DB_NAME = ';
$DB_USER = '';
$DB_PASS = '';

// Username & password login dashboard panitia (boleh diganti)
define('ADMIN_USERNAME', '');
define('ADMIN_PASSWORD', '');

// Kode unik yang wajib dimasukkan peserta agar bisa mengikuti tes
define('PARTICIPANT_CODE', '');

mysqli_report(MYSQLI_REPORT_OFF);
$mysqli = @new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME, $DB_PORT);

if ($mysqli->connect_errno) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => false,
        'message' => 'Koneksi database gagal: ' . $mysqli->connect_error
    ]);
    exit;
}
$mysqli->set_charset('utf8mb4');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/** Ambil body JSON dari request menjadi array asosiatif. */
function json_input(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

/** Kirim response JSON lalu hentikan eksekusi. */
function json_out($payload, int $code = 200): void {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

/** Wajib sudah login sebagai admin, kalau tidak hentikan dengan 401. */
function require_admin(): void {
    if (empty($_SESSION['osis_admin'])) {
        json_out(['success' => false, 'message' => 'Belum login sebagai panitia.'], 401);
    }
}
