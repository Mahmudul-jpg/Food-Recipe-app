
import './App.css';

import Appbar from './components/navbar/Appbar'
import Home from './pages/Home'
import Context from './Context'
function App() {

  return (
    <Context>
      <div >
        <Appbar />
        <Home />
      </div>
    </Context>
  );
}

export default App;
