// Dados dos produtos baseados nas pastas disponíveis
const products = [
    {
        id: 1,
        name: "Blusa Casual",
        category: "blusas",
        gender: "unisex",
        price: 89.90,
        images: ["blusa-1/1.png", "blusa-1/2.png", "blusa-1/3.png"],
        description: "Blusa casual confortável, perfeita para o dia a dia. Material de alta qualidade e design moderno.",
        sizes: ["P", "M", "G", "GG"],
        stock: 15
    },
    {
        id: 2,
        name: "Blusa Esportiva",
        category: "blusas",
        gender: "masculino",
        price: 75.50,
        images: ["blusa-2/1.png"],
        description: "Blusa esportiva ideal para atividades físicas. Tecido respirável e confortável.",
        sizes: ["M", "G", "GG"],
        stock: 8
    },
    {
        id: 3,
        name: "Blusa Social",
        category: "blusas",
        gender: "masculino",
        price: 120.00,
        images: ["blusa-3/1.png", "blusa-3/2.png", "blusa-3/3.png"],
        description: "Blusa social elegante para ocasiões especiais. Corte moderno e acabamento refinado.",
        sizes: ["P", "M", "G"],
        stock: 12
    },
    {
        id: 4,
        name: "Blusa Feminina Elegante",
        category: "blusas",
        gender: "feminino",
        price: 95.00,
        images: ["blusa-4/1.jpg"],
        description: "Blusa feminina elegante com design sofisticado. Perfeita para eventos especiais.",
        sizes: ["P", "M", "G"],
        stock: 10
    },
    {
        id: 5,
        name: "Blusa Casual Feminina",
        category: "blusas",
        gender: "feminino",
        price: 68.90,
        images: ["blusa-5/1.jpg"],
        description: "Blusa casual feminina com estilo despojado. Confortável e versátil.",
        sizes: ["P", "M", "G", "GG"],
        stock: 20
    },
    {
        id: 6,
        name: "Blusa Moderna",
        category: "blusas",
        gender: "unisex",
        price: 82.50,
        images: ["blusa-6/1.png"],
        description: "Blusa moderna com design contemporâneo. Ideal para o dia a dia.",
        sizes: ["M", "G", "GG"],
        stock: 14
    },
    {
        id: 7,
        name: "Blusa Premium",
        category: "blusas",
        gender: "masculino",
        price: 150.00,
        images: ["blusa-7/1.png", "blusa-7/2.png", "blusa-7/3.png"],
        description: "Blusa premium com material de alta qualidade. Design exclusivo e sofisticado.",
        sizes: ["P", "M", "G"],
        stock: 6
    },
    {
        id: 8,
        name: "Blusa Casual Premium",
        category: "blusas",
        gender: "feminino",
        price: 110.00,
        images: ["blusa-8/1.jpg"],
        description: "Blusa casual premium com acabamento refinado. Confortável e elegante.",
        sizes: ["P", "M", "G"],
        stock: 9
    },
    {
        id: 9,
        name: "Blusa Feminina Estilosa",
        category: "blusas",
        gender: "feminino",
        price: 88.00,
        images: ["blusa-feminina-1/1.jpg"],
        description: "Blusa feminina com design estiloso e moderno. Perfeita para qualquer ocasião.",
        sizes: ["P", "M", "G"],
        stock: 16
    },
    {
        id: 10,
        name: "Blusa Feminina Casual",
        category: "blusas",
        gender: "feminino",
        price: 72.50,
        images: ["blusa-feminina-2/2.jpg"],
        description: "Blusa feminina casual com estilo descontraído. Ideal para o dia a dia.",
        sizes: ["P", "M", "G", "GG"],
        stock: 18
    },
    {
        id: 11,
        name: "Blusa Feminina Elegante",
        category: "blusas",
        gender: "feminino",
        price: 125.00,
        images: ["blusa-feminina-3/1.jpg"],
        description: "Blusa feminina elegante para ocasiões especiais. Design sofisticado e refinado.",
        sizes: ["P", "M", "G"],
        stock: 7
    },
    {
        id: 12,
        name: "Boné Esportivo",
        category: "acessorios",
        gender: "unisex",
        price: 45.00,
        images: ["bone-1/1.jpg"],
        description: "Boné esportivo confortável e estiloso. Ideal para atividades ao ar livre.",
        sizes: ["Único"],
        stock: 25
    },
    {
        id: 13,
        name: "Boné Casual",
        category: "acessorios",
        gender: "unisex",
        price: 38.90,
        images: ["bone-2/1.jpg"],
        description: "Boné casual com design moderno. Perfeito para complementar qualquer look.",
        sizes: ["Único"],
        stock: 30
    },
    {
        id: 14,
        name: "Boné Premium",
        category: "acessorios",
        gender: "unisex",
        price: 65.00,
        images: ["bone-3/1.jpg"],
        description: "Boné premium com material de alta qualidade. Design exclusivo e sofisticado.",
        sizes: ["Único"],
        stock: 12
    },
    {
        id: 15,
        name: "Calça Jeans",
        category: "calcas",
        gender: "unisex",
        price: 180.00,
        images: ["calça-1/1.jpg"],
        description: "Calça jeans de alta qualidade. Confortável e durável para o dia a dia.",
        sizes: ["36", "38", "40", "42", "44"],
        stock: 22
    },
    {
        id: 16,
        name: "Chapéu Elegante",
        category: "acessorios",
        gender: "unisex",
        price: 85.00,
        images: ["chapeu/1.png"],
        description: "Chapéu elegante para ocasiões especiais. Design sofisticado e refinado.",
        sizes: ["Único"],
        stock: 8
    },
    {
        id: 17,
        name: "Combo de Roupas",
        category: "combo",
        gender: "unisex",
        price: 250.00,
        images: ["combo-roupas/1.png"],
        description: "Combo completo de roupas com desconto especial. Inclui blusa e calça combinando.",
        sizes: ["P", "M", "G"],
        stock: 5
    },
    {
        id: 18,
        name: "Combo Premium",
        category: "combo",
        gender: "unisex",
        price: 320.00,
        images: ["combo-roupas-2/1.png"],
        description: "Combo premium com peças selecionadas. Qualidade superior e design exclusivo.",
        sizes: ["M", "G", "GG"],
        stock: 3
    },
    {
        id: 19,
        name: "Shorts Feminino",
        category: "calcas",
        gender: "feminino",
        price: 95.00,
        images: ["shorts feminino/1.jpg"],
        description: "Shorts feminino confortável e estiloso. Ideal para o verão e atividades esportivas.",
        sizes: ["P", "M", "G"],
        stock: 15
    }
];

