import Link from "next/link";
import Image from "next/image";
import { Users, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";
import { getAssetPath } from "@/utils/assets";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black text-secondary dark:text-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Acerca de Nosotros</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Construyendo una economía circular impulsada por Bitcoin.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
                    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <h3 className="text-2xl font-bold mb-4">Nuestro Propósito</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            En Club Satoshi, nos dedicamos a <strong>conectar personas apasionadas</strong> y crear un espacio donde todos, sin importar su experiencia, puedan aprender sobre Bitcoin.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Impulsamos la innovación y la colaboración para construir un futuro financiero más inclusivo, transparente y accesible para nuestra comunidad en Tucumán y el Norte Argentino.
                        </p>
                    </div>
                    <div className="hidden md:block relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <Image
                            src={getAssetPath("/Purpose_image2.png")}
                            alt="Comunidad levantando Bitcoin"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <div className="text-center mb-12 animate-fade-in">
                        <h3 className="text-2xl font-bold">Nuestros Valores</h3>
                        <p className="text-gray-500 mt-2">Los pilares que sostienen nuestra comunidad</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-primary" />}
                            title="Colaboración"
                            description="Creemos en el poder de ayudarnos mutuamente para crecer juntos."
                            delay="0.1s"
                        />
                        <ValueCard
                            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                            title="Libertad"
                            description="Defendemos la libertad de opinión y expresión en cada encuentro."
                            delay="0.2s"
                        />
                        <ValueCard
                            icon={<Lightbulb className="w-8 h-8 text-primary" />}
                            title="Aprendizaje"
                            description="Mantenemos la humildad y las ganas constantes de aprender."
                            delay="0.3s"
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-primary" />}
                            title="Apertura"
                            description="Abrazamos la creatividad y estamos siempre abiertos al cambio."
                            delay="0.4s"
                        />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-64 rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <Image
                            src={getAssetPath("/vision_image.png")}
                            alt="Futuro conectado por Bitcoin"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <h3 className="text-2xl font-bold mb-4">Misión y Visión</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-primary">Nuestra Misión</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Conectar, educar y difundir conocimientos sobre Bitcoin, empoderando a la comunidad a través de talleres y eventos colaborativos.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-primary">Nuestra Visión</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Ser la comunidad referente de Bitcoin en el Norte Argentino, impulsando el desarrollo de proyectos y la adopción real de la tecnología.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValueCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay?: string }) {
    return (
        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up" style={{ animationDelay: delay }}>
            <div className="mb-4 flex justify-center">{icon}</div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
        </div>
    );
}
