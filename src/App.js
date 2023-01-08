import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <AllRoutes />
      </Router>
      {/* <h1>
        <img src="Rectangle 7498.png" alt="image" />
      </h1> */}
      <Footer />
    </div>
  );
}

export default App;
