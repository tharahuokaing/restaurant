<script>
// ១. បញ្ជីទិន្នន័យមន្តអាគម (Imperial Menu Data)
const imperialMenu = [
    { id: 1, name: "អាម៉ុកត្រី", english_name: "Fish Amok", price: 2.50, category: "Food", stock: 0 },
    { id: 2, name: "សម្លកកូរ", english_name: "Samlor Korko", price: 2.50, category: "Food", stock: 0 },
    { id: 3, name: "ឡុកឡាក់សាច់គោ", english_name: "Beef Lok Lak", price: 2.50, category: "Food", stock: 0 },
    { id: 4, name: "នំបញ្ចុកសម្លប្រហើរ", english_name: "Num Banh Chok", price: 2.50, category: "Food", stock: 0 },
    { id: 5, name: "សម្លម្ជូរគ្រឿងសាច់គោ", english_name: "Beef Sour Soup", price: 2.50, category: "Food", stock: 0 },
    { id: 6, name: "ក្តាមឆាម៉េចខ្ចី", english_name: "Fried Crab", price: 2.50, category: "Food", stock: 0 },
    { id: 7, name: "សម្លខ្ទិះត្រីប្រឡាក់", english_name: "Fish Coconut Curry", price: 2.50, category: "Food", stock: 0 },
    { id: 8, name: "បាយសាច់ជ្រូក", english_name: "Bai Sach Chrouk", price: 2.50, category: "Food", stock: 0 },
    { id: 9, name: "ញាំស្វាយខ្ចីត្រីឆ្អើរ", english_name: "Green Mango Salad", price: 2.50, category: "Food", stock: 0 },
    { id: 10, name: "សាច់ជ្រូកខ្វៃ", english_name: "Crispy Roasted Pork", price: 2.50, category: "Food", stock: 0 },
    { id: 11, name: "ឆាបាយសាច់ជ្រូក", english_name: "Pork Fried Rice", price: 2.50, category: "Food", stock: 0 },

    { id: 12, name: "Red Label 1L", english_name: "Whisky", price: 15.00, category: "Alcohol", stock: 0 },
    { id: 13, name: "Black Label 1L", english_name: "Whisky", price: 30.00, category: "Alcohol", stock: 0 },
    { id: 14, name: "Gold Label 1L", english_name: "Whisky", price: 50.00, category: "Alcohol", stock: 0 },
    { id: 15, name: "Platinium 75ml", english_name: "Whisky", price: 18.00, category: "Alcohol", stock: 0 },
    { id: 16, name: "Blue label 75ml", english_name: "Whisky", price: 180.00, category: "Alcohol", stock: 0 },
    { id: 17, name: "Penfold Bin 2", english_name: "Wine", price: 22.00, category: "Alcohol", stock: 0 },
    { id: 18, name: "Penfold Bin 9", english_name: "Wine", price: 30.00, category: "Alcohol", stock: 0 },
    { id: 19, name: "Penfold Bin 389", english_name: "Wine", price: 100.00, category: "Alcohol", stock: 0 },
    { id: 20, name: "Gold XR 21Y", english_name: "Whisky", price: 105.00, category: "Alcohol", stock: 4 },
    { id: 21, name: "Doble Black 1L", english_name: "Vodka", price: 35.00, category: "Alcohol", stock: 0 },
    { id: 22, name: "Ciroc", english_name: "Vodka", price: 35.00, category: "Alcohol", stock: 0 }
];

let cart = [];
const ADMIN_PASSWORD = "168";
const EXCHANGE_RATE = 4100; // $1 = 4100 Riel

// 🔎 Google Custom Search API Config
const GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY";
const GOOGLE_CX = "YOUR_CUSTOM_SEARCH_ENGINE_ID";

// Function to fetch Google Image
async function getGoogleImage(query) {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${GOOGLE_CX}&searchType=image&num=1&key=${GOOGLE_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
            return data.items[0].link;
        }
    } catch (err) {
        console.error("Google Image Fetch Error:", err);
    }
    return "https://via.placeholder.com/200x150?text=No+Image"; // fallback
}

// ៣. បង្ហាញមុខម្ហូប (Render Menu with Google Images)
async function renderHologramMenu(products) {
    const menuDiv = document.getElementById('menu');
    const cards = await Promise.all(products.map(async p => {
        const imgUrl = await getGoogleImage(p.english_name);
        const isLowStock = p.stock <= 5;
        const stockColor = isLowStock ? '#ff4d4d' : '#00ffff';
        const disabled = p.stock <= 0 ? 'pointer-events: none; opacity: 0.4;' : '';

        return `
        <div class="hologram-card" style="${disabled}" onclick="addToCart(${p.id})">
            <div class="scanline"></div>
            <img src="${imgUrl}" class="prod-img">
            <div class="kh-name">${p.name}</div>
            <div class="prod-price">$${p.price.toFixed(2)}</div>
            <div style="font-size: 0.8em; color: ${stockColor}; margin-top: 5px;">ស្តុក: ${p.stock}</div>
        </div>`;
    }));
    menuDiv.innerHTML = cards.join('');
}

// ⏩ Start
renderHologramMenu(imperialMenu);
</script>
