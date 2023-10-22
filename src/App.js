import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  Loginsignup  from './Components/Loginsignup/Loginsignup';
import Forgetpassword from './Components/Forgetpassword/Forgetpassword.jsx';
import { Personaldetails } from './Components/Personaldetails/Personaldetails';
import { Additionalinfo } from './Components/Additionalinfo/Additionalinfo';
import { Confirmation } from './Components/Confirmation/Confirmation';
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route  path="/" Component={Loginsignup} />
      <Route path="/forgetpassword" Component={Forgetpassword} />
      <Route path="/personaldetails" Component={Personaldetails} />
      <Route path="/Additionalinfo"  Component={Additionalinfo} />
      <Route path="/Confirmation" Component={Confirmation} />
      </Routes>
      </Router>
    </div>
   
  );
}

export default App;