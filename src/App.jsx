import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar"; 
import Cart from "./components/Cart"; 
import Footer from "./components/Footer"; 
 import Home from "./components/Home"; 

// import LoginPage from "./components/Login"; 
// import RegisterPage from "./components/Register";

const App = () => { 
  return (
    <div> 
      <Navbar /> 
       <Home />  
      {/* <RegisterPage /> */} 
      {/* <LoginPage /> */} 
      
      <Cart /> 
      <Footer />
    </div> 
  );
}; 

export default App;
