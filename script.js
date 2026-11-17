/* ============================================================================
 * KATALOG JAJANAN - JAVASCRIPT
 * ============================================================================ */

/* ============================================================================
 * 1. KONFIGURASI TOKO & NOMOR WHATSAPP (SILAKAN UBAH DI SINI)
 * ============================================================================
 * Penting: Gunakan kode negara 62 di depan nomor WhatsApp (tanpa tanda + atau 0).
 * Contoh: 0812-3456-7890 ditulis menjadi "6281234567890"
 */
const TOKO_CONFIG = {
    namaToko: "Dapur Jajanan Kak Rose",
    tagline: "Jajanan Hangat, Pedas & Manis Bikin Nagih!",
    nomorWhatsApp: "6281234567890", // <-- GANTI DENGAN NOMOR WHATSAPP ANDA
    jamOperasional: "Buka Setiap Hari: 10.00 - 21.00 WIB",
    infoLokasi: "Melayani Ambil di Tempat, COD & Kurir Instan",
    sapaanAwalWA: "Halo Kak, saya mau pesan jajanan dari website katalog:"
};

/* ============================================================================
 * 2. DATA PRODUK JAJANAN (MUDAH DITAMBAH / DIUBAH TANPA DATABASE)
 * ============================================================================
 * Kategori yang tersedia: "Pedas", "Gurih", "Manis", "Minuman"
 * Setiap varian bisa memiliki tambahan harga (ekstraHarga: 0 jika harga sama).
 */
