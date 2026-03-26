const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 讓 Node.js 去讀取 public 資料夾裡的 HTML 檔案
app.use(express.static(path.join(__dirname, 'public')));

// 建立安全通道吐 API Key
app.get('/api/config', (req, res) => {
    res.json({
        mapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    });
});

app.listen(port, () => {
    console.log(`伺服器已在連接埠 ${port} 啟動！`);
});