// Estado da aplicação
let currentUser = null;
let cart = [];
let currentPage = 1;
let productsPerPage = 5;
let currentCategory = 'todos';
let currentSort = 'default';
let searchTerm = '';

// Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const pageNumbers = document.getElementById('pageNumbers');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

// Modais
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const cartModal = document.getElementById('cartModal');
const successModal = document.getElementById('successModal');

// Botões
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const cartBtn = document.getElementById('cartBtn');
const searchBtn = document.getElementById('searchBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

// Formulários
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Links de navegação
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Mobile menu elements
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
    updateCartCount();
});

// Configuração dos event listeners
function setupEventListeners() {
    // Botões de modal
    loginBtn.addEventListener('click', () => showModal(loginModal));
    registerBtn.addEventListener('click', () => showModal(registerModal));
    cartBtn.addEventListener('click', () => showModal(cartModal));
    
    // Fechar modais
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
    
    // Clicar fora do modal para fechar
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Formulários
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    
    // Pesquisa
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Ordenação
    sortSelect.addEventListener('change', handleSort);
    
    // Paginação
    prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    
    // Navegação por categoria
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            currentPage = 1;
            loadProducts();
        });
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Esvaziar carrinho
    document.getElementById('emptyCartBtn').addEventListener('click', emptyCart);
    
    // Links de modal
    document.getElementById('showRegister').addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        showModal(registerModal);
    });
    
    document.getElementById('showLogin').addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        showModal(loginModal);
    });
    
    // Mobile menu functionality
    menuToggle.addEventListener('click', toggleMobileMenu);
    closeMenu.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
    
    // Mobile navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            currentCategory = link.dataset.category;
            currentPage = 1;
            loadProducts();
            closeMobileMenu();
        });
    });
}

// Funções de modal
function showModal(modal) {
    modal.style.display = 'block';
}

// Mobile menu functions
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
    // Garantir que o carrinho esteja limpo
    if (cart.length > 0) {
        cart = [];
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
    }
}

// Carregar produtos
function loadProducts() {
    let filteredProducts = filterProducts();
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    displayProducts(productsToShow);
    updatePagination(totalPages);
}

