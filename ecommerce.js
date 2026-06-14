/* ============================================
   SHOPHUB - E-COMMERCE JAVASCRIPT
   ============================================ */

// Product data
const PRODUCTS = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 79.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 328,
    "description": "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Comfortable for all-day wear."
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 199.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    "rating": 4.3,
    "reviews": 215,
    "description": "Full-featured smartwatch with fitness tracking, heart rate monitor, and 7-day battery life. Water-resistant up to 50m."
  },
  {
    "id": 3,
    "name": "Running Shoes",
    "price": 89.99,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    "rating": 4.6,
    "reviews": 412,
    "description": "Lightweight running shoes with advanced cushioning technology for maximum comfort and performance on any terrain."
  },
  {
    "id": 4,
    "name": "Yoga Mat",
    "price": 34.99,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    "rating": 4.4,
    "reviews": 289,
    "description": "6mm thick non-slip yoga mat made from eco-friendly TPE material. Perfect for yoga, pilates, and home workouts."
  },
  {
    "id": 5,
    "name": "Coffee Maker",
    "price": 49.99,
    "category": "Home",
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop",
    "rating": 4.2,
    "reviews": 156,
    "description": "12-cup automatic coffee maker with programmable timer and keep-warm function. Makes fresh coffee in minutes."
  },
  {
    "id": 6,
    "name": "Desk Lamp",
    "price": 44.99,
    "category": "Home",
    "image": "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 178,
    "description": "LED desk lamp with adjustable brightness and color temperature. Perfect for studying, reading, or working at night."
  },
  {
    "id": 7,
    "name": "Bluetooth Speaker",
    "price": 59.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    "rating": 4.4,
    "reviews": 267,
    "description": "Portable waterproof Bluetooth speaker with 20-hour battery life and 360-degree sound. Perfect for outdoor adventures."
  },
  {
    "id": 8,
    "name": "USB-C Cable",
    "price": 14.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    "rating": 4.3,
    "reviews": 523,
    "description": "Durable 6ft USB-C cable with fast charging support. Compatible with all USB-C devices."
  },
  {
    "id": 9,
    "name": "Fitness Tracker",
    "price": 129.99,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 342,
    "description": "Track steps, calories, sleep patterns, and workouts. Water-resistant with 14-day battery life."
  },
  {
    "id": 10,
    "name": "Water Bottle",
    "price": 29.99,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1602527336146-acb0528e7ffc?w=500&h=500&fit=crop",
    "rating": 4.6,
    "reviews": 445,
    "description": "Stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. Eco-friendly and durable."
  },
  {
    "id": 11,
    "name": "Microwave Oven",
    "price": 79.99,
    "category": "Home",
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    "rating": 4.3,
    "reviews": 201,
    "description": "1000W microwave with multiple power levels and pre-set cooking programs. Compact design for small kitchens."
  },
  {
    "id": 12,
    "name": "Phone Case",
    "price": 19.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1592286927505-1def25e6c4cc?w=500&h=500&fit=crop",
    "rating": 4.4,
    "reviews": 678,
    "description": "Protective phone case with shock absorption and premium finish. Available for all popular phone models."
  },
  {
    "id": 13,
    "name": "Winter Jacket",
    "price": 89.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 289,
    "description": "Warm and stylish winter jacket with water-resistant exterior and thermal lining. Perfect for cold weather."
  },
  {
    "id": 14,
    "name": "Sunglasses",
    "price": 99.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    "rating": 4.6,
    "reviews": 412,
    "description": "UV-protective sunglasses with polarized lenses and premium frame. Stylish design for any occasion."
  },
  {
    "id": 15,
    "name": "Backpack",
    "price": 69.99,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    "rating": 4.4,
    "reviews": 334,
    "description": "Spacious backpack with multiple compartments, laptop sleeve, and ergonomic straps. Perfect for travel and daily use."
  },
  {
    "id": 16,
    "name": "Portable Charger",
    "price": 39.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 567,
    "description": "20000mAh portable charger with fast charging and multiple USB ports. Compact and lightweight."
  },
  {
    "id": 17,
    "name": "Desk Organizer",
    "price": 24.99,
    "category": "Home",
    "image": "https://images.unsplash.com/photo-1616046478bf24d9f929aaa6b8a8db9c3ad9f7c9?w=500&h=500&fit=crop",
    "rating": 4.3,
    "reviews": 198,
    "description": "Bamboo desk organizer with multiple compartments for pens, papers, and office supplies."
  },
  {
    "id": 18,
    "name": "Air Purifier",
    "price": 149.99,
    "category": "Home",
    "image": "https://images.unsplash.com/photo-1585535817949-f73160a89b23?w=500&h=500&fit=crop",
    "rating": 4.4,
    "reviews": 287,
    "description": "HEPA air purifier removes 99.97% of particles. Whisper-quiet operation perfect for bedrooms."
  },
  {
    "id": 19,
    "name": "Screen Protector",
    "price": 9.99,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1591857212027-92991b14665f?w=500&h=500&fit=crop",
    "rating": 4.2,
    "reviews": 812,
    "description": "Tempered glass screen protector with easy installation and high clarity. Protects from scratches and drops."
  },
  {
    "id": 20,
    "name": "Protein Shaker",
    "price": 19.99,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
    "rating": 4.5,
    "reviews": 423,
    "description": "Electric protein shaker with USB rechargeable battery. Mixes protein powder and supplements perfectly."
  }
];

