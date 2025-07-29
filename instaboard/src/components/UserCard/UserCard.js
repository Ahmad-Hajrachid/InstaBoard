import { useState } from "react";
import { FaRegHeart,FaHeart } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';


export default function UserCard(props){
    const [isLiked,setIsLiked] = useState(false);
    const [isHidden,setIsHidden] = useState(false);
    const [isAnimating,setIsAnimating] = useState(false);
    
    

    const handleLike =()=>{
        setIsLiked(!isLiked)
        if(!isLiked){
            props.onLikeClick({
                id:props.id,
                name: props.name,
                email: props.email,
                picture: props.picture
            })
        }
        else {
            props.onUnlikeClick({
                id:props.id,
                name: props.name,
                email: props.email,
                picture: props.picture
            })
        }
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
        <div className={`${props.mode} items-center`}>
            <img src={props.picture} alt={props.name}/>
            <h2>{props.name}</h2>
            <p className="email-field self-center">
                {isHidden? "*".repeat(props.email.length) : props.email} 
                <button className={`${props.isDarkMode ? 'hide-btn-dark':'hide-btn-light'}`} onClick={switchHidden}>{isHidden? (<FiEye className="btn-hidden"/>) : <FiEyeOff className="btn-notHidden" />}</button></p>
            
            <button className={`like-btn ${isAnimating ? 'animate-like':''}`}
            onClick={handleClick}
            >
                {isLiked?<FaHeart className={`btn-liked ${props.isDarkMode ?'btn-liked-dark':'btn-liked-light'}`}/>: <FaRegHeart className={`btn-liked ${props.isDarkMode ?'btn-liked-dark':'btn-liked-light'}`}/>}
            </button>
            <button className={`${props.isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300 text-black"} px-5 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`} 
            onClick={() => props.onViewProfile({
                id:props.id,
                name: props.name,
                email: props.email,
                picture: props.picture
            })}
            >View Profile</button>
        </div>
    )
}