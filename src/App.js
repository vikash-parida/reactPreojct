import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Statements from './Pages/Statements';
import Navbars from './Pages/Navbars'
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Downloads from './Pages/Downloads';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbars/>
        <Home/>
        <AboutUs/>
        <Statements/>
        <Profile/>
        <Products/>
        <Downloads/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
