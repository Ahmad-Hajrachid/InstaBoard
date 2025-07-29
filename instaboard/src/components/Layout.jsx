import { NavLink } from 'react-router-dom';
export function Navigation({isDarkMode}){
    return(
        

<div className='flex flex-row gap-10'>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `${isDarkMode ? 'text-white' : 'text-black'} ${isActive ? 'font-bold underline' : ''}`
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/Team"
    className={({ isActive }) =>
      `${isDarkMode ? 'text-white' : 'text-black'} ${isActive ? 'font-bold underline' : ''}`
    }
  >
    Team
  </NavLink>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      `${isDarkMode ? 'text-white' : 'text-black'} ${isActive ? 'font-bold underline' : ''}`
    }
  >
    About
  </NavLink>
  <NavLink
    to="/liked"
    className={({ isActive }) =>
      `${isDarkMode ? 'text-white' : 'text-black'} ${isActive ? 'font-bold underline' : ''}`
    }
  >
    Liked Users
  </NavLink>
</div>
    )
}

export  function Footer({ isDarkMode, switchMode}){
    return(
        <footer className={` flex justify-center items-center ${isDarkMode ? "darkModeHeader" : "lightModeHeader"}`}>
            <h3 className="font-brush text-4xl text-center">Insta-Board By Ahmad Haj Rashid</h3>
        </footer>
    )
}
