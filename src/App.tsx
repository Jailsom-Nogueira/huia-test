import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './common/styles/global'
import { Routes } from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default App;
