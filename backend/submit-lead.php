<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require 'db.php';
$data = json_decode(file_get_contents('php://input'), true);

$phone = trim($data['phone'] ?? '');
if (!$phone) {
  http_response_code(400);
  echo json_encode(['error' => 'Phone required']);
  exit;
}

$stmt = $pdo->prepare(
  "INSERT INTO leads (name, phone, email, source, ip_address)
   VALUES (?, ?, ?, ?, ?)"
);

$stmt->execute([
  $data['name'] ?? '',
  $phone,
  $data['email'] ?? '',
  $data['source'] ?? 'Ads',
  $_SERVER['REMOTE_ADDR']
]);

echo json_encode(['success' => true]);
