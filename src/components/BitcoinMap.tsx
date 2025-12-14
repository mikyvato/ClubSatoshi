export default function BitcoinMap() {
    return (
        <section id="map" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">Mapa de Comercios</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Encuentra locales comerciales que aceptan Bitcoin cerca de ti.
                    </p>
                </div>

                <div className="w-full h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden relative flex items-center justify-center border border-gray-100 dark:border-gray-700">
                    {/* Placeholder for Map Integration */}
                    <div className="text-center p-8">
                        <div className="text-6xl mb-4">🗺️</div>
                        <p className="text-gray-500 font-bold text-lg">Integración de Google Maps</p>
                        <p className="text-gray-400 text-sm max-w-md mx-auto mt-2">
                            Aquí se mostrará el mapa interactivo con los pines de los comercios afiliados.
                            Requiere configuración de API Key.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
