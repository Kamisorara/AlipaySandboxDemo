package com.alipaysandbox.alipaysandboxbackend.service;

import com.alipaysandbox.alipaysandboxbackend.model.AlipayOrdersBuffer;
import com.alipaysandbox.alipaysandboxbackend.model.GenericResponse;

import java.util.List;
import java.util.Map;

public interface IAlipayOrderService {
    // 订单表中插入订单信息
    void insertOrder(Map<String, String> params);

    // 更新定单缓冲表中的订单状态
    boolean updateOrderStatus(Map<String, String> params);

    // 获取订单缓冲表内的订单列表
    GenericResponse getOrderBufferList();
}
