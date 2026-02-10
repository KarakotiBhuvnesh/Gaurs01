<?php
$pdo = new PDO(
  "mysql:host=localhost;dbname=leads_db;charset=utf8",
  "db_user",
  "db_pass",
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);