// State management
let cart = [];
let filteredProducts = PRODUCTS;
let currentProduct = null;
let isDarkMode = false;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize app
function initializeApp() {
    loadTheme();
    loadCart();
    setupEventListeners();
    
    // Determine which page we're on and initialize accordingly
    if (window.location.pathname.includes('ecommerce.html') || window.location.pathname === '/') {
        initializeShopPage();
    } else if (window.location.pathname.includes('cart.html')) {
        initializeCartPage();
    } else if (window.location.pathname.includes('product.html')) {
        initializeProductPage();
    }
    
    updateCartCount();
}

// Setup global event listeners
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
}

// Theme management
function toggleTheme() {
    isDarkMode = !isDarkMode;
    const html = document.documentElement;
    html.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeButton();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    }
}

// ============================================
// SHOP PAGE FUNCTIONS
// ============================================

function initializeShopPage() {
    displayProducts(PRODUCTS);
    setupFilters();
}

function setupFilters() {
    // Category filter
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Price filter
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
            applyFilters();
        });
    }
    
    // Rating filter
    const ratingFilters = document.querySelectorAll('input[name="rating"]');
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Sort filter
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            displayProducts(filteredProducts, e.target.value);
        });
    }
    
    // Clear filters
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearAllFilters);
    }
}

function applyFilters() {
    // Get selected categories
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value)
        .filter(val => val !== '');
    
    // Get price range
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 300);
    
    // Get selected rating
    const selectedRating = document.querySelector('input[name="rating"]:checked')?.value || '';
    
    // Filter products
    filteredProducts = PRODUCTS.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const priceMatch = product.price <= maxPrice;
        const ratingMatch = selectedRating === '' || product.rating >= parseFloat(selectedRating);
        
        return categoryMatch && priceMatch && ratingMatch;
    });
    
    displayProducts(filteredProducts);
    
    // Show/hide "no products" message
    const noProducts = document.getElementById('noProducts');
    if (noProducts) {
        noProducts.style.display = filteredProducts.length === 0 ? 'block' : 'none';
    }
}

function clearAllFilters() {
    // Reset category filters
    document.querySelectorAll('.category-filter').forEach(cb => {
        cb.checked = cb.value === '';
    });
    
    // Reset price filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 300;
        document.getElementById('priceValue').textContent = 300;
    }
    
    // Reset rating filter
    document.querySelectorAll('input[name="rating"]').forEach(rb => {
        rb.checked = rb.value === '';
    });
    
    filteredProducts = PRODUCTS;
    displayProducts(PRODUCTS);
}

