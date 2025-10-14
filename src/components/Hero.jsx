// src/components/Hero.jsx
import profilePic from '../assets/profile.png'; // importar la imagen

export default function Hero() {
    return (
        <section id="hero" className="text-center pt-16 pb-12 sm:pt-24 sm:pb-16">
            {/* Avatar/Foto */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ring-4 ring-indigo-500 dark:ring-indigo-400">

                <img
                    src={profilePic} // Usa la variable importada
                    alt="Foto de Perfil" // Texto descriptivo para accesibilidad
                    className="w-full h-full object-cover" // Clases para cubrir el div y mantener la relación de aspecto
                />

            </div>

            {/* Texto de presentación */}
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
                Hola, soy <span className="text-indigo-600 dark:text-indigo-400">QA Automation Engineer</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Especializado en la creación de soluciones de <b>automatización robustas y escalables</b> para garantizar la calidad del software, desde la integración continua hasta el despliegue.
            </p>

            {/* Botón CTA */}
            <a
                href="#contact"
                className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all transform hover:scale-105"
            >
                Conóceme y Hablemos de Proyectos →
            </a>
        </section>
    )
}
