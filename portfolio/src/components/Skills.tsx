const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 85 },
    { name: "Java", level: 60 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Django", level: 70 },
    { name: "SQL", level: 80 },
    { name: "Git", level: 85 },
    
  ];

  const softSkills = [
    "Problem Solving",
    "Quick Learner",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Self-Motivation",
    "Attention to Detail",
  ];

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            My technical and soft skills
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center"
                >
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Other Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other Skills</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Operating Systems:</h4>
                <p className="text-gray-600 dark:text-gray-300">Windows</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Application Software:</h4>
                <p className="text-gray-600 dark:text-gray-300">MS-Office</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Achievements</h3>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Awarded the Best Student Award for consistent academic excellence in 10th class</li>
              <li>Achieved 1st place in the chess competition in 12th class</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
