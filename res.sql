# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-24 23:46:45
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "food"
#

DROP TABLE IF EXISTS `food`;
CREATE TABLE `food` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` float(4,2) DEFAULT '0.00' COMMENT '价格',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "food"
#

/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',22.00),(2,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',99.99),(3,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',60.00),(4,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',99.99),(5,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',99.99),(6,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',30.00),(7,'华商街666号 快三秒红歌餐(铁板牛扒) 红歌鼎力推荐',40.00);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL COMMENT '账号',
  `userPwd` varchar(255) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'$userName','$userPwd'),(2,'111','111');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
