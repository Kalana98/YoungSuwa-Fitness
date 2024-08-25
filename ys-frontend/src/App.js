import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ServiceFacilities from './Pages/ServiceFacilities';
import ContactUs from './Pages/ContactUs';
import Packages from './Pages/Packages';
import UserRegistration from './Pages/UserRegistration';
import Footer from './Components/Footer';
import AdminPanel from './Pages/AdminPanel';
import PendingUser from './Pages/PendingUser';
import RegisteredUser from './Pages/RegisteredUser';

function App() {
  return (
    <div className="App">
    <Router>
     <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/serviceandfacilities" element={<ServiceFacilities />}/>
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/packages' element={<Packages/>} />
          <Route path='/register' element={<UserRegistration />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/pending-user' element={<PendingUser />} />
          <Route path='/registered-user' element={<RegisteredUser />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
