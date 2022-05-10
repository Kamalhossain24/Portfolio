import './App.css';
import Profile from "./Components/Home/Profile";
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Header/>
<Router>
  <Route path='/' component={Home} ></Route>
</Router>

    </div>
  );
}

export default App;
