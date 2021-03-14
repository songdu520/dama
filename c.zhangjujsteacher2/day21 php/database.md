# 数据库

### 哪些东西是数据库？
存储数据的仓库
excel U盘 硬盘 光盘 网盘 ...
存储数据的软件
orcale sqlserver mysql mongodb db2 ...

### 数据库软件
数据库软件里存储的是什么样的数据？

数据库软件中存储的是 结构化(格式化)的数据

在关系型数据库中 可以将数据的结构看做是表结构

大家好，我是渣渣辉，今年21岁，毕业于哈佛大学计算机专业。   
 
                用户表
id  |  姓名    |  年龄  |   毕业院校   |  专业
---|---|---|---|---
100001|渣渣辉  |    21   |     哈佛   |   计算机
100002|张三    |    18    |    清华   |    法律
100003|张三    |    25    |    清华   |    法律

### 关系型数据库

1. 关系型数据库指的是将结构化的数据以表的形式呈现
2. 表(数据)和表(数据)之间 是有相互联系的


                订单表
订单编号 | 用户编号|创建时间
---|---|---
100000001|100001|10348123159123
100000002|100001|12348941326123

所有主流关系型数据库都支持 数据库查询语言  SQL

### 非关系型数据库
mongodb

非关系型数据库存储的数据以文档为结构的
每一条数据就是一个文档
多个文档组成一个集合
每一条数据是独立存在的

```
{
    _id:03485542456,
    username:'lisi',
    age:25,
    sex:'nan',
    订单:[12374892131564,1248941231654,457897896123]
}

```

### mysql
MySQL 是一个开源的 跨平台的 关系型数据库软件

1. 开源(免费)
2. 稳定
3. 跨平台(OS) Windows Liunx Unix OSX
4. 安全


### SQL语句

SQL语句可用于大部分的关系型数据库
SQL语句也叫数据库查询语句 它的关键字 不区分大小写

```sql
# 创建数据表
# 需要为每一张表设置一个主键(PRIMARY KEY) 主键的值是 INT 类型 
# 主键一般情况为自动增涨 主键的值在当前表格中必须是唯一的

CREATE TABLE `h5_2009`.`users` (
     `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '用户id' , 
     `name` VARCHAR(255) NOT NULL COMMENT '用户名' , 
     `password` VARCHAR(255) NOT NULL COMMENT '密码' , 
     `email` VARCHAR(255) NOT NULL COMMENT '邮箱' , 
     `phone` BIGINT(20) NOT NULL COMMENT '手机' , 
     `add` VARCHAR(255) NOT NULL COMMENT '地址' , 
     PRIMARY KEY (`id`)
    ) ENGINE = MyISAM;
```

```sql
# 插入数据

INSERT INTO 
`users` (`id`, `name`, `password`, `email`, `phone`, `address`) 
VALUES 
('100001', 'root', 'a123456', 'root@rootbk.cn', '13666666666', '浙江省杭州市江干区九堡镇旺田商务楼A座4楼');


# 语法
insert into `tableName` (`字段`,`字段`,`字段`,`字段`) values (值,值,值,值)

```

```sql
# 查询数据

# * 表示的含义是 所有字段
select * from tableName

select 字段,字段 from tableName       # 多字段查询


# 高级查询
select * from tableName where `name`='root'     # 条件查找
select * from tableName where 条件1 and 条件2   # 多条件 与
select * from tableName where 条件1 or 条件2    # 多条件 或

```

```sql
# 修改语句
update tableName set 字段=值 where 条件
update tableName set 字段=值,字段=值 where 条件
```