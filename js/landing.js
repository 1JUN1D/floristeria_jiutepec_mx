// ===================================
// LANDING PAGE JS - Glow Flowers Jiutepec
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, name: "Ramo de 12 Rosas a Dos Tonalidades y Fino Follaje", price: 575, image: "../assets/foto1.webp", description: "Hermoso ramo elaborado con una docena de rosas combinadas en dos tonalidades, acompañadas de un selecto follaje fino para realzar su elegancia. Ideal para ocasiones románticas y detalles especiales.", categories: ["ramos", "precio-bajo"] },
    { id: 2, name: "Ramo de Astromelias Amarillas con Rosas en Dos Tonalidades y Fino Follaje", price: 750, image: "../assets/foto2.webp", description: "Alegre composición con astromelias amarillas combinadas con rosas en dos tonos contrastantes y un follaje fino que completa el diseño. Un arreglo vibrante perfecto para iluminar cualquier espacio.", categories: ["ramos", "precio-bajo"] },
    { id: 3, name: "Ramo de Margaritas con Yoko", price: 375, image: "../assets/foto3.webp", description: "Delicado ramo elaborado con margaritas frescas y yoko, una combinación natural y fresca que transmite sencillez y ternura. Ideal como obsequio espontáneo.", categories: ["ramos", "precio-bajo"] },
    { id: 4, name: "Bouquet de 24 Rosas", price: 738, image: "../assets/foto4.webp", description: "Imponente bouquet con dos docenas de rosas seleccionadas, arregladas con esmero para crear un impacto visual sobresaliente. La opción clásica para declaraciones de amor y momentos inolvidables.", categories: ["ramos", "precio-bajo"] },
    { id: 5, name: "Ramo Combinado con Rosas, Hortencias, Clavellines y Finos Follajes", price: 1025, image: "../assets/foto5.webp", description: "Exquisita mezcla floral que integra rosas, hortensias, clavellines y follajes finos en una composición armoniosa. Un diseño sofisticado para quienes buscan algo fuera de lo común.", categories: ["ramos", "precio-medio"] },
    { id: 6, name: "Ramo de 12 Rosas con Finos Follajes", price: 688, image: "../assets/foto6.webp", description: "Ramo tradicional con doce rosas frescas acompañadas por una cuidadosa selección de follajes finos. Una propuesta atemporal que nunca pasa de moda en cualquier celebración.", categories: ["ramos", "precio-bajo"] },
    { id: 7, name: "Ramo de Rosas con Clavellín y Finos Follajes", price: 438, image: "../assets/foto7.webp", description: "Armoniosa combinación de rosas con clavellín y follajes finos que aporta color y textura. Una opción accesible y encantadora para cualquier ocasión.", categories: ["ramos", "precio-bajo"] },
    { id: 8, name: "Ramo de Girasoles", price: 463, image: "../assets/foto8.webp", description: "Radiante ramo compuesto por girasoles que evocan alegría y vitalidad. Perfecto para transmitir buenos deseos y llenar de luz cualquier ambiente.", categories: ["ramos", "precio-bajo"] },
    { id: 9, name: "Ramo de Tulipán Holandés (10 Tallos)", price: 1063, image: "../assets/foto9.webp", description: "Elegante ramo con diez tallos de tulipán holandés importado, distinguidos por su frescura y belleza natural. Una propuesta refinada para obsequios distinguidos.", categories: ["ramos", "precio-medio"] },
    { id: 10, name: "Ramo de Gerberas con Margaritas Tono Ocre y Fino Follaje", price: 613, image: "../assets/foto10.webp", description: "Ramo con gerberas y margaritas en cálidos tonos ocre complementadas por un follaje fino. Un diseño contemporáneo con una paleta otoñal encantadora.", categories: ["ramos", "precio-bajo"] },
    { id: 11, name: "Ramo de Gerberas con Finos Follajes y Accesorio de Mariposas", price: 663, image: "../assets/foto11.webp", description: "Bouquet de gerberas con follaje fino decorado con un delicado accesorio de mariposas. Un toque juguetón y colorido ideal para regalar alegría.", categories: ["ramos", "precio-bajo"] },
    { id: 12, name: "Ramo de Rosas y Gerberas con Finos Follajes", price: 713, image: "../assets/foto12.webp", description: "Composición mixta que combina la elegancia de las rosas con la frescura de las gerberas, complementada con follajes finos. Versátil para múltiples ocasiones.", categories: ["ramos", "precio-bajo"] },
    { id: 13, name: "Corazón de Rosas y Chocolates Ferrero con Accesorio de Mariposas", price: 1025, image: "../assets/foto13.webp", description: "Arreglo en forma de corazón con rosas y chocolates Ferrero Rocher, adornado con un detalle de mariposas. Una declaración perfecta para aniversarios y San Valentín.", categories: ["corazones", "precio-medio"] },
    { id: 14, name: "Corazón de Rosas, Margaritas y Chocolates Ferrero", price: 813, image: "../assets/foto14.webp", description: "Corazón floral que mezcla rosas y margaritas con la dulzura de los chocolates Ferrero Rocher. Un regalo que combina lo estético con lo delicioso.", categories: ["corazones", "precio-bajo"] },
    { id: 15, name: "Caja Floral con Rosas, Minirosas y Finos Follajes", price: 1313, image: "../assets/foto15.webp", description: "Caja decorativa llena de rosas, minirosas y follajes finos cuidadosamente dispuestos. Una presentación lujosa que sorprende por su estética refinada.", categories: ["cajas", "precio-medio"] },
    { id: 16, name: "Caja Floral con Rosas Rojas, Botella de Vino (750 ml) y Chocolates Ferrero (16 pzas)", price: 1813, image: "../assets/foto16.webp", description: "Exclusiva caja floral con rosas rojas acompañada por una botella de vino de 750 ml y 16 piezas de chocolates Ferrero Rocher. Una experiencia completa para engreír al ser querido.", categories: ["cajas", "especiales", "precio-medio"] },
    { id: 17, name: "Caja Floral de Luxe con Flores Finas, Follajes y Orquídea Doble Vara", price: 2438, image: "../assets/foto17.webp", description: "Caja de lujo con una selección premium de flores finas, follajes y una orquídea de doble vara como pieza central. La opción definitiva para quienes buscan distinción.", categories: ["cajas", "premium", "precio-medio"] },
    { id: 18, name: "Caja Floral con Orquídea Doble Vara, Astromelias y Clavel", price: 1188, image: "../assets/foto18.webp", description: "Refinada caja decorada con una orquídea de doble vara, astromelias y claveles que crean un balance visual impactante. Un detalle memorable para ocasiones relevantes.", categories: ["cajas", "precio-medio"] },
    { id: 19, name: "Orquídea Doble Vara en Papel Floral", price: 738, image: "../assets/foto19.webp", description: "Sofisticada orquídea de doble vara presentada en un envoltorio de papel floral. Una pieza exótica y duradera para quienes aprecian la belleza singular.", categories: ["ramos", "precio-bajo"] },
    { id: 20, name: "Ramo de Rosas y Astromelias", price: 813, image: "../assets/foto20.webp", description: "Armonioso ramo que une rosas y astromelias en un conjunto colorido y lleno de vida. Una combinación fresca y clásica a la vez.", categories: ["ramos", "precio-bajo"] },
    { id: 21, name: "Ramo de Rosas con Fino Follaje", price: 438, image: "../assets/foto21.webp", description: "Sencillo pero elegante ramo con rosas seleccionadas acompañadas de un follaje fino. Una propuesta clásica que siempre acierta.", categories: ["ramos", "precio-bajo"] },
    { id: 22, name: "Caja Floral con Flores Combinadas (Rosas, Orquídea, Gerberas, Astromelias y Follaje)", price: 1500, image: "../assets/foto22.webp", description: "Caja floral elaborada con una exquisita mezcla de rosas, orquídea, gerberas, astromelias y follaje. Una explosión de color y textura perfecta como obsequio especial.", categories: ["cajas", "precio-medio"] },
    { id: 23, name: "Bandeja Floral & Frutal (Flores Combinadas + Frutas de Temporada)", price: 1375, image: "../assets/foto23.webp", description: "Creativa bandeja que combina flores variadas con frutas frescas de temporada. Una opción original y saludable para celebrar con estilo.", categories: ["especiales", "precio-medio"] },
    { id: 24, name: "Bandeja Cumpleañera (Flores, Pastel 3 Leches, Chocolates Kisses, Galletas Macma)", price: 1438, image: "../assets/foto24.webp", description: "Bandeja para cumpleaños que reúne flores, pastel de tres leches, chocolates Kisses y galletas Macma. Una sorpresa completa para celebrar el día especial con dulzura.", categories: ["especiales", "precio-medio"] },
    { id: 25, name: "Bandeja Cumpleañera con Globos (Flores, Pastel 3 Leches, Bebida, Chocolates y 2 Snacks)", price: 1688, image: "../assets/foto25.webp", description: "Completísima bandeja de cumpleaños con flores, pastel de tres leches, bebida, chocolates, dos snacks y globos decorativos. El paquete ideal para una celebración memorable.", categories: ["especiales", "precio-medio"] }
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
    const url = 'https://wa.me/5217775382121?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
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
    const url = `https://wa.me/5217775382121?text=${encodedMessage}`;
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
