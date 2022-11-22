import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CryptoDetail from "./pages/crypto-detail";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route
                    path='/crypto-detail/:id'
                    element={<CryptoDetail />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