const DATA_JAJANAN = [
    {
        id: "jajan-1",
        nama: "Cireng Ayam Suwir Mercon",
        kategori: "Pedas",
        harga: 15000,
        badge: "Best Seller",
        porsi: "Isi 5 pcs besar / porsi",
        komposisi: "Adonan aci renyah lembut, isian dada ayam suwir bumbu rempah cabai rawit segar, daun jeruk.",
        deskripsi: "Cireng isi ayam suwir pedas gurih yang digoreng dadakan sehingga renyah di luar dan kenyal di dalam. Isian ayamnya melimpah dan wangi daun jeruk!",
        foto: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Original (Tidak Pedas)", ekstraHarga: 0 },
            { nama: "Pedas Sedang (Nikmat)", ekstraHarga: 0 },
            { nama: "Pedas Mercon (Level Maksimal)", ekstraHarga: 2000 },
            { nama: "Kemasan Frozen + Bumbu", ekstraHarga: 0 }
        ]
    },
    {
        id: "jajan-2",
        nama: "Dimsum Ayam Udang Mentai",
        kategori: "Gurih",
        harga: 22000,
        badge: "Favorit",
        porsi: "Isi 6 pcs + Saus Chili Oil",
        komposisi: "Daging ayam giling segar, udang cincang, kulit pangsit lembut, saus mentai torch & chili oil.",
        deskripsi: "Dimsum premium full daging ayam dan udang tanpa banyak tepung. Disajikan hangat dengan siraman saus mentai gurih yang di-torch serta chili oil racikan sendiri.",
        foto: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Saus Sambal Bangkok", ekstraHarga: 0 },
            { nama: "Chili Oil Pedas Gurih", ekstraHarga: 0 },
            { nama: "Topping Saus Mentai Torch", ekstraHarga: 4000 },
            { nama: "Mix Mentai + Chili Oil", ekstraHarga: 5000 }
        ]
    },
    {
        id: "jajan-3",
        nama: "Seblak Coet Kerupuk Mawar",
        kategori: "Pedas",
        harga: 14000,
        badge: "Viral",
        porsi: "1 Porsi Coet Penuh",
        komposisi: "Kerupuk mawar putih rebus kenyal, kencur segar, bawang putih, cabai rawit hijau & merah, daun bawang.",
        deskripsi: "Seblak coet viral khas Parahyangan dengan aroma kencur dan minyak bawang panas yang disiram langsung di atas ulekan cabai rawit segar. Kenyal, pedas, dan segar!",
        foto: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Level 1 (Pedas Santai)", ekstraHarga: 0 },
            { nama: "Level 3 (Pedas Nampol)", ekstraHarga: 0 },
            { nama: "Level 5 (Pedas Jontor)", ekstraHarga: 2000 },
            { nama: "+ Topping Telur & Sosis", ekstraHarga: 5000 }
        ]
    },
    {
        id: "jajan-4",
        nama: "Pisang Goreng Crispy Lumer",
        kategori: "Manis",
        harga: 16000,
        badge: "Best Seller",
        porsi: "1 Box isi 6 potong besar",
        komposisi: "Pisang kepok kuning matang pohon, tepung crispy racikan, glaze lumer & parutan keju melimpah.",
        deskripsi: "Pisang kepok manis pilihan yang dibalut tepung roti super renyah, lalu diberi topping glaze lumer dan taburan keju parut yang melimpah sampai menutupi pisang.",
        foto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Cokelat Lumer Klasik", ekstraHarga: 0 },
            { nama: "Cokelat + Keju Gondrong", ekstraHarga: 3000 },
            { nama: "Tiramisu Almond Crispy", ekstraHarga: 3000 },
            { nama: "Matcha Greentea Keju", ekstraHarga: 3000 }
        ]
    },
    {
        id: "jajan-5",
        nama: "Tahu Walik Aci Kriuk",
        kategori: "Gurih",
        harga: 12000,
        badge: "Baru",
        porsi: "Isi 8 pcs + Sambal Kecap/Petis",
        komposisi: "Tahu pong balik, adonan aci ayam bawang, daun kucai, cocolan sambal kecap cabai potong.",
        deskripsi: "Tahu pong yang dibalik hingga bagian dalamnya menjadi super garing kriuk dengan isian adonan aci ayam gurih. Paling nikmat dicocol sambal kecap pedas manis!",
        foto: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Cocolan Sambal Kecap Rawit", ekstraHarga: 0 },
            { nama: "Cocolan Bumbu Petis Madura", ekstraHarga: 0 },
            { nama: "Tabur Bumbu Balado Pedas", ekstraHarga: 1000 }
        ]
    },
    {
        id: "jajan-6",
        nama: "Basreng Daun Jeruk Renyah",
        kategori: "Pedas",
        harga: 13000,
        badge: "Favorit",
        porsi: "Pouch 200 gram",
        komposisi: "Bakso ikan tenggiri iris tipis, minyak bawang, rempah cabai bubuk asli, irisan daun jeruk purut kering.",
        deskripsi: "Bakso goreng renyah anti keras! Digoreng hingga garing sempurna lalu dibumbui racikan cabai asli dan limpahan daun jeruk wangi yang bikin susah berhenti ngemil.",
        foto: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Asin Gurih Daun Jeruk", ekstraHarga: 0 },
            { nama: "Pedas Daun Jeruk (Best Seller)", ekstraHarga: 0 },
            { nama: "Ekstra Pedas Cikruh (Basah)", ekstraHarga: 2000 }
        ]
    },
    {
        id: "jajan-7",
        nama: "Bomboloni Donat Kentang Lumer",
        kategori: "Manis",
        harga: 18000,
        badge: "Baru",
        porsi: "1 Box isi 4 pcs gemoy",
        komposisi: "Donat kentang empuk, gula donat dingin, filling krim diplomasi & selai premium lumer.",
        deskripsi: "Donat bomboloni tanpa lubang dengan tekstur selembut awan dari kentang asli. Begitu digigit, isian krim di dalamnya langsung pecah dan lumer di mulut!",
        foto: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Mix 4 Rasa Favorit", ekstraHarga: 0 },
            { nama: "Full Belgian Chocolate", ekstraHarga: 2000 },
            { nama: "Vanilla Custard & Strawberry", ekstraHarga: 0 }
        ]
    },
    {
        id: "jajan-8",
        nama: "Es Kopi Susu Gula Aren Creamy",
        kategori: "Minuman",
        harga: 15000,
        badge: "Best Seller",
        porsi: "Cup 16 oz (Seal Rapat)",
        komposisi: "Espresso biji kopi Nusantara, susu segar full cream, krimer rahasia, gula aren murni organik.",
        deskripsi: "Perpaduan espresso yang wangi, susu creamy yang gurih, dan manis legit dari gula aren asli. Cocok banget jadi teman makan jajanan pedas dan gurih!",
        foto: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Normal Ice & Normal Sweet", ekstraHarga: 0 },
            { nama: "Less Sugar (Kurang Manis)", ekstraHarga: 0 },
            { nama: "Less Ice (Es Sedikit)", ekstraHarga: 0 },
            { nama: "+ Topping Jelly Kopi", ekstraHarga: 3000 }
        ]
    },
    {
        id: "jajan-9",
        nama: "Es Jeruk Peras Yakult Segar",
        kategori: "Minuman",
        harga: 12000,
        badge: "Segar",
        porsi: "Cup 16 oz (Seal Rapat)",
        komposisi: "Perasan jeruk pontianak manis segar, 1 botol Yakult asli, biji selasih, nata de coco.",
        deskripsi: "Minuman pelepas dahaga paling ampuh setelah makan pedas! Perasan jeruk segar asli dipadukan dengan Yakult dan kenyalnya nata de coco.",
        foto: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
        varian: [
            { nama: "Normal Ice", ekstraHarga: 0 },
            { nama: "Less Ice", ekstraHarga: 0 },
            { nama: "+ Ekstra Nata De Coco", ekstraHarga: 2000 }
        ]
    }
];

