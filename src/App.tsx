import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Links } from './pages/Links';

function App() {
  return (
    <div className="min-h-screen w-full bg-dark-900 text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  )
}

export default App
