<?php
require __DIR__ . '/config.php';
require_admin();

$result = $mysqli->query("SELECT * FROM osis_participants ORDER BY waktu DESC");
if (!$result) {
    json_out(['success' => false, 'message' => 'Query gagal: ' . $mysqli->error], 500);
}

$rows = [];
while ($row = $result->fetch_assoc()) {
    $row['scores'] = json_decode($row['scores'], true);
    $rows[] = $row;
}

json_out(['success' => true, 'data' => $rows]);
