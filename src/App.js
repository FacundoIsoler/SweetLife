import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DataProvider from './Components/Context/DataContext.js';
import Home from './Components/Home/Home.js';
import CartContent from './Components/CartContent/CartContent.js';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
