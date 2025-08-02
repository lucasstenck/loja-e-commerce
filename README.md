# StyleStore - Loja E-commerce de Roupas

Uma loja e-commerce moderna e completa desenvolvida com HTML, CSS, JavaScript, PHP e MySQL.

## Características

- Design moderno em preto, branco e verde
- Sistema de cadastro e login com banco de dados MySQL
- Carrinho de compras funcional com esvaziamento
- Galeria de imagens com zoom estilo Mercado Livre
- Produtos relacionados em carrossel
- Menu mobile responsivo
- Página de detalhes do produto
- Sistema de paginação
- Filtros por categoria e pesquisa
- Design responsivo para mobile e desktop
- Sistema completo de pedidos e usuários
- Animações e transições suaves

## Pré-requisitos

- PHP 7.4 ou superior
- MySQL 5.7 ou superior
- Servidor web (Apache/Nginx) ou servidor PHP integrado
- Extensões PHP: PDO, MySQLi

## Instalação

### 1. Configurar o Banco de Dados

1. Acesse o MySQL:
```bash
mysql -u root -p
```

2. Digite sua senha quando solicitado: `91250401@Stenck`

3. Crie o banco de dados:
```sql
CREATE DATABASE stylestore;
USE stylestore;
```

4. O banco de dados será criado automaticamente quando você acessar a aplicação pela primeira vez.

### 2. Configurar o Servidor Web

#### Opção A: Servidor PHP Integrado (Recomendado)
```bash
# Navegue até a pasta do projeto
cd /caminho/para/loja

# Inicie o servidor PHP
php -S localhost:8000
```

#### Opção B: Servidor Web Local
1. Coloque todos os arquivos na pasta do seu servidor web (ex: `htdocs` para XAMPP)
2. Certifique-se de que o PHP está configurado corretamente
3. Verifique se as extensões PDO e MySQLi estão habilitadas no php.ini

### 3. Configurar as Permissões

Certifique-se de que o servidor web tem permissão para:
- Ler todos os arquivos
- Executar os arquivos PHP
- Acessar o banco de dados MySQL

## Como Usar

### 1. Acessar a Loja

1. Inicie seu servidor web ou servidor PHP integrado
2. Acesse: `http://localhost:8000/` (servidor PHP) ou `http://localhost/stylestore/` (servidor web)

### 2. Cadastrar Usuário

1. Clique em "Cadastrar" no cabeçalho
2. Preencha todos os campos obrigatórios:
   - Nome completo
   - Email
   - Senha
   - Endereço
   - CEP
   - Cidade
   - Estado
   - Telefone
3. Clique em "Cadastrar"

### 3. Fazer Login

1. Clique em "Entrar" no cabeçalho
2. Digite seu email e senha
3. Clique em "Entrar"

### 4. Navegar pelos Produtos

- Categorias: Use os links no menu para filtrar por categoria
- Pesquisa: Use a barra de pesquisa para encontrar produtos
- Ordenação: Use o dropdown para ordenar por preço ou nome
- Paginação: Navegue pelas páginas usando os botões numerados
- Mobile: Em telas pequenas, use o menu hamburger

### 5. Visualizar Detalhes do Produto

1. Clique em qualquer imagem de produto
2. Na página de detalhes, você pode:
   - Ver todas as imagens do produto com zoom
   - Navegar entre as imagens (se houver múltiplas)
   - Selecionar tamanho
   - Escolher quantidade
   - Adicionar ao carrinho ou comprar
   - Ver produtos relacionados em carrossel

### 6. Usar o Carrinho

1. Clique no ícone do carrinho no cabeçalho
2. Visualize os itens adicionados
3. Ajuste quantidades com os botões + e -
4. Use "Esvaziar Carrinho" para limpar tudo
5. Clique em "Finalizar Compra"

## Estrutura de Arquivos

```
loja/
├── index.html              # Página principal
├── product-detail.html     # Página de detalhes do produto
├── styles.css              # Estilos CSS responsivos
├── script.js               # JavaScript principal
├── product-detail.js       # JavaScript da página de detalhes
├── config.php              # Configuração do banco de dados
├── register.php            # Endpoint de registro
├── login.php               # Endpoint de login
├── process-order.php       # Endpoint de processamento de pedidos
├── database.sql            # Estrutura do banco de dados
├── README.md               # Este arquivo
└── [pastas de produtos]   # Imagens dos produtos
    ├── blusa-1/
    ├── blusa-2/
    ├── bone-1/
    ├── calça-1/
    └── ...
```

