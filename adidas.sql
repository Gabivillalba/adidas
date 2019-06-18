/*
MySQL Data Transfer
Source Host: localhost
Source Database: adidas
Target Host: localhost
Target Database: adidas
Date: 27/7/2017 1:18:44 p. m.
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for productos
-- ----------------------------
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
