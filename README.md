# vue-cli 多页面应用

基于vue-cli 2.9.3 版本`vue init webpack`命令生成的的应用，在此基础上进行改造成多页应用脚手架.在写多页的基础上完全与写Vue单页应用一样,并且兼容单页模块`vue-router`

### 页面创建
在 `src/views`文件夹目录可以创建页面
如`index`文件夹,一个页面包括以下2个文件 (index.html) 文件为根目录公用的 模板文件、根据根目录下的`title.js`配置生成 `title`标题
```
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
### webpack 打包改造
对Vue的webpack进行了改造
```javascript
function getEntries (path) {
  let entries = {}
  glob.sync(path).forEach(entry => {
    if (/(views\/(?:.+[^.html]))/.test(entry)) {
      entries[RegExp.$1.slice(0, RegExp.$1.lastIndexOf('/'))] = entry
    }
  })
  return entries
}
```

```javascript
 for (let pathname in entry) {
        let filename = pathname.replace(/views\//, '')
        let conf = {
          filename: filename === 'index'
            ? `${filename}.html`
            : `${filename}/index.html`,
          template: entry[pathname],
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
          chunksSortMode: 'dependency'
        }
        if (pathname in devWebpackConfig.entry) {
          conf.chunks = ['manifest', 'vendor', pathname]
          conf.hash = true
        }
        devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
  }
```

### http网络请求封装
`http.js`
```javascript
import axios from 'axios'
let instance = axios.create({
  baseURL: process.env.BACK_BASE_URL,
  timeout: 60 * 1000
})
console.log(instance)
// request拦截
instance.interceptors.request.use(config => {
  config.headers.authorization = `token` // 头部设置token信息 可以拿vuex中数据
  return config
}, error => {
console.log('请求出错了...', error)
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  if (response.data.code === 200) {
//    return response.data
  } else {
    console.log(response)
    let err = new Error()
    err.response = response
    return Promise.reject(err)
  }
}, error => {
  return Promise.reject(error)
})

const httpRequest = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 200) {
            reject(error.response.data)
          }
        } else if (error.request) {
          if (error.code === 'ECONNABORTED') {
            // Toast({
            //   message: '请求超时，请刷新重试',
            //   className: 'error-net',
            //   duration: 3000
            // })
          } else {
            console.log('网络断开,请检查网络')
          }
        } else {
          console.log('请求无响应')
        }
      })
  })
}
```
