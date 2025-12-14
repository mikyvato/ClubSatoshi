import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para unirte?</h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Si tienes dudas o quieres colaborar con el Club Satoshi, escríbenos. Estamos construyendo una comunidad abierta y queremos escucharte.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                <Mail className="w-6 h-6" />
                                <span>contacto@clubsatoshi.com</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                <MessageSquare className="w-6 h-6" />
                                <span>Únete a nuestro Telegram</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-secondary p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Nombre</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-primary outline-none bg-gray-50" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-primary outline-none bg-gray-50" placeholder="tucorreo@ejemplo.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Mensaje</label>
                                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-primary outline-none bg-gray-50 h-32 resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                                Enviar Mensaje
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