## Estrutura do Banco de Dados

### Tabela `users`
- `id`: ID único do usuário
- `name`: Nome completo
- `email`: Email (único)
- `password`: Senha criptografada
- `address`: Endereço completo
- `cep`: CEP
- `city`: Cidade
- `state`: Estado
- `phone`: Telefone
- `created_at`: Data de criação

### Tabela `orders`
- `id`: ID único do pedido
- `user_id`: ID do usuário (FK)
- `total_amount`: Valor total do pedido
- `status`: Status do pedido
- `created_at`: Data de criação

### Tabela `order_items`
- `id`: ID único do item
- `order_id`: ID do pedido (FK)
- `product_id`: ID do produto
- `product_name`: Nome do produto
- `product_price`: Preço do produto
- `size`: Tamanho selecionado
- `quantity`: Quantidade

## Funcionalidades Avançadas

### Galeria de Imagens
- Zoom em hover/touch para imagens principais
- Navegação entre múltiplas imagens
- Modal de visualização em tela cheia

### Produtos Relacionados
- Carrossel com 3 produtos aleatórios
- Navegação com indicadores
- Transições suaves entre produtos

### Menu Mobile
- Hamburger menu para telas pequenas
- Overlay com navegação completa
- Animações de entrada e saída

### Carrinho Inteligente
- Esvaziamento completo do carrinho
- Limpeza automática após compra
- Contadores em tempo real

## Personalização

### Cores
As cores principais estão definidas no CSS:
- Preto: `#000000`
- Branco: `#ffffff`
- Verde: `#00ff88`

### Produtos
Para adicionar novos produtos, edite o array `products` no arquivo `script.js`.

### Imagens
- Coloque as imagens dos produtos nas pastas correspondentes
- Use nomes consistentes (1.png, 2.png, etc.)
- Suporte para PNG e JPG
- Múltiplas imagens por produto são suportadas

## Solução de Problemas

### Erro de Conexão com Banco de Dados
1. Verifique se o MySQL está rodando
2. Confirme a senha no arquivo `config.php`
3. Verifique se o banco `stylestore` existe
4. Certifique-se de que as extensões PDO e MySQLi estão habilitadas

### Imagens não Carregam
1. Verifique se as pastas de produtos existem
2. Confirme se os nomes dos arquivos estão corretos
3. Verifique as permissões dos arquivos
4. Teste com diferentes formatos (PNG/JPG)

### PHP não Funciona
1. Verifique se o PHP está instalado
2. Confirme se as extensões PDO e MySQLi estão habilitadas
3. Verifique os logs de erro do servidor
4. Teste com `php -S localhost:8000` para servidor integrado

### Menu Mobile não Funciona
1. Verifique se o JavaScript está carregando
2. Confirme se os elementos DOM estão presentes
3. Teste em diferentes dispositivos móveis

## Suporte

Para dúvidas ou problemas:
1. Verifique os logs de erro do servidor
2. Confirme se todos os pré-requisitos estão atendidos
3. Teste a conexão com o banco de dados
4. Verifique o console do navegador para erros JavaScript

## Funcionalidades Implementadas

- Sistema de cadastro e login
- Carrinho de compras funcional com esvaziamento
- Página de detalhes do produto
- Galeria de imagens com zoom
- Produtos relacionados em carrossel
- Menu mobile responsivo
- Sistema de paginação
- Filtros por categoria
- Pesquisa de produtos
- Sistema de pedidos no banco
- Design responsivo
- Interface moderna
- Integração completa com MySQL
- Animações e transições suaves
- Modal de sucesso estilizado
- Scroll customizado
- Notificações em tempo real

## Licença

Este projeto foi desenvolvido para fins educacionais e comerciais.

## Versão Atual

**v1.0.1** - Projeto limpo e otimizado para produção
- Removidos todos os códigos de teste
- Interface completamente responsiva
- Funcionalidades avançadas implementadas
- Performance otimizada 