import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import LoginPage from "./components/LoginPage/LoginPage";


function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Router>
        <Routes>
          <Route exact path='/loginpage' element={<LoginPage />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
      <LoginPage />
    </div>
  );
}

export default App;