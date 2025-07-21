import './Header.css'
import { Button } from '../Button'
export default function Header({ isDarkMode, switchMode, loading }) {
    return(
        <header className={isDarkMode ? "darkModeHeader" : "lightModeHeader"}>
            <div className='h1-Div'>
                <h1 className={isDarkMode ? "darkModeH1" : "lightModeH1"}>InstaBoard</h1>
            </div>
            
            <div className='btn-Div'>
                <Button className={isDarkMode? "btn-Change-dark" : "btn-Change-light"} onClick={switchMode} disabled={loading} children={loading ? 'Loading...' : 'Change colors mode'} />
            </div>
            
        </header>
    )
}