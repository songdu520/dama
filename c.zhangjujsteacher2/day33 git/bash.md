### 终端
微软派系
cmd    
powershell  在cmd基础上进行了升级 集成了部分的unix指令 windows 7 +

Unix派系
bash  git提供 unix内核
x-shell 用于连接远程服务器的工具
linux
unix
osx 
zsh

### 路径
绝对路径
windows操作系统中 从盘符开始
类unix中  绝对路径 根目录 /
从协议开始的也是绝对路径  http://www.baidu.com  ftp://ftp.test.com

相对路径
当前路径开始


### 概念
在类unix中没有文件后缀概念
后缀其实只文件的一种命名方式 . 也是文件名的一部分
在类unix操作系统中 所有的隐藏文件/目录 都是以 (.) 开头的

### 终端命令
```bash
$ pwd     查看当前绝对路径
$ cd      改变目录
$ cd ..   返回上级目录
$ cd /    返回根目录
$ ls      查看当前目录
$ ls -l   以列表形式查看当前目录
$ ls -a   查看隐藏文件和文件夹
$ ls -la  以列表形式查看所有文件/目录
$ mkdir   创建目录
$ touch   创建文件
$ vim     编辑器
$ cat     查看文件
$ cp src dest  复制文件并命名
$ mv src dest  移动文件
$ find . -name 'html'  查找目录

$ rm -rf test/  删除  (危险操作)
$ rm -rf /*

$ find . -name 'node_modules' -print >> 1.txt
$ find . -name 'node_modules' -print | xargs rm -rf

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
```