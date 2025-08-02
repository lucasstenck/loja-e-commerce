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

// Receber dados do pedido
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

// Validar dados obrigatórios
if (empty($input['user_id']) || empty($input['items']) || empty($input['total_amount'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados do pedido incompletos']);
    exit;
}

// Verificar se usuário existe
try {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE id = ?");
    $stmt->execute([$input['user_id']]);
    
    if (!$stmt->fetch()) {
        http_response_code(400);
        echo json_encode(['error' => 'Usuário não encontrado']);
        exit;
    }
    
    // Iniciar transação
    $pdo->beginTransaction();
    
    // Criar pedido
    $stmt = $pdo->prepare("
        INSERT INTO orders (user_id, total_amount, status) 
        VALUES (?, ?, 'pending')
    ");
    
    $stmt->execute([
        $input['user_id'],
        $input['total_amount']
    ]);
    
    $order_id = $pdo->lastInsertId();
    
    // Inserir itens do pedido
    $stmt = $pdo->prepare("
        INSERT INTO order_items (order_id, product_id, product_name, product_price, size, quantity) 
        VALUES (?, ?, ?, ?, ?, ?)
    ");
    
    foreach ($input['items'] as $item) {
        $stmt->execute([
            $order_id,
            $item['id'],
            $item['name'],
            $item['price'],
            $item['size'],
            $item['quantity']
        ]);
    }
    
    // Confirmar transação
    $pdo->commit();
    
    echo json_encode([
        'success' => true,
        'message' => 'Pedido processado com sucesso!',
        'order_id' => $order_id
    ]);
    
} catch(PDOException $e) {
    // Reverter transação em caso de erro
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao processar pedido: ' . $e->getMessage()]);
}
?> 