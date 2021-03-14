/*
Navicat MySQL Data Transfer

Source Server         : html
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : ao

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2020-09-15 19:33:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('1', 'songdu', '45455555', '2433507235@qq.com', '2020-09-15 18:52:13');
INSERT INTO `registry` VALUES ('2', '', '', '', '2020-09-15 18:52:22');
INSERT INTO `registry` VALUES ('3', 'songdu', '3454554', '2433507235@qq.com', '2020-09-15 18:52:37');
INSERT INTO `registry` VALUES ('4', 'ld靠发动机', 'dlfmlkd', '12354@qq.com', '2020-09-15 18:58:25');
INSERT INTO `registry` VALUES ('5', '垃圾啊京东方', 'dfahdkjf', '12354@qq.com', '2020-09-15 18:59:04');
INSERT INTO `registry` VALUES ('6', '', '', '', '2020-09-15 19:18:38');
INSERT INTO `registry` VALUES ('7', '', '', '', '2020-09-15 19:19:16');
INSERT INTO `registry` VALUES ('8', '', '', '', '2020-09-15 19:19:17');
INSERT INTO `registry` VALUES ('9', '', '', '', '2020-09-15 19:19:17');
INSERT INTO `registry` VALUES ('10', '', '', '', '2020-09-15 19:20:00');
INSERT INTO `registry` VALUES ('11', '', '', '', '2020-09-15 19:20:01');
INSERT INTO `registry` VALUES ('12', '', '', '', '2020-09-15 19:20:01');
INSERT INTO `registry` VALUES ('13', '', '', '', '2020-09-15 19:20:01');
INSERT INTO `registry` VALUES ('14', '', '', '', '2020-09-15 19:20:01');
INSERT INTO `registry` VALUES ('15', '', '', '', '2020-09-15 19:20:02');
INSERT INTO `registry` VALUES ('16', '', '', '', '2020-09-15 19:20:02');
INSERT INTO `registry` VALUES ('17', '', '', '', '2020-09-15 19:20:19');
INSERT INTO `registry` VALUES ('18', '', '', '', '2020-09-15 19:20:19');
INSERT INTO `registry` VALUES ('19', '', '', '', '2020-09-15 19:20:19');
INSERT INTO `registry` VALUES ('20', '', '', '', '2020-09-15 19:20:19');

-- ----------------------------
-- Table structure for `taobao`
-- ----------------------------
DROP TABLE IF EXISTS `taobao`;
CREATE TABLE `taobao` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(400) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `price` float(7,2) DEFAULT NULL,
  `conut` int(8) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of taobao
-- ----------------------------

INSERT INTO `taobao` VALUES ('2', 'https://gma.alicdn.com/bao/uploaded/i2/122074409/O1CN01tTUK1B1iRMsQxl43n_!!0-saturn_solar.jpg_200x200.jpg_.webp', '牛仔夹克男手绘小花刺绣茄克潮酷衬衫式外套', '545.00', '46786');
INSERT INTO `taobao` VALUES ('3', 'https://gma.alicdn.com/bao/uploaded/i1/122074409/O1CN01su0ieU1iRMr9wcHZZ_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'BEASTER春秋外套小恶魔鬼脸外衣反光标工装', '577.00', '15');
INSERT INTO `taobao` VALUES ('4', 'https://gma.alicdn.com/bao/uploaded/i1/122074409/O1CN014Y1seL1iRMsLd9tdu_!!0-saturn_solar.jpg_200x200.jpg_.webp', '活力四射的运动风释放青春活力', '46.00', '246');
INSERT INTO `taobao` VALUES ('5', 'https://gma.alicdn.com/bao/uploaded/i1/12712222/O1CN01pzEW9k1SHigAnAAkn_!!0-saturn_solar.jpg_200x200.jpg_.webp', '太平鸟澳毛双面呢夹克男宽松工装毛呢大衣', '488.00', '644');
INSERT INTO `taobao` VALUES ('6', 'https://gma.alicdn.com/bao/uploaded/i2/12712222/O1CN01Yw32Yz1SHieq48PG2_!!0-saturn_solar.jpg_200x200.jpg_.webp', '百搭牛仔裤,从来不嫌多', '78.00', '4');
INSERT INTO `taobao` VALUES ('7', 'https://gma.alicdn.com/bao/uploaded/i4/12712222/O1CN01X2ZJkd1SHigHLQlc3_!!0-saturn_solar.jpg_200x200.jpg_.webp', '仿羊羔毛夹克男拼色厚款外套摇粒绒茄克秋冬', '454.00', '467');
INSERT INTO `taobao` VALUES ('8', 'https://gma.alicdn.com/bao/uploaded/i3/12712222/O1CN01MqndCE1SHigJzEwGZ_!!0-saturn_solar.jpg_200x200.jpg_.webp', '明线夹克男士牛仔夹克工装茄克潮流青年', '453.00', '456');
INSERT INTO `taobao` VALUES ('9', 'https://gma.alicdn.com/bao/uploaded/i4/12712222/O1CN01bmTVGn1SHigJeBZm5_!!0-saturn_solar.jpg_200x200.jpg_.webp', '太平鸟男装秋冬新品可机洗慵懒风懒人毛衫韩', '78.00', '456');
INSERT INTO `taobao` VALUES ('10', 'https://gma.alicdn.com/bao/uploaded/i1/1193560074/O1CN01V4zjF41CPvvICOn0P_!!0-saturn_solar.jpg_200x200.jpg_.webp', 'BEASTER小恶魔鬼脸牛仔夹克男国潮牌情侣装', '77.00', '156');
INSERT INTO `taobao` VALUES ('11', '//img.alicdn.com/bao/uploaded/i1/2628897217/TB2r1EhmXXXXXbXXpXXXXXXXXXX_!!2628897217.jpg_400x400q90.jpg_.webp', '抽纸整箱批发散装家用卫生纸抽取式婴儿面巾纸酒店餐巾纸卷纸包邮', '484.00', '186');
INSERT INTO `taobao` VALUES ('12', '//img.alicdn.com/bao/uploaded/i3/33427843/TB26bxYrCFmpuFjSZFrXXayOXXa_!!33427843.jpg_400x400q90.jpg_.webp', '甄嬛传惠贵人银瓜子990足银红包彩礼嫁妆生日新年礼物财运滚滚', '45.00', '456');
INSERT INTO `taobao` VALUES ('13', '//img.alicdn.com/bao/uploaded/i1/820814959/TB25vqnXjuhSKJjSspaXXXFgFXa_!!820814959.jpg_400x400q90.jpg_.webp', '凹型 光滑 陀螺盘 玻璃凹镜面  居中旋转 精致陀螺有售 盗梦空间', '453.00', '1452');
INSERT INTO `taobao` VALUES ('14', '//img.alicdn.com/bao/uploaded/i4/342670139/O1CN01DDK2vh1Cthfr7PPll_!!0-saturn_solar.jpg_400x400q90.jpg_.webp', '贝拉米进口有机婴幼儿配方奶粉3段', '67.00', '4237');
INSERT INTO `taobao` VALUES ('15', '//img.alicdn.com/bao/uploaded/i4/523599176/TB2fpu4aBfM8KJjSZFOXXXr5XXa_!!523599176.jpg_400x400q90.jpg_.webp', '宝乐珠 begleri 贝格丽 手指溜溜球 两珠一绳 指尖减压无聊神器', '65.00', '2355');
INSERT INTO `taobao` VALUES ('16', '//img.alicdn.com/bao/uploaded/i3/TB1dkN5LpXXXXcoXXXXXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg_.webp', '动漫初音未来手办水晶公仔3D周边摆件送男女朋友情人节生日礼物', '457.00', '1566');
INSERT INTO `taobao` VALUES ('17', '//img.alicdn.com/bao/uploaded/i2/TB1W9FRNFXXXXbcXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg_.webp', 'LACESHABBY欧洲进口复古法式洛可可浮雕蝴蝶结树脂笔桶收纳桶蓝灰', '457.00', '1245');
INSERT INTO `taobao` VALUES ('18', '//img.alicdn.com/bao/uploaded/i1/721291633/TB2Gxf.mBUSMeJjy1zjXXc0dXXa_!!721291633.jpg_400x400q90.jpg_.webp', '仿真金砖银砖长方形枕头抱枕靠垫家居搞笑金条银条午睡枕优质枕芯', '67.00', '1237');
INSERT INTO `taobao` VALUES ('19', '//img.alicdn.com/bao/uploaded/i4/342670139/O1CN01KtppvI1Cthft7xgKE_!!0-saturn_solar.jpg_400x400q90.jpg_.webp', '新西兰Aptamil进口婴儿幼儿奶粉3段900克', '88.00', '1564');
INSERT INTO `taobao` VALUES ('20', '//img.alicdn.com/bao/uploaded/i3/TB1NT.QOpXXXXXsXVXXYXGcGpXX_M2.SS2_400x400q90.jpg_.webp', '日本代购厕所专用小巧360度旋转拖把雪尼尔长毛绒拖布伸缩杆', '14.00', '454');
INSERT INTO `taobao` VALUES ('21', '//img.alicdn.com/bao/uploaded/i4/TB1YyqsSXXXXXX1XFXXXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg_.webp', '美国edc哈利波特金色飞贼指尖陀螺 丘比特翅膀手上陀螺指间螺旋', '42.00', '43242');
INSERT INTO `taobao` VALUES ('22', '//img.alicdn.com/bao/uploaded/i1/1790642729/TB2gh55jVXXXXXsXXXXXXXXXXXX_!!1790642729.jpg_400x400q90.jpg_.webp', '天然萤石夜明珠原石 夜光球白色冰洲石发光球摆件 超亮水晶球摆件', '224.00', '423');
INSERT INTO `taobao` VALUES ('23', '//img.alicdn.com/bao/uploaded/i4/342670139/O1CN01igOfXh1CthfvJZkin_!!0-saturn_solar.jpg_400x400q90.jpg_.webp', '//img.alicdn.com/bao/uploaded/i4/342670139/O1CN01i', '24.00', '454');
INSERT INTO `taobao` VALUES ('24', '//img.alicdn.com/bao/uploaded/i1/TB1bQVQGpXXXXb9aXXXXXXXXXXX_!!2-item_pic.png_400x400q90.jpg_.webp', 'nepia妮飘擦手纸 干手纸 抹手纸 N.EX系列 20包/箱 江浙沪皖包邮', '2.00', '1867');
INSERT INTO `taobao` VALUES ('25', '//img.alicdn.com/bao/uploaded/i1/1730150685/TB1wRjzaJknBKNjSZKPXXX6OFXa_!!0-item_pic.jpg_400x400q90.jpg_.webp', '红都新款男士商务休闲格子夹克四季穿翻领拉链政务外套有加大尺码', '52.00', '48');
INSERT INTO `taobao` VALUES ('26', '//img.alicdn.com/bao/uploaded/i2/28299986/TB2zxvPtipnpuFjSZFkXXc4ZpXa_!!28299986.jpg_400x400q90.jpg_.webp', '春娇救志明决策板decision创意神器网红抖音滚珠决定与选择抉择版', '52.00', '45');
INSERT INTO `taobao` VALUES ('27', '//img.alicdn.com/bao/uploaded/i1/TB1eO_AHFXXXXcgXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg_.webp', '水玉冰魄天然黑曜石把玩 黑曜石原石手把件彩虹眼马眼蛋大号实物', '25.00', '4534');
INSERT INTO `taobao` VALUES ('28', '//img.alicdn.com/bao/uploaded/i4/342670139/O1CN01e6ZYfF1Cthft7yLvA_!!0-saturn_solar.jpg_400x400q90.jpg_.webp', '新西兰Aptamil爱他美婴儿幼儿奶粉4段2岁以', '33.00', '5345');
INSERT INTO `taobao` VALUES ('29', '//img.alicdn.com/bao/uploaded/i3/1095550728/TB2YzBBaai5V1BjSspdXXXyFFXa_!!1095550728.jpg_400x400q90.jpg_.webp', '园林景观雕塑田园动物家居摆件户外树脂工艺礼品庭院装饰写实骷髅', '55.00', '56453');
INSERT INTO `taobao` VALUES ('30', '//img.alicdn.com/bao/uploaded/i2/T15OWsFA0cXXXXXXXX_!!0-item_pic.jpg_400x400q90.jpg_.webp', '清风二折擦手纸/干手纸/抹手纸 折叠式20包/箱 B900A江浙沪皖包邮', '15.00', '454');
