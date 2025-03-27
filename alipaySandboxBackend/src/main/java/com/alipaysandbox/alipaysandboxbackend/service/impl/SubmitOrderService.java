package com.alipaysandbox.alipaysandboxbackend.service.impl;

import com.alipaysandbox.alipaysandboxbackend.mapper.AlipayOrdersBufferDao;
import com.alipaysandbox.alipaysandboxbackend.model.AlipayOrdersBuffer;
import com.alipaysandbox.alipaysandboxbackend.model.GenericResponse;
import com.alipaysandbox.alipaysandboxbackend.service.ISubmitOrderService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.UUID;

import static java.lang.Math.*;

@Service
public class SubmitOrderService implements ISubmitOrderService {

    @Resource
    private AlipayOrdersBufferDao alipayOrdersBufferDao;

    @Override
    public GenericResponse submitOrder() {
        // 生成六位UUID加上当前时间戳
        String uuid = UUID.randomUUID().toString().replace("-", "").substring(0, 6);
        String outTradeNo = "order_" + uuid + System.currentTimeMillis();

        // 从0-200随机生成数字然后转换成分
        Long totalAmount = (long) (random() * 200 * 100);

        // 创建订单缓冲记录
        AlipayOrdersBuffer orderBuffer = new AlipayOrdersBuffer();
        orderBuffer.setOutTradeNo(outTradeNo);
        orderBuffer.setInvoiceAmount(totalAmount);
        orderBuffer.setSubject("测试商品" + uuid);
        orderBuffer.setBody("这是商品描述");
        orderBuffer.setTradeStatus("WAIT_BUYER_PAY");

        boolean success = alipayOrdersBufferDao.insert(orderBuffer) > 0;

        if (success) {
            return GenericResponse.success(orderBuffer);
        } else {
            return GenericResponse.error("订单创建失败");
        }
    }
}
