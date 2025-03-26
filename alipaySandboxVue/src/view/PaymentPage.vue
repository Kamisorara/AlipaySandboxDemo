<template>
  <div>
    <h2>支付宝沙盒支付测试</h2>
    <button @click="handlePayment" :disabled="loading">
      {{ loading ? '处理中...' : '支付169元' }}
    </button>

    <div v-if="error" style="color: red; margin-top: 10px">
      错误: {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

interface PaymentRequestType {
  outTradeNo: string;
  totalAmount: number;
  subject: string;
  body: string;
}

const loading = ref(false);
const error = ref<string | null>(null);

const handlePayment = async () => {
  // 处理交易
  loading.value = true;
  error.value = null;

  try {
    const paymentRequest: PaymentRequestType = {
      outTradeNo: `order_${Date.now()}`, // 生成唯一订单号
      totalAmount: 169, // 金额
      subject: '测试商品',
      body: '这是一个测试商品描述'
    };

    // 发起支付请求
    const response = await axios.post('http://localhost:8080/alipay/order', paymentRequest);
    console.log("后端返回的参数为:", response.data);

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
    } else {
      error.value = response.data.message || '创建订单失败';
    }
  } catch (err: any) {
    error.value = err.message || '发生错误';
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped></style>