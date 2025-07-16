import React from "react";

interface SkillGroup {
  name: string;
  details: string[];
}

interface SkillCategoryCardProps {
  category: string;
  icon: React.JSX.Element;
  skills: SkillGroup[];
  darkMode: boolean;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  icon,
  skills,
  darkMode,
}) => {
  return (
    <div
      className={`rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300 ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h3 className="text-xl font-bold flex items-center mb-4">
        {icon}
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((group, idx) => (
          <div key={idx}>
            <p className="font-semibold mb-2 text-teal-600 dark:text-teal-300">
              {group.name}
            </p>
            <ul className="list-none space-y-1 pl-2">
              {group.details.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-sm">
                  <span className="text-green-500 dark:text-green-300 mr-2">
                    ✔
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
