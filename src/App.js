// import logo from './logo.svg';
// import './App.css';
// import Dashboard from './Dashboard.js'
// import Footer from './Footer.js'
// import Header from './Header.js'
// import Menu from './Menu.js'




// function App() {
//   return (
//     <div >
//             {/* <Header/>  
//       <Dashboard/>
//       <Footer/>   */}
//       <Menu/>  


//     </div>
//   );
// }

// export default App;



import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import logo from './logo.svg';
import Dashboard from './Dashboard.js'
import Footer from './Footer.js'
import Header from './Header.js'
import LoginPage from './LoginPage'
import Navbar from "./components/Navbar";

// import Dashboard from "./pages/Dashboard";
import Member from "./pages/Member";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import { useCookies } from 'react-cookie';
function App() {
  const [cookies, setCookie] = useCookies(['token']);
  console.log('cookies', cookies.token)
  return (
    <Router>
      {/* <SideBar> */}
        <Routes>
          <Route path="/admin-login" element={<LoginPage/>} />
  
        
          <Route path="/" element={<Navbar />} />
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/member" element={<Member />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
          
        </Routes>
      {/* </SideBar> */}

      {/* <Header /> */}
      {/* <Dashboard /> */}

      {/* <Menu /> */}

    </Router>
  );
}

export default App;
