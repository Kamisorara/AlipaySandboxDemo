package com.alipaysandbox.alipaysandboxbackend.mapper;

import com.alipaysandbox.alipaysandboxbackend.model.AlipayOrders;
import com.alipaysandbox.alipaysandboxbackend.model.AlipayOrdersBuffer;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 订单缓冲表Mapper
 */
@Mapper
public interface AlipayOrdersBufferDao extends BaseMapper<AlipayOrdersBuffer> {
    int updateOrderBuffer(AlipayOrders order);

    // 获取订单缓冲列表
    List<AlipayOrdersBuffer> selectOrderBufferList();
}
