import { useState } from "react";
import { FaRegHeart } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';


export default function UserCard(props){
    const [isLiked,setIsLiked] = useState(0);
    const [isHidden,setIsHidden] = useState(false);
    const [isAnimating,setIsAnimating] = useState(false);
    

    const handleLike =()=>{
        setIsLiked(isLiked+1)
    };
    
    const switchHidden = ()=>{
        setIsHidden(hidden => !hidden)
    };

    const likeAnimation=()=>{
        setIsAnimating(true);
        setTimeout(()=>{
            setIsAnimating(false);
        },300);
    }

    const handleClick = () => {
        handleLike();
        likeAnimation();
    };
    
    return(
        <div className={props.mode}>
            <img src={props.picture} alt={props.name}/>
            <h2>{props.name}</h2>
            <p className="email-field">
                {isHidden? "*".repeat(props.email.length) : props.email} 
                <button className={`${props.isDarkMode ? 'hide-btn-dark':'hide-btn-light'}`} onClick={switchHidden}>{isHidden? (<FiEye className="btn-hidden"/>) : <FiEyeOff className="btn-notHidden" />}</button></p>
            <h4>Likes: {isLiked}</h4>
            <button className={`like-btn ${isAnimating ? 'animate-like':''}`}
            onClick={handleClick}
            >
                {<FaRegHeart className={`btn-liked ${props.isDarkMode ?'btn-liked-dark':'btn-liked-light'}`}/>}
            </button>
        </div>
    )
}