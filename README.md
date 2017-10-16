# my-resume-g

一个简单的配置化简历生成静态页面系统 author:chenkeyi

基于vue + nuxt + nodejs， 只需要更改 `resumeData.yaml` 配置文件，再执行`nuxt run generate`即可生成一个网页版简历

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# 生成静态页面
$ npm run generate
```

## 后续可能会实现的功能

- preview支持图片预览
- 头像地址配置化
- pdf下载
- 支持多个配置文件生成多个不同简历，通过不同的路径访问
- 皮肤模板
- 命令行命令支持

## 后续应该不会实现的功能

- 在线富文本编辑
