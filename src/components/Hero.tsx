import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-[#0a0a0a] text-white isolate">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 h-full w-full">
                {/* Base Gradient - Lighter/Bluer */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-[#111] to-[#0a0a0a]"></div>

                {/* Aurora Effect - Increased Opacity and Vibrancy */}
                <div
                    className="absolute inset-0 h-[200%] w-[200%] animate-aurora opacity-100 mix-blend-screen"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 50% 50%, rgba(247, 147, 26, 0.4), transparent 50%),
                            radial-gradient(circle at 10% 10%, rgba(14, 116, 144, 0.4), transparent 40%),
                            radial-gradient(circle at 90% 90%, rgba(247, 147, 26, 0.3), transparent 50%),
                            radial-gradient(circle at 90% 10%, rgba(14, 116, 144, 0.3), transparent 40%),
                            radial-gradient(circle at 10% 90%, rgba(14, 116, 144, 0.3), transparent 50%)
                        `,
                        backgroundSize: '120% 120%'
                    }}
                ></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in italic font-heading" style={{ animationDelay: "0.1s" }}>
                    Club<span className="text-primary">.</span>Satoshi<br />
                    <span className="text-gray-300 text-sm md:text-xl tracking-[0.3em] font-bold uppercase mt-4 block not-italic font-sans">Comunidad Bitcoiner</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    Aprende cómo Bitcoin impulsa una economía circular y sostenible.
                    Únete a la revolución financiera desde tu comunidad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
                    <Link
                        href="#resources"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Explorar Recursos
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#about"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-sm transition-all border border-white/10"
                    >
                        Conocer más
                    </Link>
                </div>
            </div>
        </section>
    );
}
