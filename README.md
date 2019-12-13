# fe-utils

> 本工程存在的意义：旨在为多个后台系统提供公共服务，公共代码统一迭代维护，减少重复性工作

## 技术点

- [x] **typescript**，[参考教程](https://github.com/semlinker/awesome-typescript)
- [x] **eslint**
- [x] **@typescript-eslint**
- [x] **prettier**
- [x] **standard-version**
- [x] **unit-test(jest)**，[参考教程](https://jestjs.io)
- [x] **commit convention**
- [x] **react component / jsx**

## 目录结构

tree -a -C --dirsfirst -L 3 -I 'node_modules|.git'

```sh
.
├── .github
│   ├── COMMIT_CONVENTION.md
│   └── verifyCommitMsg
├── lib                         ---es5源码[cjs]（ts 编译产生）
│   ├── AppManager
│   │   ├── index.d.ts
│   │   └── index.js
│   ├── index.d.ts
│   └── index.js
├── src                         ---es6+源码（手动编写）
│   ├── AppManager
│   │   └── index.ts
│   ├── __tests__
│   │   └── AppManager.test.ts
│   └── index.ts                ---入口文件，所有模块在这里统一导出
├── typings                     ---声明文件，类型补充（声明后全局可用），补全同名 .js 文件类型声明如：JQuery等
│   ├── custom-typings.d.ts
│   └── index.d.ts
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── tsconfig.base.json
└── tsconfig.cjs.json
```

## 开发

### Install

fork 本仓库<https://github.com/tmrwh/fe-utils>，并下载至本地

```sh
git clone https://github.com/${your name}/fe-utils && cd fe-utils
```

关联远程仓库

```sh
git remote add upstream git@github.com:tmrwh/fe-utils.git
```

拉取最新代码

```sh
git fetch upstream master

git rebase upstream/master master
```

### Write

- 在`src`目录下新建文件夹存放即将开发的新功能
- 在`src/index.ts`文件导出上一步开发的新功能
- 在`src/__tests__`目录下新建测试用例

### Test

#### unit test(jest)

```sh
npm run test
```

#### npm pkg test([npm link](https://docs.npmjs.com/cli/link.html))

##### 方法一

> 全局添加

1. 在 fe-utils 根目录下执行 `npm link`, 此时 `@ndog/webapp-kit`(package.json 中的 name) 会被软链到全局的 node_modules 目录下
2. 在 micro_container 再次执行 `npm link @ndog/webapp-kit`, 此时 micro_container 项目的 node_modules 目录将包含`@ndog/webapp-kit`依赖包

示例:

```shell
# 先去到模块目录，把它 link 到全局
cd /Users/jiangzhiguo/Workspace/mrcd/fe-utils
npm link
# /Users/jiangzhiguo/.nvm/versions/node/v10.15.3/lib/node_modules/@ndog/webapp-kit -> /Users/jiangzhiguo/Workspace/mrcd/fe-utils
# 再去项目目录通过包名来 link
cd /Users/jiangzhiguo/Workspace/mrcd/micro_container
npm link @ndog/webapp-kit
# /Users/jiangzhiguo/Workspace/mrcd/micro_container/node_modules/@ndog/webapp-kit -> /Users/jiangzhiguo/.nvm/versions/node/v10.15.3/lib/node_modules/@ndog/webapp-kit -> /Users/jiangzhiguo/Workspace/mrcd/fe-utils
```

如需删除软连

```sh
cd /Users/jiangzhiguo/Workspace/mrcd/micro_container
npm unlink @ndog/webapp-kit
```

##### 方法二

> 使用绝对(或者相对)路径进行软连

示例:

```shell
cd /Users/jiangzhiguo/Workspace/mrcd/micro_container
npm link /Users/jiangzhiguo/Workspace/mrcd/fe-utils

# /Users/jiangzhiguo/Workspace/mrcd/fe-nd-utils/node_modules/@ndog/webapp-kit -> /Users/jiangzhiguo/.nvm/versions/node/v10.15.3/lib/node_modules/@ndog/webapp-kit -> /Users/jiangzhiguo/Workspace/mrcd/fe-utils
```

### Build

```sh
npm run build
```

### Commmit

**_若`src`目录有改动切记提交前运行 `npm run build` 将 ts 编译成 js（es5）_**

```sh
git add .
git commit -m "xxx"
```

## Publish Steps（发布私有仓库流程）

### 1. Login

```sh
npm adduser --registry http://172.31.29.76:4873
npm login
# Logged in as xxx on http://172.31.29.76:4873/.
```

### 2. Version(control: [standard-version](https://github.com/conventional-changelog/standard-version))

#### First Release

To generate your changelog for your first release, simply do:

```sh
npm run release -- --first-release
```

This will tag a release without bumping the version in package.json (et al.).

When ready, push the git tag and npm publish your first release.

#### Cut a Release

If you typically use `npm version` to cut a new release, do this instead:

```sh
npm run release
```

As long as your git commit messages are conventional and accurate, you no longer need to specify the semver type - and you get CHANGELOG generation for free!

After you cut a release, you can push the new git tag and `npm publish` (or `npm publish --tag next`) when you're ready.

#### Release as a pre-release

Use the flag `--prerelease` to generate pre-releases:

Suppose the last version of your code is `1.0.0`, and your code to be committed has patched changes. Run:

```sh
npm run release -- --prerelease
```

you will get version `1.0.1-0`.

If you want to name the pre-release, you specify the name via `--prerelease <name>`.

For example, suppose your pre-release should contain the `alpha` prefix:

```sh
npm run release -- --prerelease alpha
```

this will tag the version `1.0.1-alpha.0`

#### Release as a target type imperatively like npm version

To forgo the automated version bump use `--release-as` with the argument `major`, `minor` or `patch`:

Suppose the last version of your code is `1.0.0`, you've only landed `fix:` commits, but you would like your next release to be a `minor`. Simply do:

```sh
npm run release -- --release-as minor
# or
npm run release -- --release-as 1.1.0
```

you will get version `1.1.0` rather than the auto generated version `1.0.1`.

> NOTE: you can combine `--release-as` and `--prerelease` to generate a release. This is useful when publishing experimental feature(s).

#### Prevent Git Hooks

If you use git hooks, like pre-commit, to test your code before committing, you can prevent hooks from being verified during the commit step by passing the `--no-verify` option:

```sh
npm run release -- --no-verify
```

### 3. Npm publish

```sh
# 切换ndog源，然后发布
nrm ls
nrm add ndog http://172.31.29.76:4873/
nrm use ndog
npm publish
# 或者
npm publish --registry http://172.31.29.76:4873
```

### 4. Git tag

`standard-version`会自动为新版本打标签，只需推送至远程仓库即可

```sh
git push --follow-tags upstream master
```

## Usage（使用）

```sh
npm i --save-dev @ndog/webapp-kit
```

```javascript
import NDAppKit from '@ndog/webapp-kit'
...
```
