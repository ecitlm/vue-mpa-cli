# vue-cli 多页面应用

> [原作者项目](https://github.com/breezefeng/vue-cli-multipage)貌似不再更新这个多页面配置,

这是用 vue-cli 2.9.3 版本`vue init webpack`命令生成的的应用，在此基础上加了些东西变成了多页面的

## tip

1.  如果想新建页面的话需要在`src/module`里新建文件夹，且文件夹里必须包括一个.html 文件，.js 文件，.vue 文件作为入口文件
2.  `npm run dev`的时候提示打开 localhost:8080 即可
3.  为了方便维护`npm run build`出来的 html 文件是放在 module 文件夹里的

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080/index.html
npm run dev

# build for production with minification
npm run build
```

## 修改的地方

### webpack.base.conf.js

```javascript
//6行添加
const glob = require("glob");
const entry = getEntries("./src/module/**/*.js"); // 获得入口js文件

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if (/(\module\/(?:.+[^.js]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, "")] = entry;
    }
  });
  return entries;
}
```

然后将`module.exports`里的 entry 改为我们定义的这个 ertry

### webpack.dev.conf.js

```javascript
//12行添加
const glob = require("glob");
const entry = getEntries("./src/module/**/*.js"); // 获得入口js文件

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

//90行添加
for (let pathname in entry) {
  //为了在开发环境下不用再多余输入module
  let filename = pathname.replace(/module\//, ""),
    conf = {
      filename: `${filename}.html`,
      template: entry[pathname],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: "dependency"
    };
  if (pathname in devWebpackConfig.entry) {
    conf.chunks = ["manifest", "vendor", pathname];
    conf.hash = true;
  }
  devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

//最后添加
function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if (/(\module\/(?:.+[^.js]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, "")] = entry;
    }
  });
  return entries;
}
```

### webpack.prod.con.js

```javascript
//13行添加
const glob = require("glob");
const entry = getEntries("./src/module/**/*.html"); // 获得入口hmtl文件

//在module.exports = webpackConfig前添加
for (let pathname in entry) {
  let conf = {
    filename: `${pathname}.html`,
    template: entry[pathname],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: "dependency"
  };
  if (pathname in webpackConfig.entry) {
    conf.chunks = ["manifest", "vendor", pathname];
    conf.hash = true;
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
//在module.exports = webpackConfig后添加
function getEntries(path) {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if (/(\module\/(?:.+[^.html]))/.test(entry)) {
      entries[RegExp.$1.replace(/\/\w+\b/, "")] = entry;
    }
  });
  return entries;
}
```

## 更新

### 2018 5.15 更新config/index.js

修改build配置项下的`assetsPublicPath为'../'` 解决根路径问题