function displayProducts(products, sortBy = 'newest') {
    // Sort products
    let sorted = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default: // newest
            // Keep original order
            break;
    }
    
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = sorted.map(product => `
        <div class="product-card">
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-image"
                data-product-id="${product.id}"
            >
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-value">${product.rating}</span>
                    <span class="reviews">(${product.reviews} reviews)</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('click', () => {
            const productId = parseInt(img.dataset.productId);
            navigateToProduct(productId);
        });
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            addToCart(productId);
        });
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) stars += '✨';
    return stars;
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput?.value.toLowerCase() || '';
    
    if (searchTerm.trim() === '') {
        displayProducts(PRODUCTS);
        return;
    }
    
    filteredProducts = PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
    
    const noProducts = document.getElementById('noProducts');
    if (noProducts) {
        noProducts.style.display = filteredProducts.length === 0 ? 'block' : 'none';
    }
}

// ============================================
// CART FUNCTIONS
// ============================================

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    initializeCartPage();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartCount();
        initializeCartPage();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    cart = saved ? JSON.parse(saved) : [];
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
}

function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateTax(subtotal) {
    return subtotal * 0.1;
}

function calculateShipping(subtotal) {
    return subtotal > 100 ? 0 : 9.99;
}

// ============================================
// CART PAGE FUNCTIONS
// ============================================

function initializeCartPage() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <p>${item.category}</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-selector">
                    <button data-product-id="${item.id}" class="qty-decrease">−</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-product-id="${item.id}">
                    <button data-product-id="${item.id}" class="qty-increase">+</button>
                </div>
                <div style="text-align: right;">
                    <p style="font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-btn" data-product-id="${item.id}">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for quantity controls
    document.querySelectorAll('.qty-decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            if (item) updateCartItemQuantity(productId, item.quantity - 1);
        });
    });
    
    document.querySelectorAll('.qty-increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            if (item) updateCartItemQuantity(productId, item.quantity + 1);
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', () => {
            const productId = parseInt(input.dataset.productId);
            const quantity = parseInt(input.value) || 1;
            updateCartItemQuantity(productId, quantity);
        });
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            removeFromCart(productId);
        });
    });
    
    updateCartSummary();
    setupCheckout();
}

function updateCartSummary() {
    const subtotal = calculateCartTotal();
    const tax = calculateTax(subtotal);
    const shipping = calculateShipping(subtotal);
    const total = subtotal + tax + shipping;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeModal = document.getElementById('closeModal');
    const cancelCheckout = document.getElementById('cancelCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            checkoutModal.classList.add('active');
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });
    }
    
    if (cancelCheckout) {
        cancelCheckout.addEventListener('click', () => {
            checkoutModal.classList.remove('active');
        });
    }
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
    
    // Close modal when clicking outside
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;
    
    // Validate form
    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zip || !country) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email', 'error');
        return;
    }
    
    // Validate phone
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    // Process order
    const order = {
        id: Math.random().toString(36).substr(2, 9),
        date: new Date().toLocaleDateString(),
        customer: { firstName, lastName, email, phone, address, city, state, zip, country },
        items: cart,
        total: calculateCartTotal() + calculateTax(calculateCartTotal()) + calculateShipping(calculateCartTotal())
    };
    
    // Save order to localStorage
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Show success message
    showNotification(`Order placed successfully! Order ID: ${order.id}`, 'success');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    
    // Close modal and reset form
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('checkoutForm').reset();
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'ecommerce.html';
    }, 2000);
}

// ============================================
// PRODUCT PAGE FUNCTIONS
// ============================================

function navigateToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function initializeProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'ecommerce.html';
        return;
    }
    
    currentProduct = PRODUCTS.find(p => p.id === productId);
    if (!currentProduct) {
        window.location.href = 'ecommerce.html';
        return;
    }
    
    displayProductDetail();
    displayRelatedProducts();
}

function displayProductDetail() {
    const container = document.getElementById('productDetail');
    if (!container || !currentProduct) return;
    
    const cartItem = cart.find(item => item.id === currentProduct.id);
    const quantity = cartItem ? cartItem.quantity : 1;
    
    container.innerHTML = `
        <img src="${currentProduct.image}" alt="${currentProduct.name}" class="product-detail-image">
        <div class="product-detail-info">
            <h1>${currentProduct.name}</h1>
            <p class="product-detail-category">${currentProduct.category}</p>
            <div class="product-detail-rating">
                <span>${generateStars(currentProduct.rating)}</span>
                <span>${currentProduct.rating}/5 (${currentProduct.reviews} reviews)</span>
            </div>
            <p class="product-detail-price">$${currentProduct.price.toFixed(2)}</p>
            <p class="product-detail-description">${currentProduct.description}</p>
            
            <div class="product-detail-actions">
                <div class="quantity-selector">
                    <button id="decreaseQty">−</button>
                    <input type="number" id="quantityInput" value="${quantity}" min="1">
                    <button id="increaseQty">+</button>
                </div>
                <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
            </div>
            
            <div style="margin-top: 2rem; color: var(--text-secondary);">
                <h3>Product Details</h3>
                <ul style="list-style: none; margin-top: 1rem;">
                    <li>✓ Free shipping on orders over $100</li>
                    <li>✓ 30-day money-back guarantee</li>
                    <li>✓ 1-year product warranty</li>
                    <li>✓ 24/7 customer support</li>
                </ul>
            </div>
        </div>
    `;
    
    // Setup event listeners
    document.getElementById('decreaseQty')?.addEventListener('click', () => {
        const input = document.getElementById('quantityInput');
        input.value = Math.max(1, parseInt(input.value) - 1);
    });
    
    document.getElementById('increaseQty')?.addEventListener('click', () => {
        const input = document.getElementById('quantityInput');
        input.value = parseInt(input.value) + 1;
    });
    
    document.getElementById('addToCartBtn')?.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantityInput').value);
        for (let i = 0; i < quantity; i++) {
            addToCart(currentProduct.id);
        }
    });
}

function displayRelatedProducts() {
    const container = document.getElementById('relatedProducts');
    if (!container || !currentProduct) return;
    
    // Get 4 related products from same category
    const related = PRODUCTS
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (related.length === 0) return;
    
    container.innerHTML = related.map(product => `
        <div class="product-card">
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-image"
                data-product-id="${product.id}"
            >
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-value">${product.rating}</span>
                    <span class="reviews">(${product.reviews} reviews)</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('#relatedProducts .product-image').forEach(img => {
        img.addEventListener('click', () => {
            const productId = parseInt(img.dataset.productId);
            navigateToProduct(productId);
        });
    });
    
    document.querySelectorAll('#relatedProducts .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            addToCart(productId);
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `${type}-message`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '80px';
    notification.style.right = '20px';
    notification.style.zIndex = '10000';
    notification.style.maxWidth = '300px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// USER AUTHENTICATION FUNCTIONS
// ============================================

let currentUser = null;

// Initialize user on page load
function initializeUser() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserMenu();
    }
    setupUserMenu();
}

