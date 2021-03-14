## 阿里云服务器搭建及项目上线
  1. 购买一个云服务器
    - 阿里云
    - 腾讯云
    - 华为云
    - 百度云
    - 等等
  2. 选择公共镜像系统： CentOS 64位 7.x版本
  3. 自定义密码
    1. 用户名： root
    2. 密码： xxx
  4. 记录自己的公网ip
  5. 远程连接
    1. 阿里云自带的网页版
    2. 使用gitbash连接（推荐）
      ssh root@公网ip

    3. 如果出现 WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
      rm -rf ~/.ssh/known_hosts
  6. 在云服务器上安装node
    ```
      从EPEL库中安装Node.js
      sudo yum install epel-release
      这里的sudo是获得管理员权限

      使用yum命令安装Node.js
      sudo yum install nodejs

      如果node版本过低，升级node版本
      npm i n -g
      n latest 安装最新版的node
    ```
  7. 书写代码来测试一下node使用
    1. 使用express简单搭建一个服务器，暴露几个接口，上传到远程
  8. 使用xftp5上传本地的代码
  9. 配置安全组
  10. 添加负载均衡 pm2 永久的挂起服务
    1. npm i pm2 -g

### 安装mongoDB
  https://www.cnblogs.com/web424/p/6928992.html
  1. 配置MongoDB的yum源
    ```
      创建yum源文件：
        vim /etc/yum.repos.d/mongodb-org-3.4.repo
        输入i
      添加以下内容：
[mongodb-org-3.4]  
name=MongoDB Repository  
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/  
gpgcheck=1  
enabled=1  
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc

      这里可以修改 gpgcheck=0, 省去gpg验证
      安装之前先更新所有包 ：yum update （可选操作）
      i 进入编辑   esc 推出编辑   :wq 保存并推出
    ```

  2. 安装MongoDB
    ```
      安装命令：
      yum -y install mongodb-org
      安装完成后
      查看mongo安装位置 whereis mongod
      查看修改配置文件 ： vim /etc/mongod.conf
    ```

  3. 启动MongoDB
    ```
      启动mongodb ：systemctl start mongod.service
      停止mongodb ：systemctl stop mongod.service
      查到mongodb的状态：systemctl status mongod.service
    ```

  4. 设置开机启动
    ``` 
      systemctl enable mongod.service 
    ```

  5. 启动mongo
    ```
      输入mongo就进入了mongodb环境
      show dbs
      use 2004
      db.webs.insert({name: 'zhangsan'})
      db.webs.find({})
    ```

  6. 设置mongodb远程访问：
    ```      
      编辑mongod.conf注释bindIp,并重启mongodb.
      vim /etc/mongod.conf

      将bindIp注释掉 加#

      重启mongodb：systemctl restart mongod.service

      在本地mongo 远程地址
    ```

### nginx 静态服务器
  https://www.linuxidc.com/Linux/2016-09/134907.htm

  为什么要使用nginx
    我们要通过静态服务器才能将vue或者react项目打包后的内容运行起来

  项目打包

  1. gcc安装
    ```
      安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：

      yum install gcc-c++
    ```

  2. PCRE pcre-devel 安装
    ```
      PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：

      yum install -y pcre pcre-devel
    ```

  3. zlib 安装
    ```
      zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

      yum install -y zlib zlib-devel
    ```

  4. OpenSSL 安装
    ```
      OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
      nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。

      yum install -y openssl openssl-devel
    ```

  5. nginx安装包下载
    ```
      使用wget命令下载（推荐）。
      wget -c https://nginx.org/download/nginx-1.10.1.tar.gz
    ```

  6. 解压
    ```
      依然是直接命令：
      tar -zxvf nginx-1.10.1.tar.gz
      cd nginx-1.10.1
    ```

  7. 配置
    ```
      使用默认配置
      ./configure

      配置https支持的ssl模块
      ./configure --prefix=/usr/local/nginx --with-http_ssl_module
    ```

  8. 编译安装
    ```
      make
      make install
      查找安装路径：
      whereis nginx
    ```

  9. 启动、停止nginx
    ```
      cd /usr/local/nginx/sbin/
      ./nginx 
      ./nginx -s stop
      ./nginx -s quit
      ./nginx -s reload
      ./nginx -s quit:此方式停止步骤是待nginx进程处理任务完毕进行停止。
      ./nginx -s stop:此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。

      查询nginx进程：

      ps aux|grep nginx
    ```
    


  
    


