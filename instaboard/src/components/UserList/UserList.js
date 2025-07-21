import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard'
import './UserList.css'
import {Button} from '../Button'
export default function UserList({ isDarkMode, switchMode })  {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
        const response = await axios.get('https://randomuser.me/api/?results=12');
        
        const newUsers = response.data.results.map(user => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            picture: user.picture.large
        }));

        
        setUserDetails(prevUsers => [...prevUsers, ...newUsers]);
    } catch (err) {
        setError('Failed to fetch users. Please try again.');
        console.error('Error fetching users:', err);
    } finally {
        setLoading(false);
    }
};
    
    // Load initial users when component are created
    useEffect(() => {
        fetchUsers();
    }, []);
    

    return (
        <div className={isDarkMode? "dark-mode-main" : "light-mode-main"}>        
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            <h3 className={isDarkMode? "h3Dark":"h3Light"}>Loaded Users:{userDetails.length}</h3>
            <div className={isDarkMode?'btnsContainerDark':"btnsContainerLight"}>
                <div className='btnContainer'>
                   <Button className={isDarkMode? "btn-dark" : "btn-light"} onClick={fetchUsers} disabled={loading} children={loading ? 'Loading...' : 'Load More Users'} />
                
            
                </div>
                </div>
            <div className={isDarkMode? "cards-container-dark" : "cards-container-light"}>
                {userDetails.map((user) => (
                    <UserCard
                        mode = {isDarkMode ? "card-dark" : "card-light"}
                        name={user.name}
                        email={user.email}
                        picture={user.picture}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </div>
        </div>
    );
}