

// Dados dos produtos (mesmo array do script.js)
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
let currentProduct = null;
let selectedSize = null;
let selectedQuantity = 1;
let cart = [];

// Elementos DOM
const productDetail = document.getElementById('productDetail');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartModal = document.getElementById('cartModal');
const successModal = document.getElementById('successModal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetail();
    loadCartFromStorage();
    updateCartCount();
    setupEventListeners();
});

// Configuração dos event listeners
function setupEventListeners() {
    // Carrinho
    cartBtn.addEventListener('click', () => showModal(cartModal));
    
    // Fechar modais
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
            // Reset zoom quando fechar modal de imagem
            if (e.target.closest('.image-modal')) {
                currentZoom = 1;
            }
        });
    });
    
    // Clicar fora do modal para fechar
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            // Reset zoom quando fechar modal de imagem
            if (e.target.classList.contains('image-modal')) {
                currentZoom = 1;
            }
        }
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Teclas para zoom no modal de imagem
    document.addEventListener('keydown', (e) => {
        const imageModal = document.getElementById('imageModal');
        if (imageModal.style.display === 'block') {
            switch(e.key) {
                case '+':
                case '=':
                    e.preventDefault();
                    zoomIn();
                    break;
                case '-':
                    e.preventDefault();
                    zoomOut();
                    break;
                case '0':
                    e.preventDefault();
                    resetZoom();
                    break;
                case 'Escape':
                    imageModal.style.display = 'none';
                    currentZoom = 1;
                    break;
            }
        }
    });
}

// Carregar detalhes do produto
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    currentProduct = products.find(p => p.id === productId);
    
    if (!currentProduct) {
        productDetail.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }
    
    // Melhorar dados dos produtos com descontos
    enhanceProductData();
    
    displayProductDetail();
    
    // Carregar produtos relacionados
    loadRelatedProducts();
}

// Exibir detalhes do produto
function displayProductDetail() {
    const hasMultipleImages = currentProduct.images.length > 1;
    
    productDetail.innerHTML = `
        <div class="product-detail-header">
            <div class="product-detail-images">
                <div class="main-image-container">
                    <img src="${currentProduct.images[0]}" alt="${currentProduct.name}" 
                         id="mainProductImage" 
                         class="main-product-image"
                         onclick="openImageModal('${currentProduct.images[0]}')"
                         onmouseover="handleImageHover(this, true)"
                         onmouseout="handleImageHover(this, false)"
                         ontouchstart="handleImageTouch(this)">
                </div>
                ${hasMultipleImages ? `
                    <div class="thumbnail-container">
                        ${currentProduct.images.map((image, index) => `
                            <img src="${image}" alt="${currentProduct.name}" 
                                 onclick="changeMainImage('${image}')" 
                                 class="thumbnail-image ${index === 0 ? 'active-thumbnail' : ''}"
                                 data-index="${index}">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="product-detail-info">
                <h1>${currentProduct.name}</h1>
                <div class="product-detail-price">R$ ${currentProduct.price.toFixed(2)}</div>
                <p class="product-detail-description">${currentProduct.description}</p>
                
                <div class="stock-info">
                    <p><strong>Estoque disponível:</strong> ${currentProduct.stock} unidades</p>
                </div>
                
                <div class="size-selector">
                    <h3>Selecione o Tamanho:</h3>
                    <div class="size-options">
                        ${currentProduct.sizes.map(size => `
                            <button class="size-option" onclick="selectSize('${size}')">${size}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <h3>Quantidade:</h3>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity(-1)">-</button>
                        <span id="quantityDisplay">1</span>
                        <button onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="product-actions" style="margin-top: 2rem;">
                    <button class="btn-add-cart" onclick="addToCart()" style="flex: 1; margin-right: 1rem;">
                        <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
                    </button>
                    <button class="btn-buy" onclick="buyNow()" style="flex: 1;">
                        <i class="fas fa-shopping-bag"></i> Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Mudar imagem principal
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-image');
    
    // Atualizar imagem principal
    mainImage.src = imageSrc;
    mainImage.onclick = () => openImageModal(imageSrc);
    
    // Atualizar thumbnails ativos
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active-thumbnail');
        if (thumb.src.includes(imageSrc)) {
            thumb.classList.add('active-thumbnail');
        }
    });
}

// Abrir modal de imagem
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnails = document.getElementById('modalThumbnails');
    
    modalMainImage.src = imageSrc;
    modalMainImage.style.transform = 'scale(1)';
    
    // Criar thumbnails no modal
    modalThumbnails.innerHTML = '';
    currentProduct.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image;
        thumb.className = 'modal-thumbnail';
        if (image === imageSrc) {
            thumb.classList.add('active-modal-thumbnail');
        }
        thumb.onclick = () => {
            modalMainImage.src = image;
            document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active-modal-thumbnail'));
            thumb.classList.add('active-modal-thumbnail');
        };
        modalThumbnails.appendChild(thumb);
    });
    
    modal.style.display = 'block';
}

// Funções de zoom
let currentZoom = 1;
const zoomStep = 0.2;
const maxZoom = 3;
const minZoom = 0.5;

