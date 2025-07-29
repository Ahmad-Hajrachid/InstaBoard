import './Navigation.css'
import { Button } from '../Button'
import {Navigation} from '../Layout'
export default function Header({ isDarkMode, switchMode, loading }) {
    return(
        <header className={` flex justify-between items-center ${isDarkMode ? "darkModeHeader" : "lightModeHeader"}`}>
            
            <div className='h1-Div'>
                <h1 className={`font-brush text-3xl md:text-4xl font-bold ${isDarkMode? " bg-gradient-to-r from-purple-600 to-blue-600":"bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} bg-clip-text text-transparent`}>InstaBoard</h1>
            </div>
            <div>
            <Navigation isDarkMode={isDarkMode}/>
            </div>
            <div className='btn-Div'>
                <Button className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300 text-black"} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`} onClick={switchMode} disabled={loading} children={loading ? 'Loading...' : 'Change colors mode'} />
            </div>
            
        </header>
    )
}