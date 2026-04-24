import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ListaPersonajes from './components/ListaPersonajes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from './assets/background/background.webp';
import chaldeaLogo from './assets/Icons/chaldea/chaldeaLogo.webp';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="w-full px-6 py-10 flex-grow self-center bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-center">
          <img src={chaldeaLogo} alt="Chaldea Logo" className='w-20 h-20'/>
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Fate/Grand Order
            </h1>
            <p className="text-gray-600">
              Lista de Servants disponibles en el servidor NA.
            </p>
          </div>
        </div>

        <ListaPersonajes />
      </main>

      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App
