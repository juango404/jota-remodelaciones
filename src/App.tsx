/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Hammer, 
  Paintbrush, 
  Home, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const services = [
  {
    title: "Remodelación Integral",
    description: "Transformamos tu hogar por completo, desde la fontanería hasta los acabados finales.",
    icon: <Home className="w-8 h-8 text-amber-600" />,
    image: "https://images.unsplash.com/photo-1581850518616-08155ae20b04?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cocinas de Diseño",
    description: "Creamos espacios funcionales y estéticos donde cocinar sea un placer.",
    icon: <Paintbrush className="w-8 h-8 text-amber-600" />,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Baños Modernos",
    description: "Renovamos tu baño con materiales de primera calidad y diseños contemporáneos.",
    icon: <Hammer className="w-8 h-8 text-amber-600" />,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold tracking-tighter text-stone-900">
                JOTA <span className="text-amber-600">REMODELACIONES</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium hover:text-amber-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-sm font-medium hover:text-amber-600 transition-colors">Servicios</a>
              <a href="#proyectos" className="text-sm font-medium hover:text-amber-600 transition-colors">Proyectos</a>
              <a href="#contacto" className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
                Presupuesto Gratis
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-stone-100 p-4 space-y-4"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Servicios</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Proyectos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-amber-600">Contacto</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Madrid, España
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Rediseñamos tu espacio, <br className="hidden sm:block" />
              <span className="italic text-amber-400">elevamos tu vida.</span>
            </h1>
            <p className="text-base md:text-xl text-stone-100 mb-10 font-light leading-relaxed max-w-xl">
              Especialistas en remodelaciones de alta gama en Madrid. Convertimos apartamentos y casas en el hogar de tus sueños con acabados impecables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-amber-700 transition-all flex items-center justify-center gap-2 group text-sm md:text-base">
                Solicitar Presupuesto <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proyectos" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/20 transition-all text-sm md:text-base">
                Ver Proyectos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Nuestros Servicios</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-stone-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para cada rincón de tu hogar, garantizando calidad y cumplimiento en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold">15+</p>
                <p className="text-sm uppercase tracking-wider">Años de Experiencia</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8">¿Por qué elegir Jota Remodelaciones?</h2>
              <div className="space-y-6">
                {[
                  { title: "Calidad Garantizada", desc: "Utilizamos materiales de primera y mano de obra experta." },
                  { title: "Cumplimiento de Plazos", desc: "Sabemos que tu tiempo es oro. Entregamos siempre a tiempo." },
                  { title: "Presupuesto Transparente", desc: "Sin sorpresas de último minuto. Todo detallado desde el inicio." },
                  { title: "Atención Personalizada", desc: "Tu visión es nuestra prioridad. Te asesoramos en cada paso." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-stone-900">{item.title}</h4>
                      <p className="text-stone-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Proyectos Recientes</h2>
            <p className="text-stone-600">Inspiración para tu próxima transformación.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Project ${i}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 md:py-32 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-amber-600/5 lg:bg-amber-600/10 lg:skew-x-12 lg:translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-stone-400 mb-10 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                ¿Tienes una idea en mente? Cuéntanos qué necesitas y te daremos un presupuesto sin compromiso. Estamos en Madrid listos para empezar.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  </div>
                  <span className="text-sm md:text-base">+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  </div>
                  <span className="text-sm md:text-base break-all">info@jotaremodelaciones.es</span>
                </div>
                <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                  </div>
                  <span className="text-sm md:text-base">Calle Mayor, 1, 28013 Madrid, España</span>
                </div>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 text-stone-900 shadow-2xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-stone-600">Nos pondremos en contacto contigo muy pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nombre</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Teléfono</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                      placeholder="+34 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensaje</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 outline-none transition-all"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/20">
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-stone-500 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Jota Remodelaciones. Todos los derechos reservados. Madrid, España.
          </p>
        </div>
      </footer>
    </div>
  );
}
