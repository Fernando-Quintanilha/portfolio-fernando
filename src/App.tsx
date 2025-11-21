import { Terminal, Hammer } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-dark-900 flex flex-col items-center justify-center text-center p-4">
      
      {/* Ícone Animado */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
        <div className="relative bg-dark-800 p-6 rounded-2xl border border-white/10">
          <Hammer size={48} className="text-primary animate-bounce" />
        </div>
      </div>

      {/* Texto Principal */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Fernando<span className="text-primary">.dev</span>
      </h1>

      <div className="flex items-center gap-2 text-xl text-gray-300 mb-8 font-mono">
        <Terminal size={20} className="text-emerald-500" />
        <span>Building something great...</span>
      </div>

      <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
        Estou atualizando meu portfólio com novos projetos de alta performance.
        <br />
        Em breve o site estará completo.
      </p>

      {/* Rodapézinho */}
      <div className="mt-12 text-sm text-gray-600">
        &copy; 2025 Fernando Quintanilha
      </div>

    </div>
  )
}

export default App

// import { Routes, Route } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Home } from './pages/Home';
// import { Links } from './pages/Links'; // <--- Importe a nova página

// function App() {
//   return (
//     <div className="min-h-screen w-full bg-dark-900 text-white selection:bg-primary selection:text-white">
      
//       <Routes>
//         {/* Rota Principal (Mostra Navbar + Home) */}
//         <Route path="/" element={
//           <>
//             <Navbar />
//             <Home />
//           </>
//         } />

//         <Route path="/links" element={<Links />} /> 
//       </Routes>
      
//     </div>
//   )
// }

// export default App
