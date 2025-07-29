import { useNavigate } from "react-router-dom"
import UserCard from "./UserCard/UserCard"
import Header from "./Navigation/Navigation";
import {Footer} from './Layout'
export default function LikedUsers({isDarkMode,likeProfile,unLikeProfile ,switchMode}){
    const storedProfiles = JSON.parse(localStorage.getItem('likedUsers')||'[]')
    let navigate = useNavigate();
    function viewProfile(userData){
        navigate(`/Team/${userData.id}`,{
            state:{
                user:userData
            
        }})
    }
    
    return(
        <>
        <Header isDarkMode={isDarkMode} switchMode={switchMode}/>
        <main className={`${isDarkMode? "dark-mode-main" : "light-mode-main"} flex flex-col h-full`} >
            
            <div className={`${isDarkMode?'btnsContainerDark':"btnsContainerLight"} pb-4 mt-[5%] `}>
                <h1 className={`text-5xl md:text-6xl font-bold m-6  ${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600":"bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} bg-clip-text text-transparent`}>Liked Profiles</h1>
            </div>
            <div className={`${isDarkMode? "cards-container-dark" : "cards-container-light"} mb-[5%] `}>
                {storedProfiles.map((user) => (
                                    <UserCard
                                        id= {user.id}
                                        mode = {isDarkMode ? "card-dark" : "card-light"}
                                        name={user.name}
                                        email={user.email}
                                        picture={user.picture}
                                        isDarkMode={isDarkMode}
                                        onLikeClick={likeProfile}
                                        onUnlikeClick={unLikeProfile}
                                        onViewProfile={viewProfile}
                                    />
                                ))}
            </div>
        </main>
        <Footer/>
        </>
    )
}