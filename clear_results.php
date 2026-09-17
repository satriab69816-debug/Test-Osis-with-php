<?php
require __DIR__ . '/config.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['success' => false, 'message' => 'Metode tidak diizinkan.'], 405);
}

if (!$mysqli->query("TRUNCATE TABLE osis_participants")) {
    json_out(['success' => false, 'message' => 'Gagal menghapus data: ' . $mysqli->error], 500);
}

json_out(['success' => true]);
