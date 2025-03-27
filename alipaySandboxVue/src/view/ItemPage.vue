<template>
  <div class="item-page">
    <h2>商品订单页面</h2>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div class="order-list">
        <div v-for="order in orderList" :key="order.outTradeNo" class="order-item">
          <p><strong>订单号:</strong> {{ order.outTradeNo }}</p>
          <p><strong>订单金额:</strong> {{ formatAmount(order.invoiceAmount) }}元</p>
          <p><strong>商品名称:</strong> {{ order.subject }}</p>
          <p><strong>商品描述:</strong> {{ order.body }}</p>
          <div>
            <button @click="goToPayment(order)">前往支付</button>
          </div>
        </div>
      </div>
      <button @click="submitOrder" :disabled="loading" class="submit-button">创建新订单</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { onMounted, ref } from 'vue';

import { useRouter } from 'vue-router';

// const route = useRoute();
const router = useRouter();

interface OrderType {
  outTradeNo: string;
  invoiceAmount: string;
  subject: string;
  body: string;
}

// 订单列表
const orderList = ref<OrderType[]>([]);

const loading = ref(false);
const error = ref<string | null>(null);

// 将金额从分转换为元
const formatAmount = (amount: string): string => {
  const amountNum = parseInt(amount);
  return (amountNum / 100).toFixed(2);
};

// 提交（获取）随机订单
const submitOrder = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get('http://localhost:8080/alipay/submit-order');
    console.log("后端返回的参数为:", response.data);

    if (response.data.code === 200) {
      // 使用 value 属性添加新订单
      orderList.value = [...orderList.value, response.data.data];
    } else {
      error.value = response.data.message || '创建订单失败';
    }
  } catch (err: any) {
    console.error('提交订单时出错:', err);
    error.value = err.message || '请求出错';
  } finally {
    loading.value = false;
  }
};

// 前往支付
const goToPayment = (order: OrderType) => {
  router.push({
    path: '/payment',
    query: {
      outTradeNo: order.outTradeNo,
      invoiceAmount: order.invoiceAmount,
      subject: order.subject,
      body: order.body
    }
  });
};

onMounted(() => {
  // 页面加载时调用函数，需要加上()
  submitOrder();
});
</script>

<style scoped>
.item-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.order-list {
  margin-bottom: 20px;
}

.order-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  /* background-color: #f9f9f9; */
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #cccccc;
}

.error {
  color: red;
  margin-bottom: 15px;
}
</style>