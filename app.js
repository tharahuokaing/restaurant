/**
 * អាណាចក្រ Imperial POS - ភោជនីយដ្ឋាន ហួ កាំង
 * កំណែប្រែ៖ ការទូទាត់តាមធនាគារ និងគ្រប់គ្រងស្តុក
 */

// ១. បញ្ជីទិន្នន័យមន្តអាគម (Imperial Menu Data)
const imperialMenu = [
    { id: 1, name: "អាម៉ុកត្រី", english_name: "Fish Amok", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Fish+Amok+Cambodian+Food&tbm=isch" },
    { id: 2, name: "សម្លកកូរ", english_name: "Samlor Korko", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Samlor+Korko&tbm=isch" },
    { id: 3, name: "ឡុកឡាក់សាច់គោ", english_name: "Beef Lok Lak", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Beef+Lok+Lak&tbm=isch" },
    { id: 4, name: "នំបញ្ចុកសម្លប្រហើរ", english_name: "Num Banh Chok", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Num+Banh+Chok&tbm=isch" },
    { id: 5, name: "សម្លម្ជូរគ្រឿងសាច់គោ", english_name: "Beef Sour Soup", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Beef+Sour+Soup+Khmer&tbm=isch" },
    { id: 6, name: "ក្តាមឆាម៉េចខ្ចី", english_name: "Fried Crab", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Fried+Crab+with+Green+Pepper+Kampot&tbm=isch" },
    { id: 7, name: "សម្លខ្ទិះត្រីប្រឡាក់", english_name: "Fish Coconut Curry", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Fish+Coconut+Curry+Khmer&tbm=isch" },
    { id: 8, name: "បាយសាច់ជ្រូក", english_name: "Bai Sach Chrouk", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Bai+Sach+Chrouk&tbm=isch" },
    { id: 9, name: "ញាំស្វាយខ្ចីត្រីឆ្អើរ", english_name: "Green Mango Salad", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Green+Mango+Salad+with+Smoked+Fish&tbm=isch" },
    { id: 10, name: "សាច់ជ្រូកខ្វៃ", english_name: "Crispy Roasted Pork", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Crispy+Roasted+Pork+Khmer&tbm=isch" },
    { id: 11, name: "ឆាបាយសាច់ជ្រូក", english_name: "Pork Fried Rice", price: 2.50, category: "Food", stock: 0, image_url: "https://www.google.com/search?q=Pork+Fried+Rice&tbm=isch" },
    { id: 12, name: "Red Label 1L", english_name: "Whisky", price: 15.00, category: "Alcohol", stock: 0, image_url: "red1liter" },
    { id: 13, name: "Black Label 1L", english_name: "Whisky", price: 30.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Johnnie+Walker+Black+Label+1L&tbm=isch" },
    { id: 14, name: "Gold Label 1L", english_name: "Whisky", price: 50.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Johnnie+Walker+Gold+Label+Reserve&tbm=isch" },
    { id: 15, name: "Platinium 75ml", english_name: "Whisky", price: 18.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Johnnie+Walker+Platinum+Label&tbm=isch" },
    { id: 16, name: "Blue label 75ml", english_name: "Whisky", price: 180.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Johnnie+Walker+Blue+Label&tbm=isch" },
    { id: 17, name: "Penfold Bin 2", english_name: "Wine", price: 22.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Penfolds+Bin+2&tbm=isch" },
    { id: 18, name: "Penfold Bin 9", english_name: "Wine", price: 30.00, category: "Alcohol", stock: 0, image_url: "https://www.google.com/search?q=Penfolds+Bin+9&tbm=isch" },
    { id: 19, name: "Penfold Bin 389", english_name: "Wine", price: 100.00, category: "Alcohol", stock: 0, image_url: "data:image/jpeg;base64,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" },
    { id: 20, name: "Gold XR 21Y", english_name: "Whisky", price: 105.00, category: "Alcohol", stock: 4, image_url: "data:image/jpeg;base64,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" },
    { id: 21, name: "Doble Black 1L", english_name: "Vodka", price: 35.00, category: "Alcohol", stock: 0, image_url: "data:image/jpeg;base64,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" },
    { id: 22, name: "Ciroc", english_name: "Vodka", price: 35.00, category: "Alcohol", stock: 0, image_url: "https://www.totalwine.com/spirits/vodka/vodka/ciroc-vodka/p/96062750" }
];

let cart = [];
const ADMIN_PASSWORD = "168";
const EXCHANGE_RATE = 4100; // $1 = 4100 Riel

// ២. មុខងារសំឡេង (Audio Functionality)
function speakKhmer(text) {
    const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=km&client=tw-ob`);
    audio.play();
}

// ៣. បង្ហាញមុខម្ហូប (Render Menu)
function renderHologramMenu(products) {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = products.map(p => {
        const isLowStock = p.stock <= 5;
        const stockColor = isLowStock ? '#ff4d4d' : '#00ffff';
        const disabled = p.stock <= 0 ? 'pointer-events: none; opacity: 0.4;' : '';

        return `
        <div class="hologram-card" style="${disabled}" onclick="addToCart(${p.id})">
            <div class="scanline"></div>
            <img src="https://source.unsplash.com/200x150/?${p.english_name.replace(' ', ',')},food" class="prod-img">
            <div class="kh-name">${p.name}</div>
            <div class="prod-price">$${p.price.toFixed(2)}</div>
            <div style="font-size: 0.8em; color: ${stockColor}; margin-top: 5px;">ស្តុក: ${p.stock}</div>
        </div>`;
    }).join('');
}

// ៤. គ្រប់គ្រងកន្ត្រកទំនិញ (Cart Logic)
function addToCart(id) {
    const product = imperialMenu.find(p => p.id === id);
    const cartItem = cart.find(i => i.id === id);
    const currentQtyInCart = cartItem ? cartItem.qty : 0;

    if (currentQtyInCart >= product.stock) {
        speakKhmer("សោកស្តាយ ទំនិញនេះអស់ពីស្តុកហើយ");
        return alert("អស់ស្តុកហើយ!");
    }

    speakKhmer(product.name);
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateInvoice();
}

function removeFromCart(id) {
    const index = cart.findIndex(i => i.id === id);
    if (index > -1) {
        cart[index].qty > 1 ? cart[index].qty-- : cart.splice(index, 1);
    }
    updateInvoice();
}

// ៥. គណនាវិក្កយបត្រ (Invoice Calculation)
function updateInvoice() {
    let subtotal = 0;
    const cartList = document.getElementById('cart-list');

    cartList.innerHTML = cart.map(i => {
        const itemTotal = i.price * i.qty;
        subtotal += itemTotal;
        return `
        <div class="invoice-item" style="display:flex; justify-content:space-between; align-items:center; color:#00ffff; margin-bottom:8px; border-bottom:1px solid rgba(0,255,255,0.1);">
            <span>${i.name} x${i.qty}</span>
            <div>
                <button onclick="removeFromCart(${i.id})" style="background:#ff4d4d; border:none; border-radius:5px; color:white; padding:2px 8px; cursor:pointer;">-</button>
                <span style="margin-left:10px;">$${itemTotal.toFixed(2)}</span>
            </div>
        </div>`;
    }).join('');

    const discount = subtotal * 0.15;
    const finalUSD = subtotal - discount;
    const finalRiel = Math.round((finalUSD * EXCHANGE_RATE) / 100) * 100;

    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('discount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('final-total').innerText = `$${finalUSD.toFixed(2)}`;

    // បង្ហាញតម្លៃជាប្រាក់រៀល (ជំនួស SOL)
    const rielDisplay = document.getElementById('riel-total');
    if (rielDisplay) rielDisplay.innerText = `${finalRiel.toLocaleString()} ៛`;
}

// ៦. ការទូទាត់ប្រាក់ (Payment Logic)
function checkout() {
    if (cart.length === 0) return alert("សូមជ្រើសរើសមុខម្ហូបជាមុនសិន!");
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('qr-display').innerHTML = "";
}

function pay(method) {
    const totalUSD = document.getElementById('final-total').innerText.replace('$', '');
    const modalTitle = document.getElementById('modal-title');
    const qrDisplay = document.getElementById('qr-display');

    if (method === 'ABA KHQR') {
        modalTitle.innerText = "ABA Bank / KHQR Payment";
        const qrUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=https://pay.ababank.com/002363507/${totalUSD}`;
        qrDisplay.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 15px; display: inline-block; margin-top: 15px;">
                <img src="${qrUrl}" style="width:200px;">
                <p style="color: #003e52; font-weight: bold; margin-top: 10px;">HUOKAING THARA</p>
                <p style="color: #d35400; font-size: 1.2em; font-weight: bold;">$${totalUSD}</p>
            </div>`;
    } else {
        modalTitle.innerText = `ទូទាត់តាម ${method}`;
        qrDisplay.innerHTML = `<div class="loader" style="margin: 40px auto;"></div><p style="color:white;">សូមឆូតកាត ឬបញ្ចូលកាត...</p>`;
        setTimeout(() => {
            qrDisplay.innerHTML = `<div style="color: #27ae60; font-size: 60px;">✔</div><p style="color: white;">ការអនុញ្ញាតជោគជ័យ!</p>`;
        }, 2000);
    }
}

// ៧. បញ្ចប់ប្រតិបត្តិការ (Complete & Save Receipt)
async function completeTransaction() {
    if (cart.length === 0) return;

    // កាត់ស្តុកចេញពីទិន្នន័យមេ
    cart.forEach(item => {
        const product = imperialMenu.find(p => p.id === item.id);
        if (product) product.stock -= item.qty;
    });

    // ថតរូបវិក្កយបត្រទុកជាភស្តុតាង
    const receiptElement = document.getElementById('cart');
    const canvas = await html2canvas(receiptElement, { backgroundColor: "#050510", scale: 2 });
    const link = document.createElement('a');
    link.download = `Imperial-Receipt-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();

    speakKhmer("ការទូទាត់ជោគជ័យ សូមអរគុណចំពោះការគាំទ្រ");

    // បង្ហាញសញ្ញាជោគជ័យលើ Modal
    document.getElementById('qr-display').innerHTML = `<div style="color: #27ae60; font-size: 60px;">✔</div><p style="color: white;">វិក្កយបត្រត្រូវបានរក្សាទុក!</p>`;

    setTimeout(() => {
        cart = [];
        updateInvoice();
        renderHologramMenu(imperialMenu);
        closePayment();
    }, 2500);
}

// ៨. ប្រព័ន្ធគ្រប់គ្រង Admin
function openAdminPanel() {
    const pass = prompt("សូមបញ្ចូលលេខកូដសម្ងាត់អាណាចក្រ៖");
    if (pass === ADMIN_PASSWORD) {
        renderAdminStock();
        document.getElementById('admin-modal').style.display = 'flex';
    } else {
        alert("លេខកូដមិនត្រឹមត្រូវ!");
    }
}

function renderAdminStock() {
    const list = document.getElementById('admin-stock-list');
    list.innerHTML = imperialMenu.map(p => `
        <div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #333;">
            <span style="color:#00ffff;">${p.name} (ស្តុក: ${p.stock})</span>
            <div>
                <input type="number" id="restock-${p.id}" style="width:50px; border-radius:5px;" placeholder="+">
                <button onclick="updateStock(${p.id})" style="background:#27ae60; color:white; border:none; padding:3px 10px; border-radius:5px; cursor:pointer; margin-left:5px;">ថែម</button>
            </div>
        </div>`).join('');
}

function updateStock(id) {
    const input = document.getElementById(`restock-${id}`);
    const amount = parseInt(input.value);
    if (amount > 0) {
        imperialMenu.find(p => p.id === id).stock += amount;
        renderAdminStock();
        renderHologramMenu(imperialMenu);
        input.value = "";
    }
}

// ៩. មុខងារស្វែងរក និង Filter
function searchProduct(query) {
    const term = query.toLowerCase();
    const filtered = imperialMenu.filter(p =>
        p.name.includes(term) || p.english_name.toLowerCase().includes(term)
    );
    renderHologramMenu(filtered);
}

function filter(category) {
    const buttons = document.querySelectorAll('.btn-cat');
    buttons.forEach(btn => btn.classList.remove('active'));
    // ចំណាំ៖ ព្រះអង្គត្រូវបន្ថែម class 'active' ក្នុង CSS សម្រាប់ប៊ូតុងដែលកំពុងរើស

    const filtered = category === 'All' ? imperialMenu : imperialMenu.filter(p => p.category === category);
    renderHologramMenu(filtered);
}

// ចាប់ផ្តើមដំណើរការអាណាចក្រ
renderHologramMenu(imperialMenu);
