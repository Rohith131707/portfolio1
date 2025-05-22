"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ["Software Engineer", "Web Developer", "Problem Solver"];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-60 h-60 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-4">
                <span className="block">Hi, I&apos;m</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Jayaram Rohith
                </span>
              </h1>
              <div className="h-12 overflow-hidden">
                <div className="animate-slide-up-down">
                  {roles.map((role, index) => (
                    <div key={index} className="h-12 flex items-center text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl">
              A passionate software engineer with experience in web development using JavaScript, React.js, and more.
              Looking to work in a progressive organization where I can enhance my skills and contribute to the success of the organization.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="rounded-full bg-white dark:bg-gray-800 px-8 py-3 text-base font-medium text-gray-800 dark:text-white shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-10 flex items-center">
              <div className="mr-4 h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:rohithjayaram33@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                <div className="p-1">
                  <div className="h-3 flex space-x-1.5 items-center pl-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 font-mono text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex">
                      <span className="text-purple-600 dark:text-purple-400">const</span>
                      <span className="text-gray-800 dark:text-gray-300 mx-2">developer</span>
                      <span className="text-gray-800 dark:text-gray-300">=</span>
                      <span className="text-gray-800 dark:text-gray-300 mx-2">{'{'}</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-indigo-600 dark:text-indigo-400">name:</span>
                      <span className="text-green-600 dark:text-green-400 ml-2">&apos;Jayaram Rohith&apos;</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-indigo-600 dark:text-indigo-400">skills:</span>
                      <span className="text-gray-800 dark:text-gray-300 ml-2">[</span>
                      <span className="text-green-600 dark:text-green-400">&apos;JavaScript&apos;</span>,
                      <span className="text-green-600 dark:text-green-400">&apos;React.js&apos;</span>,
                      <span className="text-green-600 dark:text-green-400">&apos;Python&apos;</span>,
                      <span className="text-gray-800 dark:text-gray-300">]</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-indigo-600 dark:text-indigo-400">passion:</span>
                      <span className="text-green-600 dark:text-green-400 ml-2">&apos;Building amazing web experiences&apos;</span>,
                    </div>
                    <div className="pl-6">
                      <span className="text-indigo-600 dark:text-indigo-400">status:</span>
                      <span className="text-green-600 dark:text-green-400 ml-2">&apos;Available for opportunities&apos;</span>
                    </div>
                    <div>
                      <span className="text-gray-800 dark:text-gray-300">{'}'}</span>;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
