import React from 'react'
import { Briefcase } from 'lucide-react';;


const Experiences = () => {

    const experiences = [
        {
          title: 'Full Stack Developer Intern',
          company: 'Mira',
          period: 'Nov 2024 - Jan 2025',
          description: `● Developed a calendar component for Mira’s frontend using Next.js and React.js, implementing features like drag-and-drop, dynamic event management, modal dialogs, and day/month views.
          
          ● Designed and implemented RESTful APIs for event management (creation, insertion, deletion, and updates) using Node.js, Express.js, and Supabase.
          ● Optimized API performance, ensuring efficient database queries and robust error handling, with thorough testing using Insomnia.● Actively contributed to wireframe discussions and infrastructure planning, including authentication, deployment, and future scalability.
          ● Maintained project tracking in Jira and leveraged Git for version control, ensuring smooth collaboration.● Worked closely with the technical team, effectively communicating updates and providing feedback to enhance development workflows.`,
        },
        {
          title: 'Software Engineer Intern',
          company: 'Marsupium',
          period: 'Aug 2024 - Nov 2024',
          description: "● Analyzed financial datasets to train machine learning models, achieving over 90% accuracy in predicting user spending patterns, which significantly enhanced data-driven decision-making and improved forecasting efficiency.● Leveraged prompt engineering to train OpenAI models, delivering personalized notifications that assist users in effective budgeting.● Conducted weekly sprint sessions, presenting model progress to a collaborative team of Australian and Indonesian developers,actively integrating constructive feedback to enhance the model's performance.● Utilized Jira for task assignment and project management, ensuring timely delivery of results and maintaining project transparency.● Developed backend APIs for securely saving user data in the database and efficiently fetching user transaction history.",
        },
        {
            title: 'Research Intern',
            company: 'Australian Institute for Machine Learning (AIML)',
            period: 'Dec 2023 - Aug 2024',
            description: "● Collaborated with a PhD professor on a cutting-edge Language Learning Model, resulting in a fully scalable and customizable application suitable for both individuals and businesses. ● Optimized document upload processes with a configurable file system, enhancing system efficiency by 85%.● Enhanced security measures by implementing backend protection strategies to safeguard sensitive data.● Carried out comprehensive research on Retrieval Augmented Generation (RAG) applications for enhancing the model capabilites.",
          },
      ];
      

  return (
        <section id="experience" className="bg-gradient-to-b from-black to-gray-800 py-8 text-white">
          <div className="container mx-auto px-8">
            <SectionTitle>Experience</SectionTitle>
            <Timeline items={experiences} />
          </div>
        </section>
  );
}

function SectionTitle({ children }) {
    return (
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        {children}
      </h2>
    );
  }

  function Timeline({ items }) {
    return (
      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 last:pb-0">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-px bg-white dark:bg-white" />
            
            {/* Timeline Point */}
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-white dark:bg-white" />
            
            {/* Timeline Card */}
            <div className="group relative bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {item.company} • {item.period}
                </div>
                
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {item.description.split("●").map((point, i) => 
                  point.trim() && <li key={i}>{point.trim()}</li>
                )}
              </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default Experiences
