import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login';
import MainPage from './components/User/MainPage';


function App() {
  return (
    
            <BrowserRouter>
    <div className="App">

        <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/admin" element={<Login />}></Route>
        <Route path="/addStay" element={<Admin />}></Route>

        </Routes>
</div>
      </BrowserRouter>
    
  );
}

export default App;
