import './App.css'
import './style.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Ayurveda from './MyComponents/Ayurveda';
import Medicines from './MyComponents/Medicines';
import CovidEssentials from './MyComponents/CovidEssentials';
import HomeCare from './MyComponents/HomeCare';
import Contact from './MyComponents/Contact';
import Cart from './MyComponents/Cart';
import Home from './MyComponents/Home';
import Login from './MyComponents/Login';
import Details from './MyComponents/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './MyComponents/Register';
import AuthContext from './context/auth-context';
import { useState } from 'react';
import { decodeToken } from "react-jwt";
import useData from './hooks/use-data';
import Address from './MyComponents/Address';
import Orders from './MyComponents/Orders';



function App() {
  let val = false;
  let currentUser = {}
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    currentUser = decodeToken(token);
    val = true
  }
  const [isLoggedIn, setIsLoggedIn] = useState(val);
  const itemData = useData();

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="App">
          <Header title="DoseBus" currentUser={currentUser} />
          <Routes>
            <Route path="/" element={<Home currentUser={currentUser} itemData={itemData}/>} />
            <Route path="/ayurveda" element={<Ayurveda itemData={itemData} currentUser= {currentUser} />} />
            <Route path="/medicines" element={<Medicines itemData={itemData} currentUser= {currentUser}/>} />
            <Route path="/covidEssentials" element={<CovidEssentials itemData={itemData} currentUser= {currentUser}/>} />
            <Route path="/bodyCare" element={<HomeCare itemData={itemData} currentUser= {currentUser}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<Details />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/address" element={<Address currentUser= {currentUser}/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;