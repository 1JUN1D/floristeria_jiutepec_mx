// ===================================
// LANDING PAGE JS - Glow Flowers Jiutepec
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
    { id: 1, name: "Ramo de 12 Rosas a Dos Tonalidades y Fino Follaje", price: 750, image: "../assets/foto1.webp", description: "Hermoso ramo elaborado con una docena de rosas combinadas en dos tonalidades, acompañadas de un selecto follaje fino para realzar su elegancia. Ideal para ocasiones románticas y detalles especiales.", categories: ["ramos", "precio-bajo"] },
    { id: 2, name: "Ramo de Astromelias Amarillas con Rosas en Dos Tonalidades y Fino Follaje", price: 938, image: "../assets/foto2.webp", description: "Alegre composición con astromelias amarillas combinadas con rosas en dos tonos contrastantes y un follaje fino que completa el diseño. Un arreglo vibrante perfecto para iluminar cualquier espacio.", categories: ["ramos", "precio-bajo"] },
    { id: 3, name: "Ramo de Margaritas con Yoko", price: 563, image: "../assets/foto3.webp", description: "Delicado ramo elaborado con margaritas frescas y yoko, una combinación natural y fresca que transmite sencillez y ternura. Ideal como obsequio espontáneo.", categories: ["ramos", "precio-bajo"] },
    { id: 4, name: "Bouquet de 24 Rosas", price: 788, image: "../assets/foto4.webp", description: "Imponente bouquet con dos docenas de rosas seleccionadas, arregladas con esmero para crear un impacto visual sobresaliente. La opción clásica para declaraciones de amor y momentos inolvidables.", categories: ["ramos", "precio-bajo"] },
    { id: 5, name: "Ramo Combinado con Rosas, Hortencias, Clavellines y Finos Follajes", price: 1150, image: "../assets/foto5.webp", description: "Exquisita mezcla floral que integra rosas, hortensias, clavellines y follajes finos en una composición armoniosa. Un diseño sofisticado para quienes buscan algo fuera de lo común.", categories: ["ramos", "precio-medio"] },
    { id: 6, name: "Ramo de 12 Rosas con Finos Follajes", price: 938, image: "../assets/foto6.webp", description: "Ramo tradicional con doce rosas frescas acompañadas por una cuidadosa selección de follajes finos. Una propuesta atemporal que nunca pasa de moda en cualquier celebración.", categories: ["ramos", "precio-bajo"] },
    { id: 7, name: "Ramo de Rosas con Clavellín y Finos Follajes", price: 563, image: "../assets/foto7.webp", description: "Armoniosa combinación de rosas con clavellín y follajes finos que aporta color y textura. Una opción accesible y encantadora para cualquier ocasión.", categories: ["ramos", "precio-bajo"] },
    { id: 8, name: "Ramo de Girasoles", price: 775, image: "../assets/foto8.webp", description: "Radiante ramo compuesto por girasoles que evocan alegría y vitalidad. Perfecto para transmitir buenos deseos y llenar de luz cualquier ambiente.", categories: ["ramos", "precio-bajo"] },
    { id: 9, name: "Ramo de Tulipán Holandés (10 Tallos)", price: 2000, image: "../assets/foto9.webp", description: "Elegante ramo con diez tallos de tulipán holandés importado, distinguidos por su frescura y belleza natural. Una propuesta refinada para obsequios distinguidos.", categories: ["ramos", "precio-medio"] },
    { id: 10, name: "Ramo de Gerberas con Margaritas Tono Ocre y Fino Follaje", price: 875, image: "../assets/foto10.webp", description: "Ramo con gerberas y margaritas en cálidos tonos ocre complementadas por un follaje fino. Un diseño contemporáneo con una paleta otoñal encantadora.", categories: ["ramos", "precio-bajo"] },
    { id: 11, name: "Ramo de Gerberas con Finos Follajes y Accesorio de Mariposas", price: 700, image: "../assets/foto11.webp", description: "Bouquet de gerberas con follaje fino decorado con un delicado accesorio de mariposas. Un toque juguetón y colorido ideal para regalar alegría.", categories: ["ramos", "precio-bajo"] },
    { id: 12, name: "Ramo de Rosas y Gerberas con Finos Follajes", price: 975, image: "../assets/foto12.webp", description: "Composición mixta que combina la elegancia de las rosas con la frescura de las gerberas, complementada con follajes finos. Versátil para múltiples ocasiones.", categories: ["ramos", "precio-bajo"] },
    { id: 13, name: "Corazón de Rosas y Chocolates Ferrero con Accesorio de Mariposas", price: 1375, image: "../assets/foto13.webp", description: "Arreglo en forma de corazón con rosas y chocolates Ferrero Rocher, adornado con un detalle de mariposas. Una declaración perfecta para aniversarios y San Valentín.", categories: ["corazones", "precio-medio"] },
    { id: 14, name: "Corazón de Rosas, Margaritas y Chocolates Ferrero", price: 1000, image: "../assets/foto14.webp", description: "Corazón floral que mezcla rosas y margaritas con la dulzura de los chocolates Ferrero Rocher. Un regalo que combina lo estético con lo delicioso.", categories: ["corazones", "precio-medio"] },
    { id: 15, name: "Caja Floral con Rosas, Minirosas y Finos Follajes", price: 1688, image: "../assets/foto15.webp", description: "Caja decorativa llena de rosas, minirosas y follajes finos cuidadosamente dispuestos. Una presentación lujosa que sorprende por su estética refinada.", categories: ["cajas", "precio-medio"] },
    { id: 16, name: "Caja Floral con Rosas Rojas, Botella de Vino (750 ml) y Chocolates Ferrero (16 pzas)", price: 2375, image: "../assets/foto16.webp", description: "Exclusiva caja floral con rosas rojas acompañada por una botella de vino de 750 ml y 16 piezas de chocolates Ferrero Rocher. Una experiencia completa para engreír al ser querido.", categories: ["cajas", "especiales", "precio-medio"] },
    { id: 17, name: "Caja Floral de Luxe con Flores Finas, Follajes y Orquídea Doble Vara", price: 3375, image: "../assets/foto17.webp", description: "Caja de lujo con una selección premium de flores finas, follajes y una orquídea de doble vara como pieza central. La opción definitiva para quienes buscan distinción.", categories: ["cajas", "premium", "precio-alto"] },
    { id: 18, name: "Caja Floral con Orquídea Doble Vara, Astromelias y Clavel", price: 1563, image: "../assets/foto18.webp", description: "Refinada caja decorada con una orquídea de doble vara, astromelias y claveles que crean un balance visual impactante. Un detalle memorable para ocasiones relevantes.", categories: ["cajas", "precio-medio"] },
    { id: 19, name: "Orquídea Doble Vara en Papel Floral", price: 750, image: "../assets/foto19.webp", description: "Sofisticada orquídea de doble vara presentada en un envoltorio de papel floral. Una pieza exótica y duradera para quienes aprecian la belleza singular.", categories: ["ramos", "precio-bajo"] },
    { id: 20, name: "Ramo de Rosas y Astromelias", price: 875, image: "../assets/foto20.webp", description: "Armonioso ramo que une rosas y astromelias en un conjunto colorido y lleno de vida. Una combinación fresca y clásica a la vez.", categories: ["ramos", "precio-bajo"] },
    { id: 21, name: "Ramo de Rosas con Fino Follaje", price: 525, image: "../assets/foto21.webp", description: "Sencillo pero elegante ramo con rosas seleccionadas acompañadas de un follaje fino. Una propuesta clásica que siempre acierta.", categories: ["ramos", "precio-bajo"] },
    { id: 22, name: "Caja Floral con Flores Combinadas (Rosas, Orquídea, Gerberas, Astromelias y Follaje)", price: 1850, image: "../assets/foto22.webp", description: "Caja floral elaborada con una exquisita mezcla de rosas, orquídea, gerberas, astromelias y follaje. Una explosión de color y textura perfecta como obsequio especial.", categories: ["cajas", "precio-medio"] },
    { id: 23, name: "Bandeja Floral & Frutal (Flores Combinadas + Frutas de Temporada)", price: 1688, image: "../assets/foto23.webp", description: "Creativa bandeja que combina flores variadas con frutas frescas de temporada. Una opción original y saludable para celebrar con estilo.", categories: ["especiales", "precio-medio"] },
    { id: 24, name: "Bandeja Cumpleañera (Flores, Pastel 3 Leches, Chocolates Kisses, Galletas Macma)", price: 1625, image: "../assets/foto24.webp", description: "Bandeja para cumpleaños que reúne flores, pastel de tres leches, chocolates Kisses y galletas Macma. Una sorpresa completa para celebrar el día especial con dulzura.", categories: ["especiales", "precio-medio"] },
    { id: 25, name: "Bandeja Cumpleañera con Globos (Flores, Pastel 3 Leches, Bebida, Chocolates y 2 Snacks)", price: 2000, image: "../assets/foto25.webp", description: "Completísima bandeja de cumpleaños con flores, pastel de tres leches, bebida, chocolates, dos snacks y globos decorativos. El paquete ideal para una celebración memorable.", categories: ["especiales", "precio-medio"] },
    { id: 26, name: "Ramo de Lilis, Gerberas y Astromelias con Fino Follaje", price: 575, image: "../assets/foto26.webp", description: "Ramo elaborado con lilis rosados —abiertos y en botón para que siga floreciendo en casa—, gerberas fucsia, margaritas blancas y nube de gypsophila. Se presenta en envoltura tornasol con moño de tul, un detalle luminoso y alegre para felicitar o agradecer.", categories: ["ramos", "precio-bajo"] },
    { id: 27, name: "Ramo de Lilis, Rosas y Astromelias con Fino Follaje", price: 565, image: "../assets/foto27.webp", description: "Composición romántica que une lilis fucsia, rosas en tono rosa pastel y astromelias, realzadas con solidago amarillo y follaje verde. Envuelto en papel tornasol con base firme, ideal para un detalle espontáneo que se vea abundante.", categories: ["ramos", "precio-bajo"] },
    { id: 28, name: "Ramo de Rosas, Hortensia y Gerberas con Fino Follaje", price: 690, image: "../assets/foto28.webp", description: "Ramo de textura rica que combina rosas en dos tonos de rosa, una hortensia lila como pieza central, gerberas blancas y acentos de solidago. Presentado en papel blanco con moño de organza, una propuesta delicada y elegante para ocasiones especiales.", categories: ["ramos", "precio-bajo"] },
    { id: 29, name: "Ramo de Rosas Amarillas con Finos Follajes", price: 740, image: "../assets/foto29.webp", description: "Ramo generoso de rosas amarillas acompañadas de eucalipto, solidago y follaje fino, envuelto en papel kraft con mariposas decorativas y espacio para tarjeta dedicatoria. El amarillo transmite amistad y buenos deseos: perfecto para cumpleaños y celebraciones.", categories: ["ramos", "precio-bajo"] },
    { id: 30, name: "Ramo de 12 Rosas Rojas con Finos Follajes", price: 625, image: "../assets/foto30.webp", description: "Docena de rosas rojas de tallo largo realzadas con eucalipto cinerea y solidago, presentada en papel negro con acento azul y mariposas decorativas. La declaración clásica de amor, con una presentación moderna y contrastante.", categories: ["ramos", "precio-bajo"] },
    { id: 31, name: "Ramo de Rosas en Dos Tonos con Follaje Gypsophila", price: 725, image: "../assets/foto31.webp", description: "Rosas rosadas y rojas combinadas al centro de una nube abundante de gypsophila, envueltas en papel negro con listón satinado. El contraste entre el fondo oscuro y la flor hace de este ramo una opción muy fotogénica para aniversarios.", categories: ["ramos", "precio-bajo"] },
    { id: 32, name: "Maxi Ramo de 60 a 70 Rosas Rojas con Gypsophila", price: 1875, image: "../assets/foto32.webp", description: "Ramo de gran formato con 60 a 70 rosas rojas dispuestas en cúpula y enmarcadas por una corona completa de gypsophila sobre papel negro. Versión con listón y accesorios de mariposas $2,190; sin listón ni mariposas $1,875. Para pedidas de mano, aniversarios y momentos que piden impacto.", categories: ["ramos", "premium", "precio-medio"] },
    { id: 33, name: "Maxi Ramo de 50 Rosas Rojas", price: 1440, image: "../assets/foto33.webp", description: "Cincuenta rosas rojas agrupadas en un ramo compacto y abundante, envueltas en papel tipo tela blanco con moño en tono champán. Una entrega imponente y sobria, ideal para aniversarios y grandes celebraciones.", categories: ["ramos", "premium", "precio-medio"] },
    { id: 34, name: "Maxi Ramo de Lilis, Gerberas y Fino Follaje", price: 2040, image: "../assets/foto34.webp", description: "Maxi ramo construido con abundantes lilis en tonos rosa y coral —muchos en botón para prolongar su duración—, gerberas, clavellinas fucsia y follaje fino, sobre papel texturizado con listón lila. Un arreglo de gran volumen y aroma para ocasiones memorables.", categories: ["ramos", "premium", "precio-medio"] },
    { id: 35, name: "Ramo de Gerberas Rojas con Gypsophila", price: 750, image: "../assets/foto35.webp", description: "Ramo intenso de gerberas rojas acompañadas de gypsophila, presentado en papel azul y blanco con listón negro. Una combinación vibrante y de contraste fuerte, perfecta para sorprender con algo distinto a las rosas.", categories: ["ramos", "precio-bajo"] },
    { id: 36, name: "Ramo de Rosas con Fino Follaje y Detalle de Perlas", price: 690, image: "../assets/foto36.webp", description: "Rosas rosadas frescas rodeadas de follaje verde intenso, envueltas en papel texturizado con hilo de perlas y listón fucsia. Un ramo de tamaño medio, muy cuidado en el detalle, ideal para regalar en cualquier fecha.", categories: ["ramos", "precio-bajo"] },
    { id: 37, name: "Caja Floral con Rosas, Lilis, Dalias y Astromelias", price: 2875, image: "../assets/foto37.webp", description: "Caja floral de gran volumen con rosas y minirosas en tonos rosa y blanco, lilis, dalias, astromelias, gypsophila y campanas de Irlanda. Con 6 globos de helio $3,315 (color según existencia); sin globos $2,875. Las dalias son de temporada y pueden sustituirse por otra variedad como la Roxane.", categories: ["cajas", "premium", "precio-alto"] },
    { id: 38, name: "Caja de 36 a 38 Rosas Azules con Chocolates Ferrero", price: 3000, image: "../assets/foto38.webp", description: "Caja circular negra con 36 a 38 rosas azules acompañadas de chocolates Ferrero Rocher y moño azul marino. La rosa azul se elabora sobre pedido y su tonalidad puede variar; una pieza exclusiva para quien busca algo fuera de lo común.", categories: ["cajas", "especiales", "premium", "precio-alto"] },
    { id: 39, name: "Florero de Vidrio con Girasol Japonés, Rosas y Statice", price: 1065, image: "../assets/foto39.webp", description: "Florero de vidrio con girasoles japoneses, rosas en tono rosa, statice morado y listón satinado. Llega listo para colocar sobre una mesa o escritorio, sin necesidad de trasvasar: ideal para oficinas, hospitales y detalles de agradecimiento.", categories: ["especiales", "precio-medio"] },
    { id: 40, name: "Maceta con Orquídeas Altas y Mini Combinadas", price: 5625, image: "../assets/foto40.webp", description: "Maceta de cerámica con orquídeas finas de vara alta combinadas con orquídeas mini en tonos rosa y fucsia, acabada con musgo natural y base decorativa. Una planta viva de larga duración, la opción más distinguida del catálogo para regalos corporativos y fechas importantes.", categories: ["premium", "especiales", "precio-alto"] },
    { id: 41, name: "Ramo de Graduación Premium con Lisianthus, Gerberas, Lilis y Peluche", price: 1565, image: "../assets/foto41.webp", description: "Ramo de graduación en tonos morados con lisianthus, gerberas blancas, lilis, solidago y finos follajes, acompañado de oso de peluche con birrete y globo de helio. El color del peluche puede variar según existencias; pregunta por disponibilidad al hacer tu pedido.", categories: ["graduaciones", "especiales", "precio-medio"] },
    { id: 42, name: "Ramo de Graduación de Rosas a Dos Tonos con Listón y Peluche", price: 1125, image: "../assets/foto42.webp", description: "Ramo de graduación con rosas en dos tonos, rosa y lila, salpicado de gypsophila y envuelto en papel con hilo de perlas y listón de raso. Incluye peluche; una presentación suave y femenina para celebrar el logro.", categories: ["graduaciones", "especiales", "precio-medio"] },
    { id: 43, name: "Ramo de Graduación con Flores Combinadas y Birrete", price: 975, image: "../assets/foto43.webp", description: "Ramo de graduación con rosas, clavellinas, Roxane, velo de novia y finos follajes con eucalipto, envuelto en papel crema con ribete dorado y rematado con birrete decorativo. Una opción fresca y elegante en tonos pastel.", categories: ["graduaciones", "especiales", "precio-bajo"] },
    { id: 44, name: "Ramo de Graduación con Rosas, Hortensia, Gerberas y Osito con Birrete", price: 875, image: "../assets/foto44.webp", description: "Ramo de graduación que combina rosas rosadas, hortensia lila, gerberas fucsia y solidago, con osito de peluche con birrete y listones rizados. Se entrega en papel rosa con celofán tornasol, un detalle alegre y muy vistoso para la foto del día.", categories: ["graduaciones", "especiales", "precio-bajo"] },
    { id: 45, name: "Caja de Graduación con Hortensias Azules, Gerberas y Mini Birrete", price: 940, image: "../assets/foto45.webp", description: "Caja negra con hortensias azules, gerberas blancas, solidago y eucalipto, decorada con un mini birrete y listón azul. Formato de caja que no requiere florero y se sostiene sola: ideal para entregar en la ceremonia o dejar en casa u oficina.", categories: ["graduaciones", "cajas", "precio-bajo"] }
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
