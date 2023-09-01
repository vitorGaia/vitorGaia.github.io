import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './index.jsx'
import AppProvider from './contexts/AppProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
);
