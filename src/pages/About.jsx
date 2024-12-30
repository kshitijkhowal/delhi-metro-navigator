import React from 'react';
import ProfilePic from '../assets/profile.jpg'; // Add your profile picture in assets folder
// import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { Github, Linkedin, Globe, Heart, Mail, Star } from 'lucide-react';
import { div } from 'motion/react-client';


const About = () => {
    return (

        <div className="h-full w-full p-4">
            <div className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-8 py-4">

                <h1 className='flex text-2xl font-bold text-center mb-6 text-black'>Developed By ❤️</h1>

                <img
                    src={ProfilePic}
                    alt="Kshitij"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">Kshitij Khowal</h1>
                <p className="text-gray-600 mb-4">
                    Passionate about building intuitive and efficient web
                    applications.
                </p>

            </div>
            <div className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-8 py-4">
                {/* Suggestions & Bug Reporting */}
                <div className="text-gray-700 text-sm mb-6 flex flex-col items-center">
                    <a
                        href="https://github.com/kshitijkhowal/delhi-metro-navigator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        <Star className="mr-2" />
                        Star This Repo
                    </a>
                    <p>
                        If you encounter any bugs, edge cases, or have suggestions to improve this application,
                        please feel free to contact me at:
                    </p>
                    <div className="flex items-center justify-center mt-2">
                        <Mail className="mr-2 text-blue-500" />
                        <a
                            href="mailto:kshitij.durgesh@gmail.com"
                            className="text-blue-500 underline"
                        >
                            kshitij.durgesh@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-gray-100 flex flex-col items-center rounded-xl mb-10 py-4">
                {/* About the Application */}
                <div className="text-gray-700 text-sm mb-6">
                    <p>
                        This web application, <strong>Delhi Metro Navigator</strong>, is designed to simplify
                        your metro travel experience. All maps have been sourced from the
                        official website of{' '}
                        <a
                            href="https://www.delhimetrorail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Delhi Metro Rail Corporation (DMRC)
                        </a>
                        .
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 text-2xl text-blue-600">
                    <a
                        href="https://github.com/kshitijkhowal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://linkedin.com/in/kshitijkhowal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://kshitijKhowal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                    >
                        <Globe />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
