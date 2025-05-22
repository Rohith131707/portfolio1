const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
        </div>

        {/* Work Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineer (Intern)</h4>
              <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                Dec 2024 - Mar 2025
              </div>
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">Workcohol Company</div>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Developed and tested web applications using JavaScript and React.js</li>
              <li>Worked on backend API development and database optimization in MySQL</li>
              <li>Collaborated with cross-functional teams to enhance application functionality</li>
              <li>Delivered key modules ahead of deadlines, ensuring high-quality performance</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-6">
            {/* B.Tech */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Technology</h4>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2021 - 2025
                </div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">JB Institute of Technology Engineering</div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">University:</span> JNTUH
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Percentage:</span> 80%
              </div>
            </div>

            {/* 12th */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Intermediate (12th)</h4>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2019 - 2021
                </div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">Loyola Junior College</div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Board:</span> Board of Intermediate Education
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Percentage:</span> 92%
              </div>
            </div>

            {/* 10th */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Secondary School (10th)</h4>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2019
                </div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-2">Tapovan High School</div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Board:</span> Board of Secondary Education
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Percentage:</span> 95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