function setupUserMenu() {
    const userProfileBtn = document.getElementById('userProfileBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userProfileBtn) {
        userProfileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (userDropdown && !userDropdown.contains(e.target) && e.target !== userProfileBtn) {
            userDropdown.style.display = 'none';
        }
    });
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
}

function updateUserMenu() {
    const userName = document.getElementById('userName');
    if (userName) {
        if (currentUser) {
            userName.textContent = currentUser.name.split(' ')[0];
        } else {
            userName.textContent = 'Login';
        }
    }
}

function handleLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showNotification(`Welcome back, ${currentUser.name}!`, 'success');
        updateUserMenu();
        return true;
    } else {
        showNotification('Invalid email or password', 'error');
        return false;
    }
}

function handleRegister(name, email, password, phone, address) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.email === email);
    
    if (userExists) {
        showNotification('Email already registered', 'error');
        return false;
    }
    
    const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        password,
        phone,
        address,
        createdAt: new Date().toLocaleDateString(),
        orders: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login after registration
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showNotification(`Welcome, ${name}!`, 'success');
    updateUserMenu();
    return true;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully', 'success');
    updateUserMenu();
    setTimeout(() => {
        window.location.href = 'ecommerce.html';
    }, 1500);
}

// ============================================
// LOGIN PAGE FUNCTIONS
// ============================================

