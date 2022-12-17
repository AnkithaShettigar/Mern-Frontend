import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Resgister';
import Settings from './components/pages/settings/Settings';
import Home from './components/pages/home/Home';
import Single from './components/pages/single/Single';
import Topbar from './components/topbar/Topbar';
import Write from './components/write/Write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        {/* <Register /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