// Filtrar produtos
function filterProducts() {
    let filtered = products;
    
    // Filtrar por categoria
    if (currentCategory !== 'todos') {
        if (currentCategory === 'feminino' || currentCategory === 'masculino') {
            filtered = filtered.filter(p => p.gender === currentCategory);
        } else {
            filtered = filtered.filter(p => p.category === currentCategory);
        }
    }
    
    // Filtrar por pesquisa
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Ordenar produtos
    switch (currentSort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return filtered;
}

// Exibir produtos
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">Nenhum produto encontrado.</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" onclick="openProductDetail(${product.id})">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar
                </button>
                <button class="btn-buy" onclick="buyNow(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Comprar
                </button>
            </div>
        </div>
    `;
    return card;
}

// Abrir detalhes do produto
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Criar URL para a página de detalhes
    const url = `product-detail.html?id=${productId}`;
    window.location.href = url;
}

// Adicionar ao carrinho
function addToCart(productId) {
    if (!currentUser) {
        showModal(loginModal);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    
    // Feedback visual
    showNotification('Produto adicionado ao carrinho!');
}

// Comprar agora
function buyNow(productId) {
    if (!currentUser) {
        showModal(loginModal);
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Simular compra
    showModal(successModal);
}

// Atualizar contador do carrinho
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Atualizar display do carrinho
function updateCartDisplay() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Carrinho vazio</p>';
        cartTotal.textContent = '0,00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Atualizar quantidade
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
}

// Salvar carrinho no localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Carregar carrinho do localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Atualizar paginação
function updatePagination(totalPages) {
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-number';
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => changePage(i));
        pageNumbers.appendChild(pageBtn);
    }
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Mudar página
function changePage(page) {
    currentPage = page;
    loadProducts();
}

// Pesquisar
function handleSearch() {
    searchTerm = searchInput.value.trim();
    currentPage = 1;
    loadProducts();
}

// Ordenar
function handleSort() {
    currentSort = sortSelect.value;
    currentPage = 1;
    loadProducts();
}

// Login
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showNotification('Email e senha são obrigatórios!', 'error');
        return;
    }
    
    try {
        const response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            currentUser = data.user;
            loginModal.style.display = 'none';
            loginBtn.textContent = 'Sair';
            loginBtn.onclick = logout;
            registerBtn.style.display = 'none'; // Esconder botão cadastrar
            showNotification(data.message);
        } else {
            showNotification(data.error, 'error');
        }
    } catch (error) {
        showNotification('Erro ao fazer login. Tente novamente.', 'error');
    }
}

// Registro
async function handleRegister(e) {
    e.preventDefault();
    
    // Pegar valores diretamente dos campos
    const userData = {
        name: document.getElementById('registerName').value,
        email: document.getElementById('registerEmail').value,
        password: document.getElementById('registerPassword').value,
        address: document.getElementById('registerAddress').value,
        cep: document.getElementById('registerCEP').value,
        city: document.getElementById('registerCity').value,
        state: document.getElementById('registerState').value,
        phone: document.getElementById('registerPhone').value
    };
    
    // Validar campos obrigatórios
    const requiredFields = ['name', 'email', 'password', 'address', 'cep', 'city', 'state', 'phone'];
    for (const field of requiredFields) {
        if (!userData[field]) {
            showNotification(`Campo ${field} é obrigatório!`, 'error');
            return;
        }
    }
    
    try {
        const response = await fetch('register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            registerModal.style.display = 'none';
            showModal(loginModal);
            showNotification(data.message);
        } else {
            showNotification(data.error, 'error');
        }
    } catch (error) {
        showNotification('Erro ao cadastrar. Tente novamente.', 'error');
    }
}

// Logout
function logout() {
    currentUser = null;
    loginBtn.textContent = 'Entrar';
    loginBtn.onclick = () => showModal(loginModal);
    registerBtn.style.display = 'inline-block'; // Mostrar botão cadastrar novamente
    showNotification('Logout realizado com sucesso!');
}

// Esvaziar carrinho
function emptyCart() {
    if (cart.length === 0) {
        showNotification('Carrinho já está vazio!', 'error');
        return;
    }
    
    cart = [];
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    cartModal.style.display = 'none';
    showNotification('Carrinho esvaziado com sucesso!');
}

// Checkout
async function handleCheckout() {
    if (!currentUser) {
        showModal(loginModal);
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'error');
        return;
    }
    
    try {
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const orderData = {
            user_id: currentUser.id,
            total_amount: totalAmount,
            items: cart
        };
        
        const response = await fetch('process-order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Limpar carrinho após sucesso
            cart = [];
            saveCartToStorage();
            updateCartCount();
            updateCartDisplay();
            cartModal.style.display = 'none';
            showModal(successModal);
            showNotification('Compra realizada com sucesso! Carrinho limpo.');
        } else {
            showNotification(data.error, 'error');
        }
    } catch (error) {
        // Simular sucesso local
        cart = [];
        saveCartToStorage();
        updateCartCount();
        updateCartDisplay();
        cartModal.style.display = 'none';
        showModal(successModal);
        showNotification('Compra realizada com sucesso! Carrinho limpo.');
    }
}

// Notificação
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff4444' : '#00ff88'};
        color: ${type === 'error' ? 'white' : '#000'};
        padding: 1rem 2rem;
        border-radius: 25px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// CSS para animação da notificação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 