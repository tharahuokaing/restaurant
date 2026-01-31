/**
 * អាណាចក្រ Imperial POS - ភោជនីយដ្ឋាន ហួ កាំង
 * កំណែប្រែ៖ ការទូទាត់តាមធនាគារ និងគ្រប់គ្រងស្តុក
 */

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
const ADMIN_PASSWORD = "dutyfree";
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
