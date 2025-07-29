import Header from "../components/Navigation/Navigation";
import {Footer} from '../components/Layout'
import UserList from '../components/UserList/UserList'
export default function Team({isDarkMode, switchMode ,likeProfile,unLikeProfile}){
    
    return (
        <div className="min-h-screen flex flex-col">
            <Header isDarkMode={isDarkMode} switchMode={switchMode}/>
            <main className={`${isDarkMode? "dark-mode-main" : "light-mode-main"} flex-1`}>
                <UserList isDarkMode={isDarkMode} switchMode={switchMode} likeProfile={likeProfile} unLikeProfile={unLikeProfile} />
            </main>
            <Footer isDarkMode={isDarkMode} switchMode={switchMode}/>
        </div>
    )
}