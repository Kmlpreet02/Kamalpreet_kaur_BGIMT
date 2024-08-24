
import './App.css'
// import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./pages/Login"
import Logout from './pages/Logout';
import About from './pages/About';
import Contact from './pages/Contact';
import Page from "./pages/Page";
import Network from './pages/Network';
import UseOnline from './components/UseOnline';
import Signup from './pages/Signup';
import Update from './components/modals/Update';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const { isOnline } = UseOnline();
  return (
    
  
   <BrowserRouter>
   {isOnline ?(
    <>
   <Routes>
   <Route path="/" element ={<Login/>}/>
   <Route path="/Home" element ={<Home/>}/>
   <Route path="/About" element ={<About/>}/>
   <Route path="/Contact" element ={<Contact/>}/>
    
    <Route path="/Logout" element={<Logout/>}/>
    <Route path="/Signup" element={<Signup/>}/>
  <Route path='/Update' element={<Update/>}/>
   <Route path='*' element={<Page/>}/>
   </Routes>
   </>
   ):(
    <Network/>
   )}
   </BrowserRouter> 
    
    
  );
}

export default App
