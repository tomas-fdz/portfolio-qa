// src/components/Contact.jsx
import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // NUEVO: estado para controlar si el formulario se está enviando
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // CAMBIO: handleSubmit actualizado para enviar datos a Formspree
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true) // bloquear el botón mientras se envía

        try {
            const response = await fetch('https://formspree.io/f/mgvnrwnw', { // ID de Formspree
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                alert('Mensaje enviado correctamente. ¡Gracias por contactarme!')
                setFormData({ name: '', email: '', message: '' }) // resetear formulario
            } else {
                alert('Hubo un error al enviar el mensaje. Intenta de nuevo.')
            }
        } catch (error) {
            console.error('Error enviando formulario:', error)
            alert('Error de red. Revisa tu conexión.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="pt-10">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                ¿Hablamos de un Proyecto? 📬
            </h3>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Columna de Formulario */}
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors"
                                placeholder="Cuéntame sobre tu proyecto..."
                            ></textarea>
                        </div>

                        {/* CAMBIO: botón deshabilitado mientras se envía */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 text-lg font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors disabled:opacity-50"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>

                {/* Columna de Enlaces */}
                <div className="space-y-6 md:pt-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        También puedes encontrarme en:
                    </h4>

                    <div className="space-y-4">
                        <a
                            href="https://www.linkedin.com/in/tomasfdz11/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                        >
                            <AcademicCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                LinkedIn/TuPerfil
                            </span>
                            <LinkIcon className="w-4 h-4 ml-auto text-gray-400 dark:text-gray-500" />
                        </a>

                        <a
                            href="https://github.com/tomas-fdz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                        >
                            <CodeBracketIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                GitHub/TuUsuario
                            </span>
                            <LinkIcon className="w-4 h-4 ml-auto text-gray-400 dark:text-gray-500" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
