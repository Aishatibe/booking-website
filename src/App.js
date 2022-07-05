import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Hotel from './components/pages/Hotel/Hotel';
import Hotels from './components/pages/hotels/Hotels';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
