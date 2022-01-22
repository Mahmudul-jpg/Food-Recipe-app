
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Appbar from './components/navbar/Appbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Context from './Context'
import ErrorPage from './pages/ErrorPage'
import SignUp from './pages/SignUp'
function App() {

  return (
    <Context>



      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes >
    </Context>
  );
}

export default App;
