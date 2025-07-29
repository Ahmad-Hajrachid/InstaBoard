import {useLocation, useNavigate} from 'react-router-dom'
import NotFound from '../../pages/NotFound';
import Header from '../Navigation/Navigation';
import {Footer} from '../Layout'
export default function TeamDetails({isDarkMode ,switchMode}){
    const location = useLocation();
    const navigate = useNavigate();
    
    const user = location.state?.user;

    if(!user){
        return(
            <NotFound />
        )
    }

    return(
        <>
        <Header isDarkMode={isDarkMode} switchMode={switchMode}/>
        <main>
            <div className={`h-screen ${isDarkMode ? "dark-mode-main" : "light-mode-main"} flex flex-col items-center `}>
            <div className={`flex flex-col justify-center items-center ${isDarkMode? "cards-container-dark" : "cards-container-light"} self-center m-auto  !w-[60%] !h-[70%] !rounded-3xl shadow-xl` }>
                <img 
                src={user.picture} 
                alt={user.name}
                className="w-40 h-40 rounded-full mb-4"
            />
            <h1 className={`${isDarkMode ? "text-white" : "text-black"} text-4xl mb-2`}>
                {user.name}
            </h1>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-4x1 mb-4`}>
                {user.email}
            </p>
            
            <button 
                onClick={() => navigate('/Team')}
                className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300 text-black"} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
            >
                Back to Team
            </button>
            </div>
        </div>
        </main>
        <Footer isDarkMode={isDarkMode}/>
        </>
    )
}