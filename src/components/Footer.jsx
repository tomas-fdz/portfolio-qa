// src/components/Footer.jsx
export default function Footer() {
    // Obtener el año actual dinámicamente
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mt-20 p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="container mx-auto text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    &copy; {currentYear} Tomás Fernández. Todos los derechos reservados.
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                    Desarrollado con React, Vite y TailwindCSS.
                </p>
            </div>
        </footer>
    )
}
