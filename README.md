> 本项目前后端分离，前端参考 [小米商城](www.mi.com) 实现。

> 这是本项目的前端[前端-toUser1.0](https://github.com/Miki-Hunter/toUser-vue-store-1.0)，后端请移步到[重构后端-DRF1.0](https://github.com/Miki-Hunter/store-server-django-Version1.0)

> 相应地，我写了一个管理后台[前端-toAdmin1.0](https://github.com/Miki-Hunter/toAdmin-vue-store-1.0)，基于 vue3 + element-Plus，不过功能还没全部完善，还在学习与改进。 

> 此为 [原博主项目-前端](https://github.com/hai-27/vue-store)，项目改动不大，修改了部分请求逻辑和添加了验证链接进行 "激活" 操作，配合DRF后端使用。

> 此为 [原作者项目-后端](https://github.com/hai-27/store-server) node.js + Koa框架实现

> [重构后端-DRF1.0](https://github.com/Miki-Hunter/store-server-django-Version1.0) django + drf 实现

## 项目简介

本项目前后端分离，前端基于`Vue`+`Vue-router`+`Vuex`+`Element-ui`+`Axios`，参考小米商城实现。后端基于`Django + DRF框架`实现。

前端包含了11个页面：首页、登录、注册、全部商品、商品详情页、关于我们、我的收藏、购物车、订单结算页面、我的订单以及错误处理页面。

实现了商品的展示、商品分类查询、关键字搜索商品、商品详细信息展示、登录、注册、用户购物车、订单结算、用户订单、用户收藏列表以及错误处理功能。

## 技术栈

- **`Vue`+`Vue-router`+`Vuex`+`Element-ui`+`Axios`

### 购物车
购物车采用vuex实现，页面效果参考了小米商城的购物车。

详细实现过程请看：[基于Vuex实现小米商城购物车](https://juejin.im/post/5e660ef9518825490276748a)

### 运行项目
```
1. Clone project

git clone https://github.com/Miki-Hunter/vue-store-1.0.git

2. Project setup

cd vue-store-1.0
npm install

3. Compiles and hot-reloads for development

npm run serve

4. Compiles and minifies for production

npm run build
```
