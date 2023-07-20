import { useEffect } from 'react';
import './App.css';
import Productlist from './components.jsx/Productlist';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './apislice';
import Navbar from './components.jsx/Navbar';
import Detailpage from './components.jsx/Detailpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components.jsx/Category';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Productlist />}></Route>
          <Route path="/detailpage/:id" element={<Detailpage />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
