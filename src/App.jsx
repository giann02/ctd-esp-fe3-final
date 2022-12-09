
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Home from './Routes/Home';
import { ContextProvider } from "./Components/utils/global.context";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
        <ContextProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="dentist/:id" element={<Detail />} />
            </Routes>
            <Footer/>
        </ContextProvider>
      
  );
}

export default App;