/* ============================================================================
 * 3. STATE APLIKASI & FUNGSI UTILITAS
 * ============================================================================ */
const KATEGORI_LIST = [
    { id: "Semua", label: "Semua Menu", icon: "fa-border-all" },
    { id: "Pedas", label: "Pedas Nampol", icon: "fa-pepper-hot" },
    { id: "Gurih", label: "Gurih & Hangat", icon: "fa-bowl-rice" },
    { id: "Manis", label: "Manis Lumer", icon: "fa-cookie-bite" },
    { id: "Minuman", label: "Minuman Segar", icon: "fa-mug-hot" }
];

let state = {
    selectedCategory: "Semua",
    searchQuery: "",
    activeModalProduct: null,
    activeModalVariantIndex: 0,
    activeModalQty: 1,
    cart: [] // Menyimpan daftar pesanan jika pembeli ingin beli >1 jenis jajanan
};

// Format angka menjadi Rupiah (contoh: Rp 15.000)
function formatRupiah(angka) {
    return "Rp " + Number(angka).toLocaleString("id-ID");
}

// Fallback gambar jika URL gagal dimuat
function handleImageError(imgElement, namaProduk) {
    const encodedName = encodeURIComponent(namaProduk || "Jajanan");
    imgElement.onerror = null;
    imgElement.src = `https://placehold.co/600x450/ffedd5/9a3412?text=${encodedName}`;
}

/* ============================================================================
 * 4. INISIALISASI HALAMAN
 * ============================================================================ */
