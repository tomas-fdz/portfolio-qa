// src/components/Skills.jsx
import { CodeBracketSquareIcon, ServerStackIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const skillList = [
    { name: 'Cypress', icon: CodeBracketSquareIcon },
    { name: 'Playwright', icon: CodeBracketSquareIcon },
    { name: 'Selenium', icon: CodeBracketSquareIcon },
    { name: 'Jest/Vitest', icon: ServerStackIcon },
    { name: 'CI/CD (Jenkins, GitLab)', icon: RocketLaunchIcon },
    { name: 'Postman/API Testing', icon: ServerStackIcon },
]

export default function Skills() {
    return (
        <section id="skills" className="pt-10">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                Habilidades de Automatización 🛠️
            </h3>

            {/* Grid Responsivo */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {skillList.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                    >
                        <skill.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3" />
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
