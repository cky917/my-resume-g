# my-resume-g

一个简单的配置化简历生成静态页面系统 author:chenkeyi

基于vue + nuxt + nodejs， 只需要更改 `/resume/resumeData.yaml` 配置文件，再执行`npm run generate`即可生成一个网页版简历,执行`npm run deploy`可自动发布到gh-page分支

[demo](https://cky917.github.io/my-resume-g)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

$ npm run setup
```

配置github `./config.json`

```javascript
{
    "githubUserName": "cky917", //你的github用户名
    "githubProjectName": "my-resume-g" //这个项目在github的名称，需要提前建好，并创建一个gh-pages分支
}
```

## 编译

```bash

# serve with hot reload at localhost:3000
$ npm run dev

# 生成静态页面
$ npm run generate
```

## 编译并发布到github gh-pages分支，参考了hexo -g的实现

```bash

npm run deploy

```

通过`https://你的github用户名.github.io/github项目名`访问

## 后续可能会实现的功能

- preview支持图片预览(完成)
- 头像地址配置化(完成)
- pdf下载
- 支持多个配置文件生成多个不同简历，通过不同的路径访问
- 皮肤模板
- 命令行命令支持(完成)

## 后续应该不会实现的功能

- 在线富文本编辑