function initApp() {
    // Pasang informasi toko dari TOKO_CONFIG
    document.title = `${TOKO_CONFIG.namaToko} - Katalog & Order WhatsApp`;
    document.getElementById("headerStoreName").textContent = TOKO_CONFIG.namaToko;
    document.getElementById("headerStoreTagline").textContent = TOKO_CONFIG.tagline;
    document.getElementById("heroStoreHours").textContent = TOKO_CONFIG.jamOperasional;
    document.getElementById("heroStoreLocation").textContent = TOKO_CONFIG.infoLokasi;
    document.getElementById("footerStoreName").textContent = TOKO_CONFIG.namaToko;
    document.getElementById("footerYear").textContent = new Date().getFullYear();

    // Render tombol kategori & daftar produk
    renderCategories();
    renderProducts();
    updateCartUI();

    // Pasang event listener pencarian Desktop & Mobile
    const searchDesktop = document.getElementById("searchInputDesktop");
    const searchMobile = document.getElementById("searchInputMobile");
    const clearDesktop = document.getElementById("clearSearchDesktop");
    const clearMobile = document.getElementById("clearSearchMobile");

    function syncSearch(val) {
        state.searchQuery = val.trim();
        searchDesktop.value = val;
        searchMobile.value = val;
        clearDesktop.classList.toggle("hidden", !state.searchQuery);
        clearMobile.classList.toggle("hidden", !state.searchQuery);
        renderProducts();
    }

    searchDesktop.addEventListener("input", (e) => syncSearch(e.target.value));
    searchMobile.addEventListener("input", (e) => syncSearch(e.target.value));
    clearDesktop.addEventListener("click", () => syncSearch(""));
    clearMobile.addEventListener("click", () => syncSearch(""));

    // Tutup modal jika klik area backdrop gelap
    document.getElementById("detailModal").addEventListener("click", (e) => {
        if (e.target.id === "detailModal") closeDetailModal();
    });
    document.getElementById("cartModal").addEventListener("click", (e) => {
        if (e.target.id === "cartModal") toggleCartModal(false);
    });
    document.getElementById("waConfirmModal").addEventListener("click", (e) => {
        if (e.target.id === "waConfirmModal") closeWaConfirmModal();
    });
}

/* ============================================================================
 * 5. RENDER FILTER KATEGORI & KATALOG JAJANAN
 * ============================================================================ */
function renderCategories() {
    const container = document.getElementById("categoryFilterContainer");
    container.innerHTML = KATEGORI_LIST.map(kat => {
        const isActive = state.selectedCategory === kat.id;
        const activeClasses = isActive
            ? "bg-brand-600 text-white shadow-md shadow-brand-500/25 border-brand-600"
            : "bg-white text-stone-700 hover:bg-amber-50 border-amber-200/80";

        return `
            <button
                onclick="selectCategory('${kat.id}')"
                class="px-4 py-2.5 rounded-2xl border font-bold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-all ${activeClasses}"
            >
                <i class="fa-solid ${kat.icon}"></i>
                <span>${kat.label}</span>
            </button>
        `;
    }).join("");
}

function selectCategory(kategoriId) {
    state.selectedCategory = kategoriId;
    renderCategories();
    renderProducts();
}

function resetFilterAndSearch() {
    state.selectedCategory = "Semua";
    state.searchQuery = "";
    document.getElementById("searchInputDesktop").value = "";
    document.getElementById("searchInputMobile").value = "";
    document.getElementById("clearSearchDesktop").classList.add("hidden");
    document.getElementById("clearSearchMobile").classList.add("hidden");
    renderCategories();
    renderProducts();
}