function zoomIn() {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        updateZoom();
    }
}

function zoomOut() {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        updateZoom();
    }
}

function resetZoom() {
    currentZoom = 1;
    updateZoom();
}

function updateZoom() {
    const modalMainImage = document.getElementById('modalMainImage');
    modalMainImage.style.transform = `scale(${currentZoom})`;
}

// Funções de hover e touch
function handleImageHover(img, isHovering) {
    if (isHovering) {
        img.style.transform = 'scale(1.05)';
        img.style.cursor = 'zoom-in';
    } else {
        img.style.transform = 'scale(1)';
        img.style.cursor = 'pointer';
    }
}

function handleImageTouch(img) {
    // Para dispositivos touch, abrir modal diretamente
    const imageSrc = img.src;
    openImageModal(imageSrc);
}

// Selecionar tamanho
function selectSize(size) {
    selectedSize = size;
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.textContent === size) {
            option.classList.add('selected');
        }
    });
}

// Mudar quantidade
function changeQuantity(change) {
    const newQuantity = selectedQuantity + change;
    if (newQuantity >= 1 && newQuantity <= currentProduct.stock) {
        selectedQuantity = newQuantity;
        document.getElementById('quantityDisplay').textContent = selectedQuantity;
    }
}

// Adicionar ao carrinho
function addToCart() {
    if (!selectedSize) {
        showNotification('Selecione um tamanho!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => 
        item.id === currentProduct.id && item.size === selectedSize
    );
    
    if (existingItem) {
        existingItem.quantity += selectedQuantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.images[0],
            size: selectedSize,
            quantity: selectedQuantity
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    
    showNotification('Produto adicionado ao carrinho!');
    
    // Reset quantidade
    selectedQuantity = 1;
    document.getElementById('quantityDisplay').textContent = '1';
}

// Comprar agora
function buyNow() {
    if (!selectedSize) {
        showNotification('Selecione um tamanho!', 'error');
        return;
    }
    
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
                <div class="cart-item-size">Tamanho: ${item.size}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Atualizar quantidade no carrinho
function updateQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => !(item.id === productId && item.size === size));
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

// Checkout
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'error');
        return;
    }
    
    // Simular finalização da compra
    cart = [];
    saveCartToStorage();
    updateCartCount();
    updateCartDisplay();
    cartModal.style.display = 'none';
    showModal(successModal);
}

// Funções de modal
function showModal(modal) {
    modal.style.display = 'block';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
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

// CSS para animação da notificação e galeria de fotos
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
    
    .main-image {
        border: 3px solid #00ff88;
        transform: scale(1.05);
    }
    
    .cart-item-size {
        font-size: 0.8rem;
        color: #666;
        margin-top: 0.25rem;
    }
    
    /* Estilos da galeria de fotos */
    .product-detail-images {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
    }
    
    .main-image-container {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .main-product-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    
    .thumbnail-container {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .thumbnail-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }
    
    .thumbnail-image:hover {
        border-color: #00ff88;
        transform: scale(1.05);
    }
    
    .active-thumbnail {
        border-color: #00ff88;
        transform: scale(1.05);
    }
    
    /* Modal de imagem */
    .image-modal {
        background-color: rgba(0, 0, 0, 0.9);
    }
    
    .image-modal-content {
        background: transparent;
        border: none;
        max-width: 90vw;
        max-height: 90vh;
        width: auto;
        height: auto;
    }
    
    .image-gallery-modal {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    
    .main-image-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 80vw;
        max-height: 70vh;
        overflow: hidden;
    }
    
    .modal-main-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.3s ease;
    }
    
    .image-zoom-controls {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        gap: 0.5rem;
        background: rgba(0, 0, 0, 0.7);
        padding: 0.5rem;
        border-radius: 4px;
    }
    
    .zoom-btn {
        background: #00ff88;
        border: none;
        color: #000;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }
    
    .zoom-btn:hover {
        background: #00cc6a;
    }
    
    .modal-thumbnails {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 80vw;
    }
    
    .modal-thumbnail {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }
    
    .modal-thumbnail:hover {
        border-color: #00ff88;
        transform: scale(1.1);
    }
    
    .active-modal-thumbnail {
        border-color: #00ff88;
        transform: scale(1.1);
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
        .product-detail-images {
            max-width: 100%;
        }
        
        .main-product-image {
            height: 300px;
        }
        
        .thumbnail-image {
            width: 60px;
            height: 60px;
        }
        
        .modal-main-image {
            max-width: 95vw;
            max-height: 60vh;
        }
        
        .modal-thumbnail {
            width: 50px;
            height: 50px;
        }
    }
`;
document.head.appendChild(style);

// Variáveis globais para o carrossel
let currentCarouselIndex = 0;
let relatedProductsData = [];

// Função para obter ID do produto da URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Funções para Produtos Relacionados
function loadRelatedProducts() {
    const currentProductId = getProductIdFromUrl();
    
    const currentProduct = products.find(p => p.id === currentProductId);
    
    if (!currentProduct) {
        return;
    }
    
    const relatedProducts = products.filter(product => 
        product.id !== currentProductId
    );
    
    const shuffled = relatedProducts.sort(() => 0.5 - Math.random());
    relatedProductsData = shuffled.slice(0, 3); // Store in global variable
    
    // Reset do índice do carrossel
    currentCarouselIndex = 0;
    
    // Adicionar classe de loading
    const carousel = document.getElementById('relatedProductsCarousel');
    
    if (carousel) {
        carousel.classList.add('loading');
    }
    
    // Simular tempo de carregamento para mostrar a animação
    setTimeout(() => {
        displayRelatedProducts();
        createCarouselIndicators();
        if (carousel) {
            carousel.classList.remove('loading');
        }
    }, 800);
}

function displayRelatedProducts() {
    const carousel = document.getElementById('relatedProductsCarousel');
    
    if (!carousel || relatedProductsData.length === 0) {
        return;
    }
    
    const currentProduct = relatedProductsData[currentCarouselIndex];
    
    // Simplificar temporariamente - sem transições
    const imageSrc = currentProduct.images[0];
    
    carousel.innerHTML = `
        <div class="related-product-card" onclick="navigateToProduct(${currentProduct.id})">
            <img src="${imageSrc}" alt="${currentProduct.name}" class="related-product-image">
            <div class="related-product-title">${currentProduct.name}</div>
            <div class="related-product-price">
                ${currentProduct.originalPrice ? `<div class="related-original-price">R$ ${currentProduct.originalPrice.toFixed(2)}</div>` : ''}
                <div class="related-current-price">R$ ${currentProduct.price.toFixed(2)}</div>
                ${currentProduct.discount ? `<div class="related-discount">${currentProduct.discount}% OFF</div>` : ''}
            </div>
            <div class="related-payment">${generatePaymentInfo(currentProduct.price)}</div>
            <div class="related-shipping">
                <i class="fas fa-shipping-fast"></i>
                Frete Grátis
            </div>
        </div>
    `;
    
    updateScrollButtons();
    updateCarouselIndicators();
}

function createCarouselIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < relatedProductsData.length; i++) {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${i === 0 ? 'active' : ''}`;
        indicator.onclick = () => goToCarouselIndex(i);
        
        // Adicionar efeito de ripple ao clicar
        indicator.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 255, 136, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop) + 'px';
            ripple.style.width = ripple.style.height = '20px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        indicatorsContainer.appendChild(indicator);
    }
}

function updateCarouselIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCarouselIndex);
    });
}

function goToCarouselIndex(index) {
    if (index >= 0 && index < relatedProductsData.length && index !== currentCarouselIndex) {
        currentCarouselIndex = index;
        displayRelatedProducts();
        
        // Adicionar efeito de vibração nos botões de navegação
        const leftBtn = document.querySelector('.scroll-left');
        const rightBtn = document.querySelector('.scroll-right');
        
        if (leftBtn) leftBtn.style.animation = 'shake 0.5s ease';
        if (rightBtn) rightBtn.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            if (leftBtn) leftBtn.style.animation = '';
            if (rightBtn) rightBtn.style.animation = '';
        }, 500);
    }
}

function scrollRelatedProducts(direction) {
    if (relatedProductsData.length === 0) return;
    
    const previousIndex = currentCarouselIndex;
    
    if (direction === 'left') {
        currentCarouselIndex = (currentCarouselIndex - 1 + relatedProductsData.length) % relatedProductsData.length;
    } else {
        currentCarouselIndex = (currentCarouselIndex + 1) % relatedProductsData.length;
    }
    
    // Adicionar efeito de transição suave
    if (previousIndex !== currentCarouselIndex) {
        displayRelatedProducts();
        
        // Efeito de vibração no botão clicado
        const clickedBtn = direction === 'left' ? 
            document.querySelector('.scroll-left') : 
            document.querySelector('.scroll-right');
        
        if (clickedBtn) {
            clickedBtn.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                clickedBtn.style.animation = '';
            }, 500);
        }
    }
}

function updateScrollButtons() {
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');
    if (!leftBtn || !rightBtn || relatedProductsData.length === 0) return;
    
    // Always enable buttons for circular carousel
    leftBtn.disabled = false;
    rightBtn.disabled = false;
    
    // Adicionar efeito de hover nos botões
    [leftBtn, rightBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function navigateToProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

function generatePaymentInfo(price) {
    const installments = Math.floor(price / 10) + 1;
    const installmentValue = price / installments;
    
    if (installments <= 6) {
        return `${installments}x R$ ${installmentValue.toFixed(2)} sem juros`;
    } else {
        return `${installments}x R$ ${installmentValue.toFixed(2)}`;
    }
}

function enhanceProductData() {
    products.forEach(product => {
        // Adicionar preço original (maior que o preço atual)
        if (Math.random() > 0.3) {
            const originalPrice = product.price * (1 + Math.random() * 0.5 + 0.1);
            product.originalPrice = Math.round(originalPrice * 100) / 100;
            
            // Calcular desconto
            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            product.discount = discount;
        }
    });
} 

// Adicionar CSS dinâmico para animações
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
        
        .related-product-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .related-product-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(style);
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    addDynamicStyles();
}); 