import Header from "../components/Navigation/Navigation";
import {Footer} from '../components/Layout'
import { useNavigate } from "react-router-dom";
export default function Home({switchMode,isDarkMode}){
  const navigate = useNavigate();
  
    return (
  <div className="min-h-screen flex flex-col">
    <Header isDarkMode={isDarkMode} switchMode={switchMode}/>
    <main className={`${isDarkMode? "dark-mode-main" : "light-mode-main"} flex-1`}>
      <div className={`${isDarkMode?'btnsContainerDark':"btnsContainerLight"} pb-4`}>
        
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-white`}>
              Welcome to <span className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600":"bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} bg-clip-text text-transparent`}>InstaBoard</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100`}>
              Your instant dashboard for team collaboration, project management, and real-time insights. 
              Connect, create, and collaborate seamlessly with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() =>(navigate('/about'))} className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white":"bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} text-black px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Lightning Fast
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Instant board creation and real-time updates keep your team moving at the speed of thought.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Team Collaboration
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Work together seamlessly with your team members, share ideas, and track progress in real-time.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-shadow duration-300`}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Smart Analytics
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Get insights into team performance, project progress, and productivity metrics at a glance.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent  ${isDarkMode? "bg-gradient-to-r from-slate-300 via-gray-200 to-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} `}>
              Meet Our Amazing Team
            </h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto text-gray-100`}>
              The brilliant minds behind InstaBoard, working together to revolutionize team collaboration.
            </p>
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => navigate('/team')}
                className={`${isDarkMode? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                View Full Team
              </button>
            </div>
          </div>
          </div>
        </div>
        
    </main>
    <Footer isDarkMode={isDarkMode} switchMode={switchMode}/>
  </div>
    )
}