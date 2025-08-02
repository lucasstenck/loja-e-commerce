<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

// Receber dados do formulário
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

// Validar dados obrigatórios
$required_fields = ['name', 'email', 'password', 'address', 'cep', 'city', 'state', 'phone'];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Campo '$field' é obrigatório"]);
        exit;
    }
}

// Validar email
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

// Verificar se email já existe
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$input['email']]);

if ($stmt->fetch()) {
    http_response_code(400);
    echo json_encode(['error' => 'Email já cadastrado']);
    exit;
}

// Hash da senha
$hashed_password = password_hash($input['password'], PASSWORD_DEFAULT);

// Inserir usuário
try {
    $stmt = $pdo->prepare("
        INSERT INTO users (name, email, password, address, cep, city, state, phone) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $input['name'],
        $input['email'],
        $hashed_password,
        $input['address'],
        $input['cep'],
        $input['city'],
        $input['state'],
        $input['phone']
    ]);
    
    $user_id = $pdo->lastInsertId();
    
    echo json_encode([
        'success' => true,
        'message' => 'Usuário cadastrado com sucesso!',
        'user_id' => $user_id
    ]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao cadastrar usuário: ' . $e->getMessage()]);
}
?> 