import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // 创建一个订单请求
      const paymentRequest = {
        outTradeNo: `order_${Date.now()}`, // 生成唯一订单号
        totalAmount: 10000, // 金额
        subject: '测试商品',
        body: '这是一个测试商品描述'
      };

      // 请求地址
      const response = await axios.post('http://localhost:8080/alipay/order', paymentRequest);
      console.log("请求订单返回参数为:", response);
      if (response.data.code === 200) {
        // 创建一个临时的div来存放支付宝返回的表单
        const div = document.createElement('div');
        div.innerHTML = response.data.data;
        document.body.appendChild(div);

        // 在打开的新的窗口中进行支付
        const form = document.forms[0];
        if (form) {
          form.target = '_blank';
          form.submit();
        }
        // 提交后移除临时div
        setTimeout(() => {
          document.body.removeChild(div);
        }, 100);

        // 自动提交表单，跳转到支付宝支付页面
        document.forms[0].submit();
      } else {
        setError(response.data.message || '创建订单失败');
      }
    } catch (err) {
      setError(err.message || '发生错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>支付宝沙盒支付测试</h2>
      <button
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? '处理中...' : `支付10000元`}
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          错误: {error}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;