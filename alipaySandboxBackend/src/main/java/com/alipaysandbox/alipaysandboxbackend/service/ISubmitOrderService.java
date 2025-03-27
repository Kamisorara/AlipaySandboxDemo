package com.alipaysandbox.alipaysandboxbackend.service;

import com.alipaysandbox.alipaysandboxbackend.model.GenericResponse;

public interface ISubmitOrderService {
    // 下单操作（加载到缓存表中）
    GenericResponse submitOrder();
}
