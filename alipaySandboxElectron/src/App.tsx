import { useState } from 'react'
import PaymentPage from './components/PaymentPage/PaymengPage'
import PaymentResult from './components/PaymentResult/PaymengResult'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>支付宝沙盒支付演示</h1>

          <nav>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', justifyContent: 'center', padding: 0 }}>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/payment">支付页面</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div className="card">
                <h2>欢迎使用支付宝沙盒测试</h2>
                <p>
                  点击导航到支付页面以测试支付功能
                </p>
              </div>
            } />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/result" element={<PaymentResult />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
