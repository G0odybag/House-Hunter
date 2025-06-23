import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyGrid from './components/PropertyGrid';
import Signup from './components/Signup';
import Login from './components/Login';

export default function App() {

const[name, setName] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await axios.post('http://localhost/php_backend/index.php',{name})
  console.log(response)
}

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PropertyGrid />
              </>
            } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}