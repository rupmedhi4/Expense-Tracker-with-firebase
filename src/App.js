import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
        <Navbar />
        <Signup />
     
    </>
  );
}

export default App;
