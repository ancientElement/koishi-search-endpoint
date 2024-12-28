<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/initialencounter/mykoishi">
    <a href="https://koishi.chat/" target="_blank">
    <img width="160" src="https://koishi.chat/logo.png" alt="logo">
  </a>
  </a>

<h3 align="center">koishi-search-endpoint</h3>

<p align="center">
    搭建自己的Koishi插件市场源叭！
    <a href="https://github.com/BSTluo/koishi-search-endpoint.git">
        原项目 BSTluo/koishi-search-endpoint
    </a>
</p>
</div>

### 在src文件夹中创建文件dev-plugin-map.json
输入格式如下的json文件：
`插件名、仓库地址、npm地址、插件简称`
```json
[
    {
        "name": "koishi-plugin-blockly",
        "repository": "https://github.com/koishijs/koishi-plugin-blockly.git",
        "npm": "https://www.npmjs.com/package/",
        "shortname": "blockly"
    }
]
```
### 运行
自行填写端口`PORT`，使用`node index.js`、`npm start`运行
### 访问
使用配置克隆，得到两份配置文件，公用、私用，分别填`search.endpoint`为`默认官方地址`和`http://<ip>:PORT`
![alt text](image.png)
### 使用
根据安装需要启用插件配置，请注意切换前需要先停用之前启用的market插件！