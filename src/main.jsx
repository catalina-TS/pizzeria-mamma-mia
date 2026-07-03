import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)