function getBadgeColorClass(badgeText) {
    if (!badgeText) return "hidden";
    const lower = badgeText.toLowerCase();
    if (lower.includes("best") || lower.includes("viral")) {
        return "bg-rose-600 text-white";
    }
    if (lower.includes("baru")) {
        return "bg-emerald-600 text-white";
    }
    return "bg-amber-500 text-stone-950";
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyState");
    const countText = document.getElementById("productCountText");

    const filtered = DATA_JAJANAN.filter(item => {
        const matchKat = state.selectedCategory === "Semua" || item.kategori === state.selectedCategory;
        const q = state.searchQuery.toLowerCase();
        const matchSearch = !q ||
            item.nama.toLowerCase().includes(q) ||
            item.deskripsi.toLowerCase().includes(q) ||
            item.kategori.toLowerCase().includes(q);
        return matchKat && matchSearch;
    });

    countText.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    grid.innerHTML = filtered.map(item => {
        const badgeClass = getBadgeColorClass(item.badge);
        return `
            <article 
                onclick="openDetailModal('${item.id}')"
                class="group bg-white rounded-3xl border border-amber-100 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
                <!-- Foto Jajanan -->
                <div class="relative h-48 sm:h-52 bg-stone-100 overflow-hidden">
                    <img 
                        src="${item.foto}" 
                        alt="${item.nama}"
                        onerror="handleImageError(this, '${item.nama.replace(/'/g, "")}')"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    >
                    <!-- Kategori & Label Badge -->
                    <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-stone-800 shadow-sm">
                            ${item.kategori}
                        </span>
                        ${item.badge ? `
                            <span class="px-2.5 py-1 rounded-full text-[11px] font-extrabold shadow-sm ${badgeClass}">
                                ${item.badge}
                            </span>
                        ` : ''}
                    </div>
                    <!-- Info Porsi Singkat -->
                    <div class="absolute bottom-2.5 left-3 right-3 flex justify-between items-center pointer-events-none">
                        <span class="px-2.5 py-1 rounded-lg bg-stone-900/75 backdrop-blur-sm text-white text-[11px] font-medium">
                            <i class="fa-solid fa-utensils text-amber-400 mr-1"></i> ${item.porsi}
                        </span>
                    </div>
                </div>

                <!-- Konten Kartu -->
                <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                        <h3 class="font-extrabold text-base sm:text-lg text-stone-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                            ${item.nama}
                        </h3>
                        <p class="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                            ${item.deskripsi}
                        </p>
                    </div>

                    <div class="pt-3 border-t border-amber-100/80 flex items-center justify-between gap-2">
                        <div>
                            <span class="text-[11px] text-stone-400 block">Harga Mulai</span>
                            <span class="text-base sm:text-lg font-extrabold text-brand-600">${formatRupiah(item.harga)}</span>
                        </div>

                        <button 
                            type="button"
                            onclick="event.stopPropagation(); openDetailModal('${item.id}')"
                            class="px-3.5 py-2.5 rounded-xl bg-amber-100/80 group-hover:bg-brand-600 text-brand-800 group-hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all"
                        >
                            <span>Lihat Detail</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

/* ============================================================================
 * 6. MODAL PREVIEW & DETAIL PRODUK
 * ============================================================================ */
function openDetailModal(productId) {
    const product = DATA_JAJANAN.find(p => p.id === productId);
    if (!product) return;

    state.activeModalProduct = product;
    state.activeModalVariantIndex = 0;
    state.activeModalQty = 1;

    // Isi data ke elemen modal
    const imgEl = document.getElementById("modalProductImage");
    imgEl.src = product.foto;
    imgEl.onerror = () => handleImageError(imgEl, product.nama);

    document.getElementById("modalCategoryBadge").textContent = product.kategori;

    const highlightBadge = document.getElementById("modalHighlightBadge");
    if (product.badge) {
        highlightBadge.textContent = product.badge;
        highlightBadge.className = `px-3 py-1 rounded-full text-xs font-bold shadow ${getBadgeColorClass(product.badge)}`;
    } else {
        highlightBadge.className = "hidden";
    }

    document.getElementById("modalPortionInfo").textContent = product.porsi;
    document.getElementById("modalProductName").textContent = product.nama;
    document.getElementById("modalBasePrice").textContent = formatRupiah(product.harga);
    document.getElementById("modalProductDesc").textContent = product.deskripsi;
    document.getElementById("modalComposition").textContent = product.komposisi;
    document.getElementById("modalQtyDisplay").textContent = "1";
    document.getElementById("modalNoteInput").value = "";

    renderModalVariants();
    updateModalTotalPrice();

    // Tampilkan modal
    const modal = document.getElementById("detailModal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeDetailModal() {
    document.getElementById("detailModal").classList.add("hidden");
    document.body.style.overflow = "";
    state.activeModalProduct = null;
}

function renderModalVariants() {
    const product = state.activeModalProduct;
    if (!product) return;

    const container = document.getElementById("modalVariantContainer");
    container.innerHTML = product.varian.map((v, idx) => {
        const isSelected = idx === state.activeModalVariantIndex;
        const activeStyle = isSelected
            ? "border-brand-600 bg-brand-50/90 text-brand-900 ring-2 ring-brand-500/30"
            : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

        const extraText = v.ekstraHarga > 0 ? `+${formatRupiah(v.ekstraHarga)}` : "Harga Normal";

        return `
            <button
                type="button"
                onclick="selectModalVariant(${idx})"
                class="p-2.5 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${activeStyle}"
            >
                <div class="flex items-center gap-2 min-w-0">
                    <span class="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-brand-600 bg-brand-600 text-white' : 'border-stone-300'}">
                        ${isSelected ? '<i class="fa-solid fa-check text-[9px]"></i>' : ''}
                    </span>
                    <span class="text-xs font-bold truncate">${v.nama}</span>
                </div>
                <span class="text-[10px] font-semibold ${v.ekstraHarga > 0 ? 'text-brand-600' : 'text-stone-400'} shrink-0">
                    ${extraText}
                </span>
            </button>
        `;
    }).join("");
}

function selectModalVariant(index) {
    state.activeModalVariantIndex = index;
    renderModalVariants();
    updateModalTotalPrice();
}

function changeModalQty(delta) {
    const nextQty = state.activeModalQty + delta;
    if (nextQty < 1 || nextQty > 99) return;
    state.activeModalQty = nextQty;
    document.getElementById("modalQtyDisplay").textContent = String(nextQty);
    updateModalTotalPrice();
}

function getModalCurrentUnitPrice() {
    const product = state.activeModalProduct;
    if (!product) return 0;
    const variant = product.varian[state.activeModalVariantIndex] || { ekstraHarga: 0 };
    return product.harga + (variant.ekstraHarga || 0);
}

function updateModalTotalPrice() {
    const unitPrice = getModalCurrentUnitPrice();
    const total = unitPrice * state.activeModalQty;
    document.getElementById("modalCalculatedTotal").textContent = formatRupiah(total);
}

/* ============================================================================
 * 7. REDIRECT LANGSUNG KE WHATSAPP (PESAN 1 PRODUK DARI MODAL DETAIL)
 * ============================================================================ */
function orderSingleItemDirectlyViaWA() {
    const product = state.activeModalProduct;
    if (!product) return;

    const variant = product.varian[state.activeModalVariantIndex] || { nama: "Original", ekstraHarga: 0 };
    const qty = state.activeModalQty;
    const note = document.getElementById("modalNoteInput").value.trim() || "-";
    const unitPrice = getModalCurrentUnitPrice();
    const totalPrice = unitPrice * qty;

    const messageLines = [
        TOKO_CONFIG.sapaanAwalWA,
        "",
        "*DETAIL PESANAN JAJANAN:*",
        `• *Nama Produk:* ${product.nama}`,
        `• *Varian / Level:* ${variant.nama}`,
        `• *Jumlah:* ${qty} porsi (@ ${formatRupiah(unitPrice)})`,
        `• *Catatan:* ${note}`,
        "",
        `*Estimasi Total Harga:* *${formatRupiah(totalPrice)}*`,
        "",
        "Mohon info ketersediaan pesanannya ya Kak. Terima kasih!"
    ];

    const finalMessage = messageLines.join("\n");
    closeDetailModal();
    launchWhatsAppRedirect(finalMessage);
}

/* ============================================================================
 * 8. FITUR KERANJANG (JIKA INGIN MEMESAN BEBERAPA JAJANAN SEKALIGUS)
 * ============================================================================ */
function addCurrentModalItemToCart() {
    const product = state.activeModalProduct;
    if (!product) return;

    const variant = product.varian[state.activeModalVariantIndex] || { nama: "Original", ekstraHarga: 0 };
    const qty = state.activeModalQty;
    const note = document.getElementById("modalNoteInput").value.trim();
    const unitPrice = getModalCurrentUnitPrice();

    // Cek apakah produk dengan varian dan catatan yang sama sudah ada di keranjang
    const existingIndex = state.cart.findIndex(
        item => item.productId === product.id && item.variantName === variant.nama && item.note === note
    );

    if (existingIndex > -1) {
        state.cart[existingIndex].qty += qty;
    } else {
        state.cart.push({
            cartItemId: "item-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
            productId: product.id,
            productName: product.nama,
            variantName: variant.nama,
            unitPrice: unitPrice,
            qty: qty,
            note: note
        });
    }

    updateCartUI();
    closeDetailModal();
    showToast(`${qty}x ${product.nama} ditambahkan ke daftar pesanan!`);
}

function updateCartUI() {
    const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = state.cart.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);

    document.getElementById("headerCartBadge").textContent = String(totalItems);
    document.getElementById("floatingCartCount").textContent = String(totalItems);
    document.getElementById("floatingCartTotal").textContent = formatRupiah(totalPrice);

    const floatingBar = document.getElementById("floatingCartBar");
    if (totalItems > 0) {
        floatingBar.classList.remove("hidden");
    } else {
        floatingBar.classList.add("hidden");
    }

    renderCartModalItems();
}

function toggleCartModal(show) {
    const modal = document.getElementById("cartModal");
    if (show) {
        renderCartModalItems();
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    } else {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

function renderCartModalItems() {
    const container = document.getElementById("cartItemsContainer");
    const buyerForm = document.getElementById("cartBuyerForm");
    const footer = document.getElementById("cartModalFooter");
    const totalPriceEl = document.getElementById("cartModalTotalPrice");

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 space-y-3">
                <div class="w-14 h-14 rounded-2xl bg-amber-100 text-brand-600 flex items-center justify-center mx-auto text-xl">
                    <i class="fa-solid fa-basket-shopping"></i>
                </div>
                <p class="font-bold text-stone-800 text-sm">Daftar Pesanan Masih Kosong</p>
                <p class="text-xs text-stone-500 max-w-xs mx-auto">
                    Klik salah satu jajanan di katalog untuk pesan langsung atau tambahkan ke daftar ini.
                </p>
            </div>
        `;
        buyerForm.classList.add("hidden");
        footer.classList.add("hidden");
        return;
    }

    buyerForm.classList.remove("hidden");
    footer.classList.remove("hidden");

    const totalPrice = state.cart.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);
    totalPriceEl.textContent = formatRupiah(totalPrice);

    container.innerHTML = state.cart.map(item => `
        <div class="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3">
            <div class="min-w-0 flex-1">
                <h4 class="font-extrabold text-stone-900 text-xs sm:text-sm truncate">${item.productName}</h4>
                <p class="text-xs text-brand-700 font-semibold">${item.variantName}</p>
                ${item.note ? `<p class="text-[11px] text-stone-500 italic mt-0.5">Catatan: "${item.note}"</p>` : ''}
                <p class="text-xs font-extrabold text-stone-800 mt-1">
                    ${formatRupiah(item.unitPrice * item.qty)} 
                    <span class="text-[11px] font-normal text-stone-400">(@ ${formatRupiah(item.unitPrice)})</span>
                </p>
            </div>

            <div class="flex items-center gap-2 shrink-0">
                <button 
                    onclick="changeCartItemQty('${item.cartItemId}', -1)"
                    class="w-7 h-7 rounded-lg bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 flex items-center justify-center text-xs"
                >
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="w-6 text-center font-extrabold text-xs sm:text-sm">${item.qty}</span>
                <button 
                    onclick="changeCartItemQty('${item.cartItemId}', 1)"
                    class="w-7 h-7 rounded-lg bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center text-xs"
                >
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    `).join("");
}

