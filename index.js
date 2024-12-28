const express = require('express');
const bodyParser = require('body-parser');
const PORT = 11451;

// 添加自定义插件
const addSelfPlugin = (sourcePluginData,devPluginData) => {
    for (const item of devPluginData) {
        const moba = require('./src/dev-plugin-moba.json');
        moba.package.name = item.name;
        moba.package.links.repository = item.repository;
        moba.package.links.npm = item.npm;
        moba.shortname = item.shortname;
        sourcePluginData.objects.push(moba);
        console.log(`插件 ${item.name} 已添加`);
    }
};

// 读取本地插件数据
const pluginData = require("./src/dev-plugin-map.json");

// 最终合成的插件商店
const finalPluginData = require("./src/data.json");

// 创建 Express 应用
const start_server = () => {
    const app = express();
    app.use(bodyParser.json());

    // 定义根路由
    app.get('/', (req, res) => {
        res.json(finalPluginData);
    });

    // 启动服务器
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}\n\nURL: http://127.0.0.1:${PORT}`);
    });
}

addSelfPlugin(finalPluginData,pluginData);
start_server();
