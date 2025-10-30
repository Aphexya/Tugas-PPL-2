const fs = require('fs');
if (fs.existsSync('index.html')) {
    console.log("✅ File index.html ditemukan!");
    process.exit(0);
} else {
    console.error("❌ File index.html tidak ditemukan!");
    process.exit(1);
}