function changeCartItemQty(cartItemId, delta) {
    const idx = state.cart.findIndex(i => i.cartItemId === cartItemId);
    if (idx === -1) return;

    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) {
        state.cart.splice(idx, 1);
    }
    updateCartUI();
}

function clearAllCart() {
    state.cart = [];
    updateCartUI();
    toggleCartModal(false);
    showToast("Daftar pesanan dikosongkan");
}

function checkoutCartViaWA() {
    if (state.cart.length === 0) return;

    const buyerName = document.getElementById("buyerNameInput").value.trim();
    const deliveryMethod = document.getElementById("buyerDeliveryMethod").value;
    const buyerAddress = document.getElementById("buyerAddressInput").value.trim();

    const totalPrice = state.cart.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);

    let lines = [
        TOKO_CONFIG.sapaanAwalWA,
        "",
        "*DAFTAR PESANAN JAJANAN:*"
    ];

    state.cart.forEach((item, index) => {
        lines.push(`${index + 1}. *${item.productName}*`);
        lines.push(`   • Varian: ${item.variantName}`);
        lines.push(`   • Jumlah: ${item.qty}x (@ ${formatRupiah(item.unitPrice)}) = *${formatRupiah(item.unitPrice * item.qty)}*`);
        if (item.note) {
            lines.push(`   • Catatan: ${item.note}`);
        }
    });

    lines.push("");
    lines.push(`*Total Estimasi Harga:* *${formatRupiah(totalPrice)}*`);
    lines.push("");
    lines.push("*INFO PEMESAN:*");
    if (buyerName) lines.push(`• Nama: ${buyerName}`);
    lines.push(`• Pengambilan: ${deliveryMethod}`);
    if (buyerAddress) lines.push(`• Alamat/Catatan: ${buyerAddress}`);
    lines.push("");
    lines.push("Mohon konfirmasi total & pesanannya ya Kak. Terima kasih!");

    const finalMessage = lines.join("\n");
    toggleCartModal(false);
    launchWhatsAppRedirect(finalMessage);
}

