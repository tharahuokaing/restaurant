const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// បង្កើតការតភ្ជាប់ទៅកាន់ Database File
const dbPath = path.resolve(__dirname, 'pos.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("❌ បរាជ័យក្នុងការតភ្ជាប់ Database:", err.message);
    else console.log("✅ អាណាចក្រទិន្នន័យ SQLite បានត្រៀមខ្លួនរួចរាល់!");
});

/**
 * រៀបចំរចនាសម្ព័ន្ធតារាងទិន្នន័យ
 */
db.serialize(() => {
    // ១. បង្កើតតារាងផលិតផល (ជាមួយការបន្ថែម Column Stock)
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        english_name TEXT,
        price REAL NOT NULL,
        category TEXT,
        stock INTEGER DEFAULT 0
    )`);

    // ២. បង្កើតតារាងសម្រាប់កត់ត្រាការលក់ (Sales History) - សម្រាប់របាយការណ៍ថ្ងៃក្រោយ
    db.run(`CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        total_usd REAL,
        total_riel INTEGER,
        payment_method TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // ៣. បញ្ចូលទិន្នន័យដំបូងប្រសិនបើតារាងនៅទំនេរ
    db.get("SELECT count(*) as count FROM products", (err, row) => {
        if (err) return console.error(err.message);

        if (row.count === 0) {
            console.log("📦 កំពុងរៀបចំបញ្ជីមុខម្ហូបដំបូងចូលក្នុងឃ្លាំង...");

            const initialProducts = [
                ['អាម៉ុកត្រី', 'Fish Amok', 2.50, 'Food', 0],
                ['សម្លកកូរ', 'Samlor Korko', 2.50, 'Food', 0],
                ['ឡុកឡាក់សាច់គោ', 'Beef Lok Lak', 2.50, 'Food', 0],
                ['Red Label 1L', 'Whisky', 15.00, 'Alcohol', 0],
                ['Black Label 1L', 'Whisky', 30.00, 'Alcohol', 0],
                ['Blue label 75ml', 'Whisky', 180.00, 'Alcohol', 0],
                ['Gold XR 21Y', 'Whisky', 105.00, 'Alcohol', 0]
            ];

            const stmt = db.prepare(`INSERT INTO products (name, english_name, price, category, stock)
                                   VALUES (?, ?, ?, ?, ?)`);

            initialProducts.forEach(p => {
                stmt.run(p, (err) => {
                    if (err) console.error("❌ បញ្ចូលទិន្នន័យមិនចូល:", err.message);
                });
            });
            stmt.finalize();
            console.log("✨ បញ្ជីមុខម្ហូបត្រូវបានបញ្ចូលដោយជោគជ័យ!");
        }
    });
});

module.exports = db;
