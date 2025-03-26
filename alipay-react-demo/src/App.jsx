import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaymentPage from './components/PaymentPage'
import PaymentResult from './components/PaymentResult'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <header>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
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
                <button onClick={() => setCount((count) => count + 1)}>
                  计数器 {count}
                </button>
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