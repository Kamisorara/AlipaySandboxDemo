/*
 Navicat Premium Dump SQL

 Source Server         : 本地docker_Mysql
 Source Server Type    : MySQL
 Source Server Version : 80041 (8.0.41)
 Source Host           : localhost:3306
 Source Schema         : alipay_test

 Target Server Type    : MySQL
 Target Server Version : 80041 (8.0.41)
 File Encoding         : 65001

 Date: 26/03/2025 22:21:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for alipay_orders
-- ----------------------------
DROP TABLE IF EXISTS `alipay_orders`;
CREATE TABLE `alipay_orders` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `out_trade_no` varchar(64) NOT NULL COMMENT '商户订单号，唯一标识商户的订单。',
  `trade_no` varchar(64) DEFAULT NULL COMMENT '支付宝交易号，唯一标识支付宝的交易。',
  `buyer_id` bigint DEFAULT NULL COMMENT '支付方ID',
  `seller_id` bigint DEFAULT NULL COMMENT '卖家的支付宝用户ID',
  `invoice_amount` bigint DEFAULT NULL COMMENT '订单实际支付的金额',
  `trade_status` varchar(64) DEFAULT NULL COMMENT '交易状态，TRADE_SUCCESS 表示支付成功。',
  `notify_id` varchar(64) DEFAULT NULL COMMENT '通知的唯一标识符',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for alipay_orders_buffer
-- ----------------------------
DROP TABLE IF EXISTS `alipay_orders_buffer`;
CREATE TABLE `alipay_orders_buffer` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `out_trade_no` varchar(64) NOT NULL COMMENT '商户订单号，唯一标识商户的订单。',
  `trade_no` varchar(64) DEFAULT NULL COMMENT '支付宝交易号，唯一标识支付宝的交易。',
  `buyer_id` bigint DEFAULT NULL COMMENT '支付方ID',
  `seller_id` bigint DEFAULT NULL COMMENT '卖家的支付宝用户ID',
  `invoice_amount` bigint DEFAULT NULL COMMENT '订单实际支付的金额',
  `trade_status` varchar(64) DEFAULT NULL COMMENT '交易状态，TRADE_SUCCESS 表示支付成功。',
  `notify_id` varchar(64) DEFAULT NULL COMMENT '通知的唯一标识符',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
