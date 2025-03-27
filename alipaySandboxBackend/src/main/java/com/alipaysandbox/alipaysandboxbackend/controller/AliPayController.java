package com.alipaysandbox.alipaysandboxbackend.controller;

import com.alipaysandbox.alipaysandboxbackend.model.AliPayRequest;
import com.alipaysandbox.alipaysandboxbackend.model.GenericResponse;
import com.alipaysandbox.alipaysandboxbackend.service.AliPayService;
import com.alipaysandbox.alipaysandboxbackend.service.impl.SubmitOrderService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/alipay")
// 允许前端跨域访问
public class AliPayController {

    @Resource
    private AliPayService aliPayService;
    @Resource
    private SubmitOrderService submitOrderService;


    /**
     * 提交订单
     */
    @GetMapping("/submit-order")
    public GenericResponse submitOrder() {
        return submitOrderService.submitOrder();
    }

    @PostMapping("/order")
    public GenericResponse<Object> placeOrderForPCWeb(@RequestBody AliPayRequest aliPayRequest) {
        try {
            return aliPayService.placeOrderForPCWeb(aliPayRequest);
        } catch (IOException e) {
            return GenericResponse.error("创建订单失败: " + e.getMessage());
        }
    }

    /**
     * 异步回调
     */
    @PostMapping("/callback/async")
    public String asyncCallback(HttpServletRequest request) {
        return aliPayService.orderCallbackInAsync(request);
    }

    @GetMapping("/callback/sync")
    public void syncCallback(HttpServletRequest request, HttpServletResponse response) {
        aliPayService.orderCallbackInSync(request, response);
    }
}