// src/components/Projects.jsx
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projectList = [
    {
        title: 'Framework de E2E con Cypress',
        description: 'Implementación de un robusto framework de pruebas de extremo a extremo utilizando Page Object Model (POM) y reportes Allure.',
        githubLink: 'https://github.com/tomas-fdz'
    },
    {
        title: 'Automatización de APIs con Postman/Newman',
        description: 'Colecciones de Postman para validar endpoints RESTful, integradas con Newman para ejecución en CI/CD.',
        githubLink: 'https://github.com/tomas-fdz'
    },
    {
        title: 'Migración a Playwright',
        description: 'Proyecto de modernización, migrando scripts de Selenium a Playwright para pruebas más rápidas y estables.',
        githubLink: 'https://github.com/tomas-fdz'
    },
]

export default function Projects() {
    return (
        <section id="projects" className="pt-10">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                Proyectos Destacados 🚀
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                    <article
                        key={index}
                        className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-shadow hover:shadow-2xl"
                    >
                        <h4 className="text-xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
                            {project.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                            {project.description}
                        </p>

                        {/* Enlace a GitHub */}
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                        >
                            <CodeBracketIcon className="w-5 h-5 mr-2" />
                            Ver en GitHub
                            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}
