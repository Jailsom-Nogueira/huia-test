// Libs
import { BrowserRouter } from 'react-router-dom'
// Self
import { Routes } from './routes'
import GlobalStyles from './common/styles/global'
import { ShopCartHook } from './context/ShopCartContext/ShopCartContext'

function App() {
  return (
    <ShopCartHook >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </ShopCartHook>
  );
}

export default App;
