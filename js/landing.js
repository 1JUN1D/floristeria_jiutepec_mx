// ===================================
// LANDING PAGE JS - Amerixa Jiutepec
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, name: "Ramo Azul Cielo con Girasol y Lilies", price: 500, image: "../assets/foto1.webp", description: "Ramo en papel azul cielo y blanco con girasol, lilies orientales, rosas rojas, alstroemeria rosa, perrito, mini rosas spray, aster morado y solidago.", categories: ["ramos", "precio-bajo"] },
    { id: 2, name: "Ramo Azul con Gerberas y Girasol", price: 438, image: "../assets/foto2.webp", description: "Ramo en papel azul cielo con gerberas rojas, girasol, rosas rojas, aster morado, gypsophila y solidago. Moño de rafia roja.", categories: ["ramos", "precio-bajo"] },
    { id: 3, name: "Ramo Verde Olivo con Lilies Orientales", price: 350, image: "../assets/foto3.webp", description: "Ramo en papel verde olivo con lilies orientales rosas y amarillos, gypsophila, statice morado, solidago y helecho.", categories: ["ramos", "precio-bajo"] },
    { id: 4, name: "Ramo Rosa y Fucsia con Rosas", price: 375, image: "../assets/foto4.webp", description: "Ramo en doble papel rosa y fucsia con rosas rosas, alstroemeria, mini rosas spray, crisantemos blancos y gypsophila.", categories: ["ramos", "precio-bajo"] },
    { id: 5, name: "Ramo Rojo con Gerberas Multicolor", price: 313, image: "../assets/foto5.webp", description: "Ramo en papel rojo con gerberas multicolor (rojas, fucsias, amarillas, naranjas, blancas), gypsophila y aster morado.", categories: ["ramos", "precio-bajo"] },
    { id: 6, name: "Ramo Lila con Rosas Fiusha", price: 375, image: "../assets/foto6.webp", description: "Ramo en papel lila con rosas fiusha, gerbera blanca, aster morado, gypsophila, solidago y eucalipto.", categories: ["ramos", "precio-bajo"] },
    { id: 7, name: "Ramo Rosa Pastel con Lilies en Botón", price: 438, image: "../assets/foto7.webp", description: "Ramo en papel rosa pastel con lilies orientales en botón, margaritas blancas, aster morado, mini rosas spray y gypsophila rosa.", categories: ["ramos", "precio-bajo"] },
    { id: 8, name: "Ramo Grande Verde Salvia con Girasol", price: 500, image: "../assets/foto8.webp", description: "Ramo grande en papel verde salvia con girasol, gerbera fucsia, lily oriental rosa, gerbera blanca, mini rosas spray y gypsophila.", categories: ["ramos", "precio-bajo"] },
    { id: 9, name: "Ramo Elegante Negro con Borde Dorado", price: 563, image: "../assets/foto9.webp", description: "Ramo elegante en papel negro con borde dorado, gerberas multicolor, lilies amarillos, perrito rosa salmón, rosas rosas y aster morado.", categories: ["ramos", "precio-bajo"] },
    { id: 10, name: "Ramo Delicado Rosa con Lilies Blancos", price: 563, image: "../assets/foto10.webp", description: "Ramo delicado en papel rosa pastel con lilies blancos, gerberas blancas, rosas rosas, aster lila, gypsophila y follaje de viburno.", categories: ["ramos", "precio-bajo"] },
    { id: 11, name: "Ramo Rojo y Rosa con Eucalipto", price: 500, image: "../assets/foto11.webp", description: "Ramo en doble papel rojo y rosa con gerberas rojas y rosas, rosas rojas y rosas, eucalipto plateado y ramas de bupleurum.", categories: ["ramos", "precio-bajo"] },
    { id: 12, name: "Centro de Mesa Rosa con Lilies", price: 750, image: "../assets/foto12.webp", description: "Arreglo redondo tipo centro de mesa en tonos rosas con lilies orientales, gerberas rosas y coral, rosas, crisantemos morados y gypsophila.", categories: ["centros-mesa", "precio-bajo"] },
    { id: 13, name: "Centro de Mesa Clásico Rosas Blancas", price: 4375, image: "../assets/foto13.webp", description: "Arreglo redondo tipo centro de mesa con rosas blancas, gypsophila abundante, aster morado y follaje variado. Estilo clásico y elegante.", categories: ["centros-mesa", "premium", "precio-alto"] },
    { id: 14, name: "Pedestal Triangular con Girasoles", price: 2500, image: "../assets/foto14.webp", description: "Arreglo alto tipo pedestal triangular con girasoles, lilies blancos y rosas, gerberas multicolor, margaritas y abundante follaje de palma.", categories: ["pedestales", "precio-medio"] },
    { id: 15, name: "Pedestal Triangular con Lilies Rosas", price: 2500, image: "../assets/foto15.webp", description: "Arreglo alto tipo pedestal triangular con lilies orientales rosas, rosas fiusha, gerberas blancas y rosas, gypsophila y follaje de palma.", categories: ["pedestales", "precio-medio"] },
    { id: 16, name: "Pedestal con Girasoles Protagonistas", price: 2875, image: "../assets/foto16.webp", description: "Arreglo tipo pedestal con girasoles como protagonistas, rosas rojas, gypsophila, eucalipto plateado y follaje de palma.", categories: ["pedestales", "precio-alto"] },
    { id: 17, name: "Arreglo Escultural Rosas y Lilies", price: 1250, image: "../assets/foto17.webp", description: "Arreglo escultural con rosas rojas en forma curva ascendente, lilies blancos y rosas al centro, gypsophila y hojas de palma abanico.", categories: ["pedestales", "precio-medio"] },
    { id: 18, name: "Cofre de Madera con Rosas Rojas", price: 3125, image: "../assets/foto18.webp", description: "Cofre de madera gris con rosas rojas en filas uniformes. Tapa grabada con dedicatoria especial. Presentación tipo caja regalo romántica.", categories: ["cajas", "precio-alto"] },
    { id: 19, name: "Caja Cumpleaños con Girasoles y Chocolates", price: 3250, image: "../assets/foto19.webp", description: "Caja negra con corazones, rosas rojas y girasoles, globo de Feliz Cumpleaños y chocolates Ferrero Rocher. Arreglo de celebración.", categories: ["cajas", "especiales", "precio-alto"] },
    { id: 20, name: "Pedestal Rosa con Lilies y Gypsophila", price: 750, image: "../assets/foto20.webp", description: "Arreglo alto tipo pedestal triangular con rosas rosas, lilies orientales rosas, gypsophila abundante y hojas de palma abanico. Tonalidad rosa.", categories: ["pedestales", "precio-bajo"] },
    { id: 21, name: "Arreglo Escultural Alto con Chocolates", price: 5000, image: "../assets/foto21.webp", description: "Arreglo escultural alto con rosas rojas y bicolor en línea curva, gerberas rojas y naranjas, girasoles y chocolates Ferrero Rocher.", categories: ["especiales", "premium", "precio-alto"] },
    { id: 22, name: "Corazón de Rosas Rojas y Blancas", price: 3125, image: "../assets/foto22.webp", description: "Arreglo en forma de corazón con rosas rojas y blancas, diseño de corazón dentro de corazón. Base de hojas verdes.", categories: ["corazones", "precio-alto"] },
    { id: 23, name: "Tapete Floral Ovalado de Rosas Rojas", price: 6000, image: "../assets/foto23.webp", description: "Arreglo ovalado grande con rosas rojas en filas, gypsophila blanca y hojas de palma verde. Estilo tipo tapete floral compacto.", categories: ["especiales", "premium", "precio-alto"] },
    { id: 24, name: "Pedestal Triangular Girasoles y Rosas", price: 1875, image: "../assets/foto24.webp", description: "Arreglo alto tipo pedestal triangular con girasoles en la cima, lilies blancos al centro, rosas rojas, margaritas y solidago.", categories: ["pedestales", "precio-medio"] },
    { id: 25, name: "Domo Monumental Rosas Rojas y Lilies", price: 6250, image: "../assets/foto25.webp", description: "Arreglo monumental redondo con rosas rojas y lilies blancos como acento lateral. Forma de domo muy compacto y voluminoso.", categories: ["especiales", "premium", "precio-alto"] },
    { id: 26, name: "Corona Fúnebre Colorida Crisantemos", price: 3125, image: "../assets/foto26.webp", description: "Corona fúnebre circular con crisantemos amarillos y morados, lilies amarillos, rosas rosas, mini rosas spray y gypsophila. Base de palma.", categories: ["coronas-funebres", "precio-alto"] },
    { id: 27, name: "Corona Fúnebre Grande con Girasoles", price: 6250, image: "../assets/foto27.webp", description: "Corona fúnebre circular en tripié, muy colorida, con girasoles, rosas, crisantemos, gerberas, claveles naranjas y hojas de palma abanico.", categories: ["coronas-funebres", "premium", "precio-alto"] },
    { id: 28, name: "Corona Fúnebre Tricolor", price: 2500, image: "../assets/foto28.webp", description: "Corona fúnebre circular con franjas de crisantemos blancos y claveles rojos, lilies naranjas y amarillos, gerberas y gypsophila.", categories: ["coronas-funebres", "precio-medio"] },
    { id: 29, name: "Corona Fúnebre con Cabeceras de Lilies", price: 3125, image: "../assets/foto29.webp", description: "Corona fúnebre circular con franjas de crisantemos blancos, claveles rojos y crisantemos amarillos. Cabeceras con lilies y margaritas.", categories: ["coronas-funebres", "precio-alto"] },
    { id: 30, name: "Corona Fúnebre Blanca con Acentos Rojos", price: 3125, image: "../assets/foto30.webp", description: "Corona fúnebre circular blanca con acentos de claveles rojos y crisantemos amarillos. Cabeceras con lilies amarillos y rosas rojas.", categories: ["coronas-funebres", "precio-alto"] },
    { id: 31, name: "Corona Fúnebre Completamente Blanca", price: 3750, image: "../assets/foto31.webp", description: "Corona fúnebre circular completamente blanca con crisantemos, margaritas, lilies blancos y gypsophila. Estilo sobrio y elegante.", categories: ["coronas-funebres", "precio-alto"] },
    { id: 32, name: "Corazón Abierto Cumpleaños con Chocolates", price: 4750, image: "../assets/foto32.webp", description: "Arreglo en forma de corazón abierto con rosas rosas, gypsophila, letrero Feliz Cumple, girasoles y chocolates Ferrero Rocher.", categories: ["corazones", "especiales", "precio-alto"] },
    { id: 33, name: "Corazón Te Amo Crisantemos y Claveles", price: 2500, image: "../assets/foto33.webp", description: "Arreglo en forma de corazón con Te Amo en crisantemos blancos sobre claveles rojos. Borde de rosas rojas y gypsophila.", categories: ["corazones", "precio-medio"] },
    { id: 34, name: "Corazón Abierto Grande Rosas y Lilies", price: 7500, image: "../assets/foto34.webp", description: "Arreglo grande en forma de corazón abierto con rosas rosas y blancas, lilies rosas, crisantemos lila, gypsophila y eucalipto.", categories: ["corazones", "premium", "precio-alto"] },
    { id: 35, name: "Caja Corazón Lila con Chocolates", price: 2750, image: "../assets/foto35.webp", description: "Caja en forma de corazón lila con rosas rosas y fiusha, statice morado y chocolates Ferrero Rocher.", categories: ["cajas", "precio-alto"] },
    { id: 36, name: "Caja Corazón Roja con Chocolates", price: 3125, image: "../assets/foto36.webp", description: "Caja en forma de corazón roja con rosas rosas y fiusha, statice morado y chocolates Ferrero Rocher.", categories: ["cajas", "precio-alto"] },
    { id: 37, name: "Caja Corazón Negra de Rosas Rojas", price: 3750, image: "../assets/foto37.webp", description: "Caja en forma de corazón negra con moño rojo, llena de rosas rojas compactas y uniformes. Presentación lujosa.", categories: ["cajas", "premium", "precio-alto"] },
    { id: 38, name: "Arreglo con Osito y Globos", price: 2000, image: "../assets/foto38.webp", description: "Arreglo en base de mimbre con arco de eucalipto, burbuja transparente con osito tejido y globos rosas. Base con lilies rosas, rosas lila y gypsophila.", categories: ["especiales", "precio-medio"] },
    { id: 39, name: "Cruz Fúnebre de Claveles Blancos", price: 750, image: "../assets/foto39.webp", description: "Cruz fúnebre de claveles blancos/crema con rosas rojas y gypsophila al centro. Base de hojas de palma. Estilo solemne. Disponible en: Chica $750 | Mediana $1,063 | Grande $1,438.", categories: ["coronas-funebres", "precio-bajo"] },
    { id: 40, name: "Centro de Mesa Girasoles y Lilies", price: 500, image: "../assets/foto40.webp", description: "Centro de mesa con girasoles, lily blanco, rosas blancas, gypsophila y solidago. Tonalidad blanca y amarilla, fresco y luminoso.", categories: ["centros-mesa", "precio-bajo"] },
    { id: 41, name: "Centro de Mesa con Pecera Rosa Pastel", price: 750, image: "../assets/foto41.webp", description: "Centro de mesa con pecera. Arreglo redondo bajo en tonos rosa pastel con rosas, gerberas, crisantemos, gypsophila y eucalipto.", categories: ["centros-mesa", "precio-bajo"] },
    { id: 42, name: "Topiario de Alstroemeria", price: 225, image: "../assets/foto42.webp", description: "Centro de mesa con alstroemeria. Topiario con alstroemeria rosa en la parte superior y base de lilies blancos, gypsophila y aspidistra.", categories: ["centros-mesa", "precio-bajo"] },
    { id: 43, name: "Centro de Mesa Hortensia y Rosas", price: 1000, image: "../assets/foto43.webp", description: "Centro de mesa con hortensia y rosas en florero craquelado (tonos plata, dorado y rosa). Incluye delphiniums azules, crisantemos amarillos y follaje.", categories: ["centros-mesa", "precio-medio"] },
    { id: 44, name: "Bouquet Sorpresa con Corazón de Gypsophila", price: 625, image: "../assets/foto44.webp", description: "Ramo con dedicatoria sorpresa. Bouquet con corazón central de gypsophila, rodeado de lilies rosas, crisantemos, alstroemeria y aster morado.", categories: ["ramos", "precio-bajo"] },
    { id: 45, name: "Ramo 5 Docenas Rosas Durazno", price: 2500, image: "../assets/foto45.webp", description: "Ramo rosa hermosa, 5 docenas con malla y papel coreano. Rosas color durazno/nude en forma redonda y compacta, adornado con collar de perlas.", categories: ["ramos", "premium", "precio-medio"] },
    { id: 46, name: "Mini Bouquet de Girasol", price: 125, image: "../assets/foto46.webp", description: "Pieza de girasol. Bouquet pequeño con girasol, gypsophila rosa y helecho, envuelto en papel beige con moño rosa.", categories: ["ramos", "precio-bajo"] },
    { id: 47, name: "Arreglo Hortensia y Rosas en Cerámica", price: 1125, image: "../assets/foto47.webp", description: "Arreglo con hortensia y rosas en base cilíndrica de cerámica. Rosas salmón, hortensia azul, crisantemo lila, perritos y liatris morada.", categories: ["especiales", "precio-medio"] },
    { id: 48, name: "Arreglo de Graduación con Globo", price: 563, image: "../assets/foto48.webp", description: "Arreglo para graduación con globo personalizado. Base de girasoles, rosas amarillas, gypsophila y trigo seco.", categories: ["especiales", "precio-bajo"] },
    { id: 49, name: "Arreglo Flores con Maquillaje y Skincare", price: 1875, image: "../assets/foto49.webp", description: "Arreglo con flores, mascarillas y maquillaje. Rosas rosas, fiusha y blancas con productos de belleza y skincare. Ideal como regalo.", categories: ["especiales", "precio-medio"] },
    { id: 50, name: "Decoración Floral para Eventos", price: 0, image: "../assets/foto50.webp", description: "Servicio de decoración floral para eventos, bodas y celebraciones. Incluye centros de mesa, caminos florales, arreglos de piso y ambientación completa. Cotización personalizada.", categories: ["decoracion"] },
    { id: 51, name: "Decoración Floral para Bodas", price: 0, image: "../assets/foto51.webp", description: "Decoración floral para bodas con estilo elegante y romántico. Tonalidades en blancos, verdes y cremas con eucalipto, rosas blancas, hortensias y lisianthus. Cotización personalizada.", categories: ["decoracion"] },
    { id: 52, name: "Centros de Mesa Altos para Eventos", price: 0, image: "../assets/foto52.webp", description: "Centros de mesa altos y bajos para eventos y celebraciones. Diseños con gladiolas, gypsophila, rosas y follaje natural. Se adapta a espacios interiores y jardines. Cotización personalizada.", categories: ["decoracion"] },
    { id: 53, name: "Caminos de Mesa Florales", price: 0, image: "../assets/foto53.webp", description: "Caminos de mesa florales para banquetes y recepciones. Eucalipto, rosas blancas, hortensias y velas decorativas. Estilo elegante y sofisticado. Cotización personalizada.", categories: ["decoracion"] },
    { id: 54, name: "Arreglos de Piso con Velas", price: 0, image: "../assets/foto54.webp", description: "Arreglos florales de piso con velas para ceremonias y eventos especiales. Diseños románticos adaptados a haciendas y jardines. Cotización personalizada.", categories: ["decoracion"] },
    { id: 55, name: "Bouquet de Novia", price: 0, image: "../assets/foto55.webp", description: "Bouquet de novia personalizado con rosas blancas, lisianthus, eucalipto y gypsophila. Diseño romántico y sofisticado para el día más especial. Cotización personalizada.", categories: ["decoracion"] },
    { id: 56, name: "Ambientación Floral Completa", price: 0, image: "../assets/foto56.webp", description: "Servicio completo de ambientación floral para eventos. Incluye todo: centros de mesa, caminos florales, arreglos de piso, bouquet de novia y decoración integral. Cotización personalizada.", categories: ["decoracion"] }
];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    if (price === 0) return 'Cotización';
    return new Intl.NumberFormat('es-MX', {
        style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products;

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes)
    if (currentSearchQuery) {
        const query = removeAccents(currentSearchQuery);
        productsToDisplay = productsToDisplay.filter(p => {
            const name = removeAccents(p.name);
            const desc = removeAccents(p.description);
            const cats = p.categories ? p.categories.map(c => removeAccents(c)).join(' ') : '';
            return name.includes(query) || desc.includes(query) || cats.includes(query);
        });
    }

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    // Intercalar productos para variedad visual (solo en vista general sin búsqueda)
    if ((!filters.length || filters[0] === 'todos') && !currentSearchQuery) {
        const funebre = productsToDisplay.filter(p => p.categories.includes('funebre'));
        const noFunebre = productsToDisplay.filter(p => !p.categories.includes('funebre'));

        const categoryGroups = {};
        const categoryOrder = ['ramos', 'centros-mesa', 'pedestales', 'corazones', 'cajas', 'coronas-funebres', 'especiales', 'decoracion', 'premium'];

        noFunebre.forEach(p => {
            const mainCat = categoryOrder.find(c => p.categories.includes(c)) || 'otros';
            if (!categoryGroups[mainCat]) categoryGroups[mainCat] = [];
            categoryGroups[mainCat].push(p);
        });

        Object.values(categoryGroups).forEach(group => {
            group.sort((a, b) => a.price - b.price);
            const temp = [];
            let lo = 0, hi = group.length - 1;
            let pickHigh = true;
            while (lo <= hi) {
                if (pickHigh) { temp.push(group[hi--]); }
                else { temp.push(group[lo++]); }
                pickHigh = !pickHigh;
            }
            group.length = 0;
            group.push(...temp);
        });

        const interleaved = [];
        const activeCats = categoryOrder.filter(c => categoryGroups[c] && categoryGroups[c].length > 0);
        if (categoryGroups['otros'] && categoryGroups['otros'].length > 0) activeCats.push('otros');

        let maxLen = Math.max(...activeCats.map(c => categoryGroups[c].length));
        for (let i = 0; i < maxLen; i++) {
            for (const cat of activeCats) {
                if (categoryGroups[cat] && i < categoryGroups[cat].length) {
                    interleaved.push(categoryGroups[cat][i]);
                }
            }
        }

        productsToDisplay = [...interleaved, ...funebre];
    }

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const productHTML = `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Jiutepec" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// --- FUNCIONES DE WHATSAPP ---
function contactWA() {
    const url = 'https://wa.me/5217771626940?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18090168298/fkGRCL_flJwcEOqfiLJD',
            'value': 1.0,
            'currency': 'MXN',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price) {
    const message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/5217771626940?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18090168298/fkGRCL_flJwcEOqfiLJD',
            'value': 1.0,
            'currency': 'MXN',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar si no hay un script en la página que lo haga
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
