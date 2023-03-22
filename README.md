# koa-template

koa + typescript + typeorm + mysql

## 特点：

- 使用 nodemon 开发环境热更新
- 一键创建数据库并自动根据实体创建表
- 自动注册路由、自动加载实体
- 使用全局中间件提交成功和错误
- 默认集成 swagger-jsdoc、koa2-swagger-ui，自动根据 JsDoc 注释生成 api 文档
- 集成 pm2 管理器，生产环境中执行 `pnpm start`

## 安装依赖：

```sh
pnpm install
```

## 首次运行

在项目根目录下创建 `.env` 环境变量文件。

```
APP_PORT=7778  # 服务启动端口
MYSQL_PORT=3306 # mysql 数据库端口
MYSQL_HOST=localhost  # mysql主机地址
MYSQL_USER=root # mysql 用户名
MYSQL_PASSWORD=1118 # mysql 密码
MYSQL_DATABASE=demo_db # 数据库名称，若数据库不存在，则需执行 `pnpm init:db` 初始化数据库

```

首次运行时，需要执行初始化命令创建数据库和相关数据表

```sh
pnpm init:db
```

## 开发模式

```sh
pnpm dev
```