function initializeLoginPage() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (handleLogin(email, password)) {
                setTimeout(() => {
                    window.location.href = 'ecommerce.html';
                }, 1500);
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const phone = document.getElementById('regPhone').value;
            const address = document.getElementById('regAddress').value;
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters', 'error');
                return;
            }
            
            if (handleRegister(name, email, password, phone, address)) {
                setTimeout(() => {
                    window.location.href = 'ecommerce.html';
                }, 1500);
            }
        });
    }
}

// ============================================
// PROFILE PAGE FUNCTIONS
// ============================================

function initializeProfilePage() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    displayProfileInfo();
    setupProfileForms();
}

function displayProfileInfo() {
    if (!currentUser) return;
    
    document.getElementById('displayName').textContent = currentUser.name;
    document.getElementById('displayEmail').textContent = currentUser.email;
    document.getElementById('displayPhone').textContent = currentUser.phone;
    document.getElementById('displayAddress').textContent = currentUser.address;
    document.getElementById('memberSince').textContent = currentUser.createdAt;
    
    // Calculate statistics
    const userOrders = JSON.parse(localStorage.getItem('orders') || '[]')
        .filter(o => o.customer.email === currentUser.email);
    
    const totalSpent = userOrders.reduce((sum, order) => sum + order.total, 0);
    const activeOrders = userOrders.filter(o => o.status !== 'Delivered').length;
    
    document.getElementById('totalOrders').textContent = userOrders.length;
    document.getElementById('totalSpent').textContent = '$' + totalSpent.toFixed(2);
    document.getElementById('activeOrders').textContent = activeOrders;
}

function setupProfileForms() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileForm = document.getElementById('editProfileForm');
    const closeEditModal = document.getElementById('closeEditModal');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            document.getElementById('editName').value = currentUser.name;
            document.getElementById('editEmail').value = currentUser.email;
            document.getElementById('editPhone').value = currentUser.phone;
            document.getElementById('editAddress').value = currentUser.address;
            editProfileModal.classList.add('active');
        });
    }
    
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            currentUser.name = document.getElementById('editName').value;
            currentUser.email = document.getElementById('editEmail').value;
            currentUser.phone = document.getElementById('editPhone').value;
            currentUser.address = document.getElementById('editAddress').value;
            
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const index = users.findIndex(u => u.id === currentUser.id);
            if (index !== -1) {
                users[index] = currentUser;
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            
            showNotification('Profile updated successfully!', 'success');
            displayProfileInfo();
            editProfileModal.classList.remove('active');
        });
    }
    
    if (closeEditModal) {
        closeEditModal.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
}

// ============================================
// ORDER TRACKING FUNCTIONS
// ============================================

function initializeOrdersPage() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    document.getElementById('userInfo').textContent = `Welcome back, ${currentUser.name}!`;
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(tabId)?.classList.add('active');
            
            loadOrdersByStatus(tabId);
        });
    });
    
    loadOrdersByStatus('active-orders');
    setupTrackingModal();
}

