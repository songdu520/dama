## git
  git是目前世界上最先进分布式的版本控制系统
  github是一个仓库

### 配置

  git config --global user.name 'pudge-w'
  git config --global user.email 'pudge_wj@163.com'

### 上传本地文件
  git init
    初始化
  git add index.html  或者  git add .
    提交到暂存区
  git commit -m 'init index.html'
    提交到本地仓库
  git status 
    查看git的状态
  git diff
    查看版本的差别
  git log    或者   git log --pretty=oneline
    查看版本信息
  git reset HEAD^
    回退一个版本
  git reset --hard cc56901
    回退到指定版本
  git reflog 
    查看所有的历史版本

### 分支
  git branch
    查看分支
  git branch dev
    创建分支
  git checkout dev     或者    git switch dev
    切换分支
  git checkout -b dev2
    创建并切换
  git merge dev2
    合并分支内容
  git branch -d dev2
    删除分支
  git log --graph --pretty=oneline
    查看分支记录

### 关联远程仓库
  生成密钥对
    ssh-keygen -t rsa -C 'pudge_wj@163.com'

  创建项目
    git init
    git add .
    git commit -m 'init'
    git remote add origin git@github.com:pudge-w/taobao.git
    git push -u origin master

  邀请组员
    setting -> manage access

  组员开发
    不要在master做开发!!!!
    git checkout -b zhengguo
    git add .
    git commit -m 'xxx'
    git pull
    git push

  组长
    git fetch --all
    git checkout zhengguo
    git pull
    git checkout master
    git merge zhengguo
    git push

  