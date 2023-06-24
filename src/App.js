import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Destination from './Components/Destination/Destination';
import Points from './Components/Points/Points';
import Book from './Components/Book/Book';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Destination/>
      <Points />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
