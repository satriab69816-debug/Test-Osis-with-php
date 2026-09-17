<?php
/**
 * File diagnostik. Buka langsung di browser:
 *   https://domainkamu.com/api/test.php
 *
 * Kalau muncul JSON berisi "php_ok": true dan "db_ok": true, berarti
 * PHP dan koneksi database sudah benar.
 *
 * HAPUS file ini setelah selesai testing.
 */

header('Content-Type: application/json; charset=utf-8');

$out = [
    'php_ok'      => true,
    'php_version' => PHP_VERSION,
    'mysqli_ada'  => class_exists('mysqli'),
];

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    $out['db_ok'] = false;
    $out['error'] = 'File config.php tidak ditemukan di folder api/';
    echo json_encode($out, JSON_PRETTY_PRINT);
    exit;
}

// config.php akan menghentikan skrip sendiri kalau koneksi gagal
require $configPath;

$out['db_ok'] = true;
$out['database'] = $DB_NAME;

$res = $mysqli->query("SHOW TABLES LIKE 'osis_participants'");
$out['tabel_osis_participants_ada'] = ($res && $res->num_rows > 0);

if ($out['tabel_osis_participants_ada']) {
    $c = $mysqli->query("SELECT COUNT(*) AS n FROM osis_participants");
    $out['jumlah_data'] = $c ? (int)$c->fetch_assoc()['n'] : null;
} else {
    $out['catatan'] = 'Tabel belum dibuat. Jalankan isi db/schema.sql di phpMyAdmin.';
}

echo json_encode($out, JSON_PRETTY_PRINT);
