import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Team from './pages/Team'
import TeamDetails from './components/TeamDetails/TeamDetails';
import { useState } from 'react';
import NotFound from './pages/NotFound';
import About from './pages/About'
import LikedUsers from './components/LikedUsers'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchMode = () => {
    setIsDarkMode(mode => !mode);
  };

    function likeProfile(userData) {
    let likedUsers = [];
    try {
        const stored = localStorage.getItem('likedUsers');
        likedUsers = stored ? JSON.parse(stored) : [];
    } catch (error) {
        likedUsers = []; 
    }
    
    const isAlreadyLiked = likedUsers.some(user => user.id === userData.id);
    if(isAlreadyLiked){
      unLikeProfile(userData)
    }
    if (!isAlreadyLiked) {
        likedUsers.push(userData);
        localStorage.setItem('likedUsers', JSON.stringify(likedUsers));
        alert("Profile liked!")
    }
}


    function unLikeProfile(userData) {
    let likedUsers = [];
    try {
        const stored = localStorage.getItem('likedUsers');
        likedUsers = stored ? JSON.parse(stored) : [];
    } catch (error) {
        likedUsers = []; 
    }
    
    // Remove the user
    const filteredUsers = likedUsers.filter(user => user.id !== userData.id);
    localStorage.setItem('likedUsers', JSON.stringify(filteredUsers));
    alert("Profile unliked!")
}

    

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/Team/:id" element={<TeamDetails isDarkMode={isDarkMode} switchMode={switchMode}/>} />
      <Route path="/Team" element={<Team isDarkMode={isDarkMode} switchMode={switchMode} likeProfile={likeProfile} unLikeProfile={unLikeProfile}  />} />
      <Route path='/' element={<Home isDarkMode={isDarkMode} switchMode={switchMode}/>}/>
      <Route path='/about' element={<About isDarkMode={isDarkMode} switchMode={switchMode}/>}/>
      <Route path='/liked' element={<LikedUsers isDarkMode={isDarkMode} switchMode={switchMode} likeProfile={likeProfile} unLikeProfile={unLikeProfile} />}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

      // <UserList isDarkMode={isDarkMode} switchMode={switchMode} /> */}