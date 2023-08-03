const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

// 发布本地文件到外网
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const data = require('./src/data.json');
  res.json(data);
});
const PORT = 11451;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}\n\nURL: http://127.0.0.1:${PORT}`);
});

// 转发文件到外网
const url = 'https://registry.koishi.chat/index.json';
const filePath = './src/data.json';
const saveFile = () => {
  const file = fs.createWriteStream(filePath);
  https.get(url, { followAllRedirects: true }, (response) => {
    response.pipe(file);
    console.log(`[${new Date()}] 已同步源`)
  });
}

saveFile();
setInterval(saveFile, 60000);