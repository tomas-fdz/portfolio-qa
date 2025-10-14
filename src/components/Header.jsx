// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid' // Asumiendo uso de Heroicons

export default function Header() {
    // Forzar dark por defecto si no hay preferencia guardada
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') return true
        if (saved === 'light') return false

        return true
    })

    // Aplicar la clase 'dark' al <html> y guardar la preferencia
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode((v) => !v)

    return (
        <header className="sticky top-0 z-50 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
            <div className="container mx-auto flex justify-between items-center">
                {/* Nombre y Rol */}
                <div className="flex flex-col">
                    <h1 className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        Tomás Fernández
                    </h1>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        QA Automation Engineer
                    </p>
                </div>

                {/* Botón Toggle Dark Mode */}
                <button
                    onClick={toggleDarkMode}
                    aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                    className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {darkMode ? (
                        <SunIcon className="w-6 h-6" />
                    ) : (
                        <MoonIcon className="w-6 h-6" />
                    )}
                </button>
            </div>
        </header>
    )
}
