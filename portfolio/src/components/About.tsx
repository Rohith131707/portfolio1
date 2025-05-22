"use client";

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Save the current ref value to avoid the warning
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900/20 dark:to-transparent"></div>
        <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-indigo-100 dark:bg-indigo-900/20 filter blur-3xl opacity-70"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-purple-100 dark:bg-purple-900/20 filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Get to Know Me Better
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  I am <span className="font-semibold text-indigo-600 dark:text-indigo-400">Jayaram Rohith</span>, a passionate software engineer with a strong foundation in web development technologies.
                  I have completed my B.Tech degree from JB Institute of Technology Engineering in 2025.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  I have experience working as a <span className="font-semibold">Software Engineer Intern</span> at Workcohol company, where I developed and tested web applications
                  using JavaScript and React.js, worked on backend API development, and collaborated with cross-functional teams to enhance
                  application functionality.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I am a quick learner, problem solver, and dedicated professional looking to contribute my skills to a progressive organization
                  where I can grow and make a meaningful impact.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Personal Info</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Date of Birth:</span>
                      <span>23rd Dec 2002</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Nationality:</span>
                      <span>Indian</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Languages:</span>
                      <span>English, Hindi, Telugu</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact Details</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Email:</span>
                      <a href="mailto:rohithjayaram33@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        rohithjayaram33@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Phone:</span>
                      <a href="tel:+917993511614" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        +91 7993511614
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Location:</span>
                      <span>Hyderabad, India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm lg:max-w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                    <div className="h-full w-full bg-white dark:bg-gray-800 rounded-xl p-4">
                      <div className="h-full w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mx-auto flex items-center justify-center mb-4">
                            <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">JR</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Jayaram Rohith</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">Software Engineer</p>
                          <div className="flex justify-center space-x-3">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                            <a href="mailto:rohithjayaram33@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
