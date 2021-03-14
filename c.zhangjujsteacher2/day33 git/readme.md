### 代码管理工具(项目版本管理工具)
用于管理软件源代码的软件
目前市面主流的有两种 git  svn
在现代编辑器中对代码管理工具都有集成
git 分布式版本管理工具  95% 
svn 集中式版本管理工具

### git
Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理
Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

官网  https://git-scm.com/
跨平台（可以运行在不同的操作系统 linux unix windows osx）


### github
https://github.com/
git 和 github 没有任何关系
github是一个网站 全球最大的同性交友网站(全球最大的IT开源社区)

提倡编程社交

提供了免费的git仓库服务
免费的条件  开源
私有仓库    收费 $ 19

开源大法好
jQuery
bootstrap
Vue
React
Angular
ElementUI
...

2018年10月 微软收购了github
私有仓库 免费

### git操作
git管理的代码叫做源(你自己写的)代码

1. 构建项目目录
2. 在项目根目录下创建文件
   .gitignore   仓库管理忽略列表
   README.md    项目说明
3. 在项目的根目录 进行项目初始化
   $ npm init -y
   $ git init


### 用户设置
```bash
### 用户设置 每台电脑只需要进行一次
$ git config --global user.name "Zhang Jun"
$ git config --global user.email "root@rootbk.cn"
```

### 常用命令
```bash
# 查看状态
$ git status   

# 添加管理(添加到暂存区)
$ git add filename     # 添加指定的文件
$ git add path/        # 添加指定目录
$ git add .            # 添加当前目录所有内容  -a  --all

# 从暂存区移除
$ git rm --cached filename  


# 提交到本地仓库
$ git commit -m 'msg'


# 查看提交记录
$ git log

# 恢复到历史提交版本
$ git reset --hard hash(前6位)

# 查看帮助
$ git --help

# 恢复被删除的文件
$ git checkout filename 



```



### 远程仓库操作
```bash
# 设置远程仓库的地址
$ git remote add origin https://github.com/jxsrzj0325/mi.com.git

# 设置主分支
$ git branch -M main

# 将本地的main分支 推送到远程仓库
$ git push -u origin main

# 从远程 克隆仓库
$ git clone https://github.com/jxsrzj0325/mi.com.git

#  从远程仓库 拉取项目
$ git pull origin main
```

### 分支操作
```bash
# 创建分支
$ git branch 分支名

# 查看分支
$ git branch

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名
```