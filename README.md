# koa-template

koa + typescript + typeorm + mysql

## 特点：

- 使用 nodemon 开发环境热更新
- 一键创建数据库并自动根据实体创建表
- 自动注册路由、自动加载实体
- 使用全局中间件提交成功和错误
- 默认集成 swagger-jsdoc、koa2-swagger-ui，自动根据注释生成 api 文档

## 安装依赖：

建议使用 `pnpm`

```sh
pnpm install
```

## 首次运行

在项目根目录下创建 `.env` 环境变量文件。

```
APP_PORT=7778
MYSQL_PORT=3306
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=1118
MYSQL_DATABASE=demo_db

```

首次运行时，需要执行初始化命令创建数据库和相关数据表

```sh
pnpm init:db
```

## 开发模式

```sh
pnpm dev
```
