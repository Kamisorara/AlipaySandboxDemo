import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResult: React.FC = () => {
  const location = useLocation();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const success = query.get('success') === 'true';
    setPaymentSuccess(success);
  }, [location]);

  return (
    <div>
      <h2>支付结果</h2>
      {paymentSuccess ? (
        <div style={{ color: 'green' }}>
          <p>支付成功！</p>
          <p>您的订单已经支付完成。</p>
        </div>
      ) : (
        <div style={{ color: 'red' }}>
          <p>支付失败或已取消</p>
          <p>请重新尝试支付。</p>
        </div>
      )}

      <button onClick={() => window.location.href = '/'}>
        返回首页
      </button>
    </div>
  );
}

export default PaymentResult;