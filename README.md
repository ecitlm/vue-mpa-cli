# vue-cli 多页面应用

基于vue-cli 2.9.3 版本`vue init webpack`命令生成的的应用，在此基础上加了些东西变成了多页面的

### 页面创建
在 `src/module`文件夹目录可以创建页面
如`index`文件夹,一个页面包括以下三个文件
```
app.html
app.js
App.vue
```
文件夹里必须包括一个.html 文件，.js 文件，.vue 文件作为入口文件
`npm run dev`的时候提示打开 localhost:8080 即可

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080/index.html
npm run dev

# build for production with minification
npm run build
# 文件打包之后 可以启动本地服务查看
# serve with hot reload at localhost:2333
node server


```
