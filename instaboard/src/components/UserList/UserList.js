import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard'
import './UserList.css'
import {Button} from '../Button'
import { useNavigate } from 'react-router-dom';
export default function UserList({ isDarkMode, likeProfile,unLikeProfile})  {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userCount,setUserCount] = useState()
    const navigate = useNavigate();


    function viewProfile(userData){
        navigate(`/Team/${userData.id}`,{
            state:{
                user:userData
            
        }})
    }

    const fetchUsers = async (count) => {
        if(!count){
            setError('Enter the number of users to load')
            return
        }
        if ( count < 0 ) {
        setError('Please enter a valid number of users to load.');
        return;
    }
    if(count > 100){
        setError('Can not Fetch more than 100 users')
        return;
    }
    setLoading(true);
    setError(null);
    
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
        
        const newUsers = response.data.results.map(user => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            picture: user.picture.large
        }));

        
        setUserDetails(newUsers);
    } catch (err) {
        setError('Failed to fetch users. Please try again.');
        console.error('Error fetching users:', err);
    } finally {
        setLoading(false);
    }
};
    
    useEffect(() => {
        fetchUsers(12);
    }, []);
    

    return (
        <div className={`${isDarkMode? "dark-mode-main" : "light-mode-main"} flex flex-col`}>        
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            <h3 className={`${isDarkMode? "h3Dark":"h3Light"}  self-center`}>Loaded Users:{userDetails.length}</h3>
            <div className={`${isDarkMode?'btnsContainerDark':"btnsContainerLight"} pb-4`}>
                <input className='w-3/12 p-2 ml-6 rounded-full text-center mr-3' type='number' placeholder='Number of Users to Load' min='1' max='100' value={userCount} onChange={(e)=>setUserCount(e.target.value)}></input>
                <div className='btnContainer '>
                   <Button className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300 text-black"} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`} onClick={()=>fetchUsers(userCount)} disabled={loading} children={loading ? 'Loading...' : 'Load Users'} />
                </div>
                </div>
            <div className={`${isDarkMode? "cards-container-dark" : "cards-container-light"} h-full`}>
                {userDetails.map((user) => (
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
        </div>
    );
}