/* ============================================================================
 * 9. HELPER PENGIRIMAN WHATSAPP & PREVIEW PESAN
 * ============================================================================ */
let lastGeneratedWaMessage = "";

function cleanPhoneNumber(raw) {
    let digits = String(raw).replace(/\D/g, "");
    if (digits.startsWith("0")) {
        digits = "62" + digits.slice(1);
    }
    return digits;
}

function launchWhatsAppRedirect(messageText) {
    lastGeneratedWaMessage = messageText;
    const phone = cleanPhoneNumber(TOKO_CONFIG.nomorWhatsApp);
    const encodedText = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${phone}?text=${encodedText}`;

    // Set ke modal konfirmasi & buka tab baru WhatsApp
    document.getElementById("waPreviewText").textContent = messageText;
    const linkBtn = document.getElementById("waDirectLinkBtn");
    linkBtn.href = waUrl;

    document.getElementById("waConfirmModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Langsung arahkan ke WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
}

function openDirectWaChat() {
    const msg = `Halo Kak *${TOKO_CONFIG.namaToko}*, saya sedang melihat katalog jajanan di website dan ingin bertanya...`;
    launchWhatsAppRedirect(msg);
}

function closeWaConfirmModal() {
    document.getElementById("waConfirmModal").classList.add("hidden");
    document.body.style.overflow = "";
}

function copyWaMessageText() {
    if (!lastGeneratedWaMessage) return;
    const tempInput = document.createElement("textarea");
    tempInput.value = lastGeneratedWaMessage;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const copyLabel = document.getElementById("copyBtnLabel");
    copyLabel.textContent = "Tersalin!";
    showToast("Format pesan berhasil disalin!");
    setTimeout(() => {
        copyLabel.textContent = "Salin Teks";
    }, 2000);
}

function showToast(msg) {
    const toast = document.getElementById("toastNotification");
    document.getElementById("toastMessage").textContent = msg;
    toast.classList.remove("opacity-0", "translate-y-[-10px]");
    toast.classList.add("opacity-100", "translate-y-0");

    setTimeout(() => {
        toast.classList.remove("opacity-100", "translate-y-0");
        toast.classList.add("opacity-0", "translate-y-[-10px]");
    }, 2600);
}

// Jalankan aplikasi saat halaman selesai dimuat
window.addEventListener("DOMContentLoaded", initApp);
