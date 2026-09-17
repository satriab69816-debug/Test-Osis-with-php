<?php
require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['success' => false, 'message' => 'Metode tidak diizinkan.'], 405);
}

$data = json_input();
$username = trim((string)($data['username'] ?? ''));
$password = (string)($data['password'] ?? '');

if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
    $_SESSION['osis_admin'] = true;
    json_out(['success' => true]);
}

json_out(['success' => false, 'message' => 'Username atau password salah.'], 401);
