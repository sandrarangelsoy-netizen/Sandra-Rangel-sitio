"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    form.reset();
  }

  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            Contacto
          </span>
          <h2 className="font-display text-3xl font-extrabold text-marino sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-marino/65">
            Cuéntame sobre tu empresa, tu evento o tu entidad territorial. Respondo en menos
            de 48 horas hábiles.
          </p>

          <div className="mt-8 space-y-1">
            <div className="flex items-center gap-4 border-b border-marino/10 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crema text-naranja">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-marino">Correo</div>
                <div className="text-sm text-marino/55">hola@sandrarangel.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-marino/10 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crema text-naranja">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-marino">Teléfono / WhatsApp</div>
                <div className="text-sm text-marino/55">+57 300 000 0000</div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crema text-naranja">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-marino">Ubicación</div>
                <div className="text-sm text-marino/55">
                  Cartagena de Indias, Colombia · disponible para proyectos en todo el país
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-crema p-7 sm:p-9" noValidate>
            {sent && (
              <div className="mb-5 rounded-lg border border-naranja/40 bg-naranja/10 px-4 py-3 text-sm font-bold text-naranja-600">
                ¡Gracias! Tu mensaje fue enviado. Te responderé pronto.
              </div>
            )}

            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-marino">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-marino/15 bg-white px-4 py-3 text-sm text-marino placeholder:text-marino/35 focus:border-naranja focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-marino">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full rounded-lg border border-marino/15 bg-white px-4 py-3 text-sm text-marino placeholder:text-marino/35 focus:border-naranja focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="org" className="mb-1.5 block text-xs font-bold text-marino">
                Organización
              </label>
              <input
                id="org"
                name="org"
                type="text"
                placeholder="Empresa, entidad o evento"
                className="w-full rounded-lg border border-marino/15 bg-white px-4 py-3 text-sm text-marino placeholder:text-marino/35 focus:border-naranja focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="topic" className="mb-1.5 block text-xs font-bold text-marino">
                Tipo de solicitud
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full rounded-lg border border-marino/15 bg-white px-4 py-3 text-sm text-marino focus:border-naranja focus:outline-none"
              >
                <option>Implementación de PGRDEPP (Decreto 2157)</option>
                <option>Plan de Emergencia y Contingencia para evento masivo</option>
                <option>Campaña de marketing social / CCSC</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-marino">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-y rounded-lg border border-marino/15 bg-white px-4 py-3 text-sm text-marino placeholder:text-marino/35 focus:border-naranja focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-naranja px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-naranja-600"
            >
              Enviar mensaje
            </button>
            <p className="mt-3 text-center text-xs text-marino/40">
              Al enviar aceptas que Sandra Rangel te contacte respecto a tu solicitud.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
