        // Extensive product data - 30 products per category (8 categories = 240 products)
        const products = [
            // Ornaments Category (30 products)
            { id: 1, name: "Glass Ball Ornament Set", price: 24.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/EtchedGlassBallOrnClearSSF22_799x799.jpg?v=1690353292" },
            { id: 2, name: "Personalized Family Ornament", price: 19.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/MarbleDippedOnionSSF23_645x645.jpg?v=1700114780" },
            { id: 3, name: "Santa Claus Ornament", price: 12.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/WoodBallWTasselOrnmntsFSSF21_16b4ce16-7eaf-4671-a8b6-83b5201615b2_799x799.jpg?v=1639395105" },
            { id: 4, name: "Snowflake Crystal Ornament", price: 16.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/SilverEtchedStarBallSSF24_799x799.jpg?v=1761530652" },
            { id: 5, name: "Reindeer Ornament Set", price: 29.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/MiniReindeerSnowglobeSSF24_799x799.jpg?v=1761531275" },
            { id: 6, name: "Angels Collection Ornaments", price: 34.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/BrassAngelSSF23_1024x1024.jpg?v=1723716726" },
            { id: 7, name: "Hand-painted Wooden Ornaments", price: 22.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/HatTopperBallOrnS2SSF20_799x799.jpg?v=1723723537" },
            { id: 8, name: "Vintage Glass Ornament Set", price: 39.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/EtchedGlassBallOrnGreenSSF22_799x799.jpg?v=1690353291" },
            { id: 9, name: "Nutcracker Ornament", price: 14.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/BeadedGlitterPineconeGrpFSSF20_a2af2c71-9f5f-45d7-80d2-f394de0c24f3_799x799.jpg?v=1696320380" },
            { id: 10, name: "Glitter Star Ornament Set", price: 18.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/TinselStarOrnamentRedSSF22_799x799.jpg?v=1690353296" },
            { id: 11, name: "Woodland Pine Ornament", price: 15.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/AllAcrsAfricaRdGrnTrBallSSF24_799x799.jpg?v=1761531313" },
            { id: 12, name: "Glass Icicle Ornament Set", price: 17.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/AllAcrsAfricaRedTierBallSSF24_799x799.jpg?v=1761531314" },
            { id: 13, name: "Frosted Pinecone Ornament", price: 13.49, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/GlassStarOrnamentMirrorSSF22_799x799.jpg?v=1690353985" },
            { id: 14, name: "Red Velvet Ribbon Ornament", price: 11.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/RedGreenGlitterDotBallOrnSSF22_799x799.jpg?v=1690353895" },
            { id: 15, name: "Golden Bell Ornament", price: 16.49, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/BeadedSilverBallOrnamentSSF22_799x799.jpg?v=1690353892" },
            { id: 16, name: "Candy Cane Ornament Set", price: 14.49, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/LemonGlassFruitSSF24_799x799.jpg?v=1761531240" },
            { id: 17, name: "Crystal Drop Ornament", price: 18.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/EtchedGlassBallOrnRedSSF22_799x799.jpg?v=1690353291" },
            { id: 18, name: "Plaid Heart Ornament", price: 12.49, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/BronzePineconeSSF23_916x916.jpg?v=1725864009" },
            { id: 19, name: "Beaded Snowflake Ornament", price: 19.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/ScandiHrtgReindeerOrnamentSSF23_645x645.jpg?v=1729319885" },
            { id: 20, name: "Twinkling Star Ornament", price: 21.49, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/WinterSceneOrnamentSSF24_f660d2e5-5c4a-4e52-b652-19cc0badd6ce_799x800.jpg?v=1726760813" },
            { id: 21, name: "Snowberry Wreath Ornament", price: 15.49, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/BellWreathOrnamentSSF23_1024x1024.jpg?v=1723716270" },
            { id: 22, name: "Silver Bell Cluster Ornament", price: 16.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/products/ReindeerOrnamentsFSSF21_799x799.jpg?v=1723723842" },
            { id: 23, name: "Tartan Globe Ornament", price: 17.49, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/GlassMushroomSSF24_799x799.jpg?v=1756857821" },
            { id: 24, name: "Iridescent Dome Ornament", price: 18.49, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/files/BoiledWoolOrnHolidaySlothSSF22_799x799.jpg?v=1756858371" },
            { id: 25, name: "Mini Wreath Ornament", price: 11.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/CB_H24_WD_11_201_Vert_027_HERO_916x916.jpg?v=1726302378" },
            { id: 26, name: "Pearl Drop Ornament", price: 13.99, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/GoldBowOrnamentSSF24_799x799.jpg?v=1756858161" },
            { id: 27, name: "Golden Leaf Ornament", price: 15.99, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/NutcrackerOrnamentSlvSSF22_799x799.jpg?v=1690353295" },
            { id: 29, name: "Glass Teardrop Ornament", price: 19.49, category: "ornaments", rating: 5, image: "https://crateandbarrel.com.ph/cdn/shop/products/HolidayReindeerOrnamentSSF22_799x799.jpg?v=1690353298" },
            { id: 30, name: "Nordic Knit Ornament", price: 14.49, category: "ornaments", rating: 4, image: "https://crateandbarrel.com.ph/cdn/shop/files/WoodenIceSkatesSSF24_799x799.jpg?v=1761530688" },
            // Lights
            { id: 31, name: "Warm White String Lights", price: 24.99, category: "lights", rating: 5, image: "https://www.ikea.com/ph/en/images/products/solvinden-led-string-light-with-12-lights-outdoor-battery-operated-orange__1341620_pe948846_s5.jpg?f=xxs" },
            { id: 32, name: "Twinkle Fairy Lights", price: 19.99, category: "lights", rating: 4, image: "http://ikea.com/ph/en/images/products/solvinden-led-solar-powered-pendant-lamp-outdoor-oval-light-blue__1019639_pe831475_s5.jpg?f=xxs" },
            { id: 33, name: "Icicle Roof Lights", price: 29.99, category: "lights", rating: 4, image: "https://www.ikea.com/ph/en/images/products/praktspirea-4-piece-led-decorative-lighting-set-with-charging-tray__1122601_pe874635_s5.jpg?f=xxs" },
            { id: 34, name: "LED Curtain Lights", price: 27.49, category: "lights", rating: 5, image: "https://www.ikea.com/ph/en/images/products/getkal-led-lighting-chain-adjustable-color-battery-operated-outdoor__1457582_pe992740_s5.jpg?f=xxs" },
            { id: 35, name: "Color Changing Light Set", price: 32.99, category: "lights", rating: 5, image: "https://www.ikea.com/ph/en/images/products/solvinden-led-solar-powered-pendant-lamp-outdoor-globe-red-stripe__1019648_pe831481_s5.jpg?f=xxs" },
            { id: 36, name: "Battery Operated Lanterns", price: 21.49, category: "lights", rating: 4, image: "https://www.ikea.com/ph/en/images/products/solvinden-led-string-light-with-12-lights-battery-operated-outdoor-multicolor__1344542_pe949903_s5.jpg?f=xxs" },
            { id: 37, name: "Outdoor Net Lights", price: 26.99, category: "lights", rating: 4, image: "https://www.ikea.com/ph/en/images/products/vappeby-bluetooth-speaker-lamp-outdoor-blue__1069057_pe853723_s5.jpg?f=xxs" },
            { id: 38, name: "Snowflake Projector Light", price: 34.99, category: "lights", rating: 5, image: "https://www.ikea.com/ph/en/images/products/solvinden-led-solar-powered-pendant-lamp-outdoor-globe-light-blue__1019650_pe831482_s5.jpg?f=xxs" },
            { id: 39, name: "Tree Clip-On Candles", price: 22.99, category: "lights", rating: 4, image: "https://www.ikea.com/ph/en/images/products/solarvet-led-string-light-with-24-lights-outdoor-solar-powered-ball-white__0884092_pe711612_s5.jpg?f=xxs" },
            { id: 40, name: "Vintage Bulb Light Set", price: 28.49, category: "lights", rating: 5, image: "https://www.ikea.com/ph/en/images/products/akterport-led-string-light-with-40-lights-battery-operated-mini-pompon-white-gray__0957903_pe805148_s5.jpg?f=xxs" },
            // Trees
            { id: 41, name: "Classic Pine Tree 6ft", price: 149.99, category: "trees", rating: 5, image: "https://flowerstoryph.com/cdn/shop/products/image_652b3f41-24de-4f58-806f-4e3bd3cabaea_740x.jpg?v=1637318543" },
            { id: 42, name: "Flocked Alpine Tree 7ft", price: 189.99, category: "trees", rating: 5, image: "https://flowerstoryph.com/cdn/shop/products/image_d906caa4-f17b-4be1-93a5-4d21c6819e42_1024x1024@2x.jpg?v=1637318546" },
            { id: 43, name: "Slim Spruce Tree 6ft", price: 139.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_e942fec3-4a36-4aba-a120-051abdb1ffbe_1024x1024@2x.jpg?v=1637318548" },
            { id: 44, name: "Pre-Lit Fir Tree 7.5ft", price: 229.99, category: "trees", rating: 5, image: "https://flowerstoryph.com/cdn/shop/products/image_91e0e136-e6c0-4709-98af-aebc778a8d97_1024x1024@2x.jpg?v=1637318549" },
            { id: 45, name: "Tabletop Mini Tree", price: 39.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_adb041ec-b07a-421a-967e-4e573fedd8c2_1024x1024@2x.jpg?v=16373185500" },
            { id: 46, name: "Snowy Cedar Tree 5ft", price: 119.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_9da04c63-47db-4fe8-b7c6-db3132a29ab0_1024x1024@2x.jpg?v=1637318551" },
            { id: 47, name: "Fiber Optic Tree 6ft", price: 159.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_f7beb410-ec6b-4a7e-ae82-1d1f81a91bd8_1024x1024@2x.jpg?v=1637318557" },
            { id: 48, name: "Rustic Burlap Tree 4ft", price: 69.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_0f841d51-c6db-4f51-99fb-b275bb361809_1024x1024@2x.jpg?v=1637318557" },
            { id: 49, name: "Grand Norway Spruce 9ft", price: 319.99, category: "trees", rating: 5, image: "https://flowerstoryph.com/cdn/shop/products/image_652b3f41-24de-4f58-806f-4e3bd3cabaea_1024x1024@2x.jpg?v=1637318543" },
            { id: 50, name: "LED Birch Tree 6ft", price: 129.99, category: "trees", rating: 4, image: "https://flowerstoryph.com/cdn/shop/products/image_8d440a4d-4a4c-4a28-98b4-ba55461489f4_1024x1024@2x.jpg?v=1637318553" },
            // Wreaths
            { id: 51, name: "Evergreen Pine Wreath", price: 44.99, category: "wreaths", rating: 5, image: "https://i.etsystatic.com/56819737/r/il/f6876d/7434598388/il_600x600.7434598388_lt8z.jpg" },
            { id: 52, name: "Eucalyptus Berry Wreath", price: 49.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/61003585/r/il/807066/7433401449/il_600x600.7433401449_gm2q.jpg" },
            { id: 53, name: "Frosted Magnolia Wreath", price: 54.99, category: "wreaths", rating: 5, image: "https://i.etsystatic.com/57103270/c/758/758/144/257/il/83c770/7377551145/il_600x600.7377551145_4l76.jpg" },
            { id: 54, name: "Cranberry Pinecone Wreath", price: 42.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/56325795/c/986/986/270/210/il/07963d/7280165387/il_600x600.7280165387_9xv3.jpg" },
            { id: 55, name: "Rustic Burlap Wreath", price: 39.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/61073006/r/il/6f5923/7193882463/il_600x600.7193882463_2soz.jpg" },
            { id: 56, name: "Snowy Cedar Wreath", price: 46.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/60835471/c/1550/1550/224/224/il/6acee9/7100308179/il_600x600.7100308179_l14k.jpg" },
            { id: 57, name: "White Berry Wreath", price: 48.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/57103270/c/930/930/29/2/il/10d73f/7452048494/il_600x600.7452048494_23ai.jpg" },
            { id: 58, name: "Peppermint Swirl Wreath", price: 45.49, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/62330947/r/il/08ab86/7467261719/il_600x600.7467261719_7sfw.jpg" },
            { id: 59, name: "Golden Leaf Wreath", price: 52.49, category: "wreaths", rating: 5, image: "https://i.etsystatic.com/61003585/r/il/87adc3/7447059449/il_600x600.7447059449_r7fc.jpg" },
            { id: 60, name: "Minimal Pine Wreath", price: 34.99, category: "wreaths", rating: 4, image: "https://i.etsystatic.com/61003585/r/il/807066/7433401449/il_600x600.7433401449_gm2q.jpg" },
            // ... (additional products for all categories)
        ];

        const fallbackImage = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80";

        // Generate additional products to reach 30 per category
        function generateAdditionalProducts() {
            // No auto-generation; curated lists above
        }
        
        // Call function to generate additional products
        generateAdditionalProducts();

        // Add SALE flag to existing products (20% off) without duplicating items
        function addSaleProducts() {
            const saleCount = Math.min(20, products.length);
            const selected = products.slice(0, saleCount);

            selected.forEach(product => {
                if (product.onSale) return;
                product.originalPrice = product.price;
                product.price = parseFloat((product.price * 0.8).toFixed(2)); // 20% off
                product.onSale = true;
            });
        }
        
        addSaleProducts();

        // Navigation-linked auto-generation removed to keep only curated products
        function addNavigationProducts() {
            return;
        }

        // No-op call to preserve flow without adding products
        addNavigationProducts();

        // Cart data
        let cart = [];
        let currentPage = 1;
        const productsPerPage = 12;
        let currentCategory = 'all';

        // DOM Elements
        const pageLinks = document.querySelectorAll('[data-page]:not(.page-link)');
        const pageContents = document.querySelectorAll('.page-content');
        const cartIcon = document.getElementById('cartIcon');
        const cartSidebar = document.getElementById('cartSidebar');
        const closeCart = document.getElementById('closeCart');
        const overlay = document.getElementById('overlay');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const userIcon = document.getElementById('userIcon');
        const featuredProductsContainer = document.getElementById('featured-products');
        const shopProductsContainer = document.getElementById('shop-products');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const pagination = document.getElementById('pagination');
        const newsletterForm = document.getElementById('newsletterForm');
        const authForm = document.getElementById('auth-form');
        const toggleAuth = document.getElementById('toggleAuth');
        const authTitle = document.getElementById('auth-title');
        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            // Load featured products (random selection)
            loadFeaturedProducts();
            
            // Load shop products with pagination
            loadShopProducts();
            
            // Set up event listeners
            setupEventListeners();
            
            // Update cart count
            updateCartCount();

            // Ensure cart display starts at zero when empty
            updateCartDisplay();
        });

        // Load featured products (12 random products)
        function loadFeaturedProducts() {
            featuredProductsContainer.innerHTML = '';
            
            // Get 12 random products (with some sale items)
            const saleProducts = products.filter(p => p.onSale);
            const regularProducts = products.filter(p => !p.onSale);
            const shuffledSale = [...saleProducts].sort(() => 0.5 - Math.random()).slice(0, 4);
            const shuffledRegular = [...regularProducts].sort(() => 0.5 - Math.random()).slice(0, 8);
            const featuredProducts = [...shuffledSale, ...shuffledRegular].sort(() => 0.5 - Math.random());
            
            featuredProducts.forEach(product => {
                const productCard = createProductCard(product, null);
                featuredProductsContainer.appendChild(productCard);
            });
        }

        // Load shop products with current filter and pagination
        function loadShopProducts() {
            shopProductsContainer.innerHTML = '';
            
            // Filter products by category
            let filteredProducts = products;
            if (currentCategory === 'sale') {
                filteredProducts = products.filter(product => product.onSale);
            } else if (currentCategory !== 'all') {
                filteredProducts = products.filter(product => product.category === currentCategory);
            }
            
            // Sort filtered products by name then id for stable ordering
            filteredProducts = [...filteredProducts].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return a.id - b.id;
            });

            // Calculate pagination
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const pageProducts = filteredProducts.slice(startIndex, endIndex);
            
            // Display products
            pageProducts.forEach((product, idx) => {
                const displayNumber = startIndex + idx + 1;
                const productCard = createProductCard(product, displayNumber);
                shopProductsContainer.appendChild(productCard);
            });
            
            // Update pagination
            updatePagination(totalPages);
        }

        // Create product card HTML
        function createProductCard(product, displayNumber) {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 col-xl-3';
            
            // Create rating stars
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= product.rating) {
                    stars += '<i class="bi bi-star-fill"></i>';
                } else {
                    stars += '<i class="bi bi-star"></i>';
                }
            }
            
            // Check if product is on sale
            const saleBadge = product.onSale ? '<div class="sale-badge">SALE</div>' : '';
            const originalPrice = product.originalPrice ? `<del class="text-muted small">&#8369;${product.originalPrice.toFixed(2)}</del> ` : '';
            
            const numberBadge = typeof displayNumber === 'number'
                ? `<div class="number-badge">#${displayNumber}</div>`
                : '';

            col.innerHTML = `
                <div class="product-card">
                    <div class="position-relative">
                        ${saleBadge}
                        ${numberBadge}
                        <div class="category-badge">${product.category}</div>
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">${stars}</div>
                        <div class="product-price">${originalPrice}&#8369;${product.price.toFixed(2)}</div>
                        <button class="btn btn-success w-100 add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            
            return col;
        }

        // Update pagination
        function updatePagination(totalPages) {
            pagination.innerHTML = '';
            
            // Previous button
            const prevLi = document.createElement('li');
            prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
            prevLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>`;
            pagination.appendChild(prevLi);
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const li = document.createElement('li');
                li.className = `page-item ${i === currentPage ? 'active' : ''}`;
                li.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
                pagination.appendChild(li);
            }
            
            // Next button
            const nextLi = document.createElement('li');
            nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
            nextLi.innerHTML = `<a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>`;
            pagination.appendChild(nextLi);
        }

        // Apply category filter and refresh products
        function applyCategoryFilter(category) {
            currentCategory = category || 'all';
            currentPage = 1;

            categoryBtns.forEach(b => {
                b.classList.toggle('active', b.dataset.category === currentCategory);
            });

            loadShopProducts();
        }

        // Manage nav active state
        function setActiveNav(selectedLink) {
            pageLinks.forEach(link => {
                if (link.classList.contains('nav-link')) {
                    link.classList.remove('active');
                }
            });

            if (selectedLink && selectedLink.classList.contains('nav-link')) {
                selectedLink.classList.add('active');
            }
        }

        // Collapse nav on mobile after navigation
        function closeMobileMenus() {
            const navbarCollapse = document.getElementById('mainNavbar');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        }

        // Set up event listeners
        function setupEventListeners() {
            // Navigation links
            pageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.dataset.page) {
                        e.preventDefault();

                        if (this.dataset.page === 'shop' && this.dataset.category) {
                            applyCategoryFilter(this.dataset.category);
                        }

                        showPage(this.dataset.page);
                        setActiveNav(this);
                        closeMobileMenus();
                    }
                });
            });
            
            // Category filter buttons
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    applyCategoryFilter(this.dataset.category);
                });
            });
            
            // Pagination event delegation
            pagination.addEventListener('click', function(e) {
                e.preventDefault();
                if (e.target.tagName === 'A') {
                    const page = parseInt(e.target.dataset.page);
                    if (!isNaN(page)) {
                        currentPage = page;
                        loadShopProducts();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            });
            
            // Cart icon
            cartIcon.addEventListener('click', function() {
                cartSidebar.classList.add('active');
                overlay.classList.add('active');
                updateCartDisplay();
            });
            
            // Close cart
            closeCart.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            // Overlay click
            overlay.addEventListener('click', function() {
                cartSidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            // User icon (go to registration page)
            userIcon.addEventListener('click', function() {
                showPage('register');
                
                // Update active nav link
                setActiveNav(null);
                closeMobileMenus();
            });
            
            // Checkout button
            checkoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    showNotification('Your cart is empty!', 'danger');
                    return;
                }
                
                showNotification('Proceeding to checkout!', 'success');
                cart = [];
                updateCartCount();
                updateCartDisplay();
                cartSidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
            
            // Newsletter form
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                showNotification(`Thank you for subscribing with ${email}!`, 'success');
                this.reset();
            });
            
            // Auth form toggle
            toggleAuth.addEventListener('click', function(e) {
                e.preventDefault();
                toggleAuthForm();
            });
            
            // Auth form submission
            if (authForm) {
                authForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    handleAuthSubmit();
                });
            }
            
            // Event delegation for add to cart buttons
            document.addEventListener('click', function(e) {
                // Add to cart button
                if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                    const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                    const productId = parseInt(button.dataset.id);
                    addToCart(productId);
                }
                
                // Remove item from cart
                if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
                    const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
                    const productId = parseInt(button.dataset.id);
                    removeFromCart(productId);
                }
                
                // Collection cards
                if (e.target.closest('.collection-card')) {
                    const card = e.target.closest('.collection-card');
                    const title = card.querySelector('h3').textContent;
                    
                    if (title === 'Christmas Decors') {
                        showPage('shop');
                        // Set Christmas category filter
                        categoryBtns.forEach(b => b.classList.remove('active'));
                        document.querySelector('[data-category="ornaments"]').classList.add('active');
                        currentCategory = 'ornaments';
                        currentPage = 1;
                        loadShopProducts();
                    }
                }
            });

        }

        // Show specific page
        function showPage(page) {
            // Hide all pages
            pageContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(`${page}-page`).classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Show hero on home page
            const hero = document.getElementById('home-hero');
            if (page === 'home') {
                hero.style.display = 'block';
            } else {
                hero.style.display = 'none';
            }
        }

        // Toggle auth form between login and registration
        function toggleAuthForm() {
            if (authTitle.textContent === 'Create Account') {
                // Switch to login
                authTitle.textContent = 'Login to Your Account';
                authForm.innerHTML = `
                    <div class="mb-3">
                        <label for="loginEmail" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="loginEmail" required>
                    </div>
                    <div class="mb-3">
                        <label for="loginPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="loginPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                `;
                toggleAuth.textContent = 'Create an account';
            } else {
                // Switch to registration
                authTitle.textContent = 'Create Account';
                authForm.innerHTML = `
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required>
                        </div>
                        <div class="col-md-6">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                `;
                toggleAuth.textContent = 'Login here';
            }
        }

        // Handle auth form submission
        function handleAuthSubmit() {
            if (authTitle.textContent === 'Create Account') {
                // Registration
                const fullName = document.getElementById('fullName').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    showNotification('Passwords do not match!', 'danger');
            return;
        }

                showNotification(`Account created successfully for ${fullName}!`, 'success');
                toggleAuthForm(); // Switch to login
            } else {
                // Login
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                showNotification(`Logged in successfully as ${email}!`, 'success');
                showPage('home'); // Redirect to home
                
                // Update nav to show home as active
                setActiveNav(document.querySelector('[data-page="home"]'));
            }
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCartCount();
            updateCartDisplay();
            
            // Show feedback
            showNotification(`${product.name} added to cart!`, 'success');
        }

        // Remove product from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            updateCartDisplay();
            showNotification('Item removed from cart', 'info');
        }

        // Update cart count in header
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Update cart display in sidebar
        function updateCartDisplay() {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="bi bi-cart3" style="font-size: 3rem;"></i>
                        <p class="mt-3">Your cart is empty</p>
                    </div>
                `;
                cartTotal.textContent = '0.00';
                return;
            }
            
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid">
                    </div>
                    <div class="cart-item-details flex-grow-1">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">&#8369;${item.price.toFixed(2)} Ã— ${item.quantity}</div>
                    </div>
                    <button class="btn btn-link text-danger p-0 remove-item" data-id="${item.id}">
                        <i class="bi bi-trash"></i>
                    </button>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            cartTotal.textContent = `&#8369;${total.toFixed(2)}`;
        }

        // Show notification
        function showNotification(message, type = 'success') {
            // Remove existing notifications
            document.querySelectorAll('.notification').forEach(el => el.remove());
            
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            
            // Set color based on type
            if (type === 'success') {
                notification.style.backgroundColor = 'var(--primary-green)';
            } else if (type === 'danger') {
                notification.style.backgroundColor = 'var(--primary-red)';
            } else {
                notification.style.backgroundColor = 'var(--primary-gold)';
                notification.style.color = 'var(--text-dark)';
            }
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
    

