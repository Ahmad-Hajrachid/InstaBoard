import Header from "../components/Navigation/Navigation";
import {Footer} from '../components/Layout';
import { useNavigate } from "react-router-dom";

export default function About({switchMode,isDarkMode}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDarkMode={isDarkMode} switchMode={switchMode} />
      <main className={`${isDarkMode ? "dark-mode-main" : "light-mode-main"} flex-1`}>
        <div className={`${isDarkMode ? 'btnsContainerDark' : "btnsContainerLight"} pb-4`}>
          
          {/* Hero Section */}
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-white`}>
                About <span className={`${isDarkMode ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"} bg-clip-text text-transparent`}>InstaBoard</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-100`}>
                Revolutionizing team collaboration through instant, intuitive, and intelligent dashboard solutions.
              </p>
            </div>

            {/* Mission Section */}
            <div className="mb-16">
              <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} max-w-4xl mx-auto`}>
                <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission
                </h2>
                <p className={`text-lg leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  At InstaBoard, we believe that great teams deserve great tools. Our mission is to eliminate the friction in team collaboration by providing an instant, intuitive dashboard that brings teams together, streamlines workflows, and transforms the way people work together. We're not just building software – we're crafting experiences that empower teams to achieve their full potential.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent ${isDarkMode ? "bg-gradient-to-r from-slate-300 via-gray-200 to-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"}`}>
                Our Core Values
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Speed & Efficiency
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    We prioritize lightning-fast performance and seamless user experiences that keep teams productive and focused.
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Collaboration First
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Every feature is designed with team collaboration in mind, fostering communication and shared success.
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Innovation
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    We continuously push boundaries, exploring new technologies and methodologies to stay ahead.
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Security & Privacy
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Your data is sacred. We implement enterprise-grade security measures to protect your information.
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    User-Centric Design
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Every decision we make is guided by user feedback and the pursuit of exceptional user experiences.
                  </p>
                </div>

                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Global Impact
                  </h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    We're building tools that connect teams across the globe, breaking down barriers and enabling collaboration anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="mb-16">
              <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} max-w-4xl mx-auto`}>
                <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Story
                </h2>
                <div className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
                  <p>
                    InstaBoard was born from a simple frustration: why is team collaboration still so complicated? Our founders, experienced developers and project managers, found themselves constantly switching between multiple tools, dealing with slow interfaces, and watching productive time slip away in unnecessary complexity.
                  </p>
                  <p>
                    In late 2023, we decided to build the solution we wished existed. Starting with a simple prototype, we focused on three core principles: speed, simplicity, and seamless collaboration. What began as a weekend project quickly evolved into a comprehensive platform that teams around the world now rely on.
                  </p>
                  <p>
                    Today, InstaBoard serves thousands of teams across startups, enterprises, and everything in between. We're proud to be the dashboard that gets out of your way and lets you focus on what matters most: building great things together.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent ${isDarkMode ? "bg-gradient-to-r from-slate-300 via-gray-200 to-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300"}`}>
                Ready to Transform Your Team?
              </h2>
              <p className={`text-lg mb-8 max-w-2xl mx-auto text-gray-100`}>
                Join thousands of teams who have already discovered the power of instant collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/')}
                  className={`${isDarkMode ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-gradient-to-r from-teal-300 via-emerald-400 to-lime-300 text-black"} px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => navigate('/team')}
                  className={`${isDarkMode ? 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' : 'border-2 border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white'} px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200`}
                >
                  Meet Our Team
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} switchMode={switchMode} />
    </div>
  );
}