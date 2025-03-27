package com.alipaysandbox.alipaysandboxbackend.service;

import java.util.Map;

public interface IAlipayOrderService {
    // 订单表中插入订单信息
    void insertOrder(Map<String, String> params);

    // 更新定单缓冲表中的订单状态
    boolean updateOrderStatus(Map<String, String> params);
}
