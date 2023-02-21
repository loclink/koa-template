# koa-template

koa + typescript + typeorm + mysql 的后端项目开发模板，该模板通过多次开发 koa 项目，在长期积累和沉淀后总结而成。

## 特点：

- 使用 nodemon 开发环境热更新
- 一键创建数据库并自动根据实体创建表
- 自动注册路由、自动加载实体
- 使用全局中间件提交成功和错误

## 安装依赖：

建议使用 `pnpm`

```sh
pnpm install
```

## 首次运行

首次运行时，需要执行初始化命令创建数据库和相关数据表

```sh
pnpm init:db
```

## 开发模式

```sh
pnpm dev
```