function loadOrdersByStatus(status) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(o => o.customer.email === currentUser.email);
    
    let filtered = [];
    if (status === 'active-orders') {
        filtered = userOrders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled');
    } else if (status === 'completed-orders') {
        filtered = userOrders.filter(o => o.status === 'Delivered');
    } else if (status === 'cancelled-orders') {
        filtered = userOrders.filter(o => o.status === 'Cancelled');
    }
    
    const container = document.getElementById(status === 'active-orders' ? 'activeOrdersList' : 
                                             status === 'completed-orders' ? 'completedOrdersList' : 'cancelledOrdersList');
    const noOrders = document.getElementById(status === 'active-orders' ? 'noActiveOrders' : 
                                            status === 'completed-orders' ? 'noCompletedOrders' : 'noCancelledOrders');
    
    if (filtered.length === 0) {
        container.style.display = 'none';
        noOrders.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    noOrders.style.display = 'none';
    
    container.innerHTML = filtered.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <p style="font-size: 1.1rem; font-weight: bold;">Order #${order.id}</p>
                    <p class="order-id">Placed on ${order.date}</p>
                </div>
                <span class="order-status status-${getStatusClass(order.status || 'Processing')}">${order.status || 'Processing'}</span>
            </div>
            
            <div class="order-items">
                <p style="font-weight: bold; margin-bottom: 0.5rem;">Items:</p>
                ${order.items.map(item => `
                    <div class="order-item-preview">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <p>${item.name} × ${item.quantity}</p>
                            <small>$${(item.price * item.quantity).toFixed(2)}</small>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-footer">
                <div>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Total Amount</p>
                    <p class="order-total">$${order.total.toFixed(2)}</p>
                </div>
                <button class="btn-track" onclick="openTrackingModal('${order.id}')">Track Order</button>
            </div>
        </div>
    `).join('');
}

function getStatusClass(status) {
    switch(status) {
        case 'Processing': return 'processing';
        case 'Shipped': return 'shipped';
        case 'Delivered': return 'delivered';
        case 'Cancelled': return 'cancelled';
        default: return 'processing';
    }
}

function openTrackingModal(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const modal = document.getElementById('trackingModal');
    const trackingInfo = document.getElementById('trackingInfo');
    const trackingTimeline = document.getElementById('trackingTimeline');
    
    trackingInfo.innerHTML = `
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Delivery to:</strong> ${order.customer.address}, ${order.customer.city}</p>
        <p><strong>Contact:</strong> ${order.customer.phone}</p>
        <p><strong>Estimated Delivery:</strong> ${getEstimatedDelivery(order.date)}</p>
    `;
    
    const timeline = generateTrackingTimeline(order.status || 'Processing');
    trackingTimeline.innerHTML = timeline;
    
    modal.classList.add('active');
}

function generateTrackingTimeline(status) {
    const statuses = [
        { label: 'Order Confirmed', description: 'Your order has been confirmed' },
        { label: 'Processing', description: 'We are preparing your order' },
        { label: 'Shipped', description: 'Your order is on its way' },
        { label: 'Delivered', description: 'Your order has been delivered' }
    ];
    
    const statusIndex = statuses.findIndex(s => s.label === status);
    
    return statuses.map((item, index) => `
        <div class="timeline-item ${index <= statusIndex ? 'completed' : 'pending'}">
            <div class="timeline-label">${item.label}</div>
            <div class="timeline-description">${item.description}</div>
            <div class="timeline-time">${getRandomTime()}</div>
        </div>
    `).join('');
}

function getEstimatedDelivery(orderDate) {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString();
}

function getRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function setupTrackingModal() {
    const closeTracking = document.getElementById('closeTracking');
    const trackingModal = document.getElementById('trackingModal');
    
    if (closeTracking) {
        closeTracking.addEventListener('click', () => {
            trackingModal.classList.remove('active');
        });
    }
    
    if (trackingModal) {
        trackingModal.addEventListener('click', (e) => {
            if (e.target === trackingModal) {
                trackingModal.classList.remove('active');
            }
        });
    }
}

// ============================================
// INITIALIZE BASED ON PAGE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeUser();
    
    if (window.location.pathname.includes('login.html')) {
        initializeLoginPage();
    } else if (window.location.pathname.includes('profile.html')) {
        initializeProfilePage();
    } else if (window.location.pathname.includes('orders.html')) {
        initializeOrdersPage();
    }
    
    initializeApp();
});
