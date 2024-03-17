import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/home/home';
import Calculadora from './components/pages/calculadora/calculadora';
import Editor from './components/pages/editor/editor';
import ClCr from './components/pages/calculadora/clcr';
import Dva from './components/pages/calculadora/dva';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota para a Home */}
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/calculadora/clcr" element={<ClCr />} />
        <Route path="/calculadora/dva" element={<Dva />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="*" element={<div>Not Found</div>} /> {/* Rota de fallback */}
      </Routes>
    </div>
  );
};

export default App;
