"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel } from "@/components/section-label";
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
    <section id="contacto" className="bg-marino py-20 text-crema md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionLabel number="06" label="CONTACTO" variant="light" />
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl md:text-6xl">
            Hablemos
            <br />
            antes de <em className="italic text-naranja">la emergencia.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-8 border-t border-crema/15 pt-8 sm:grid-cols-3 md:grid-cols-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
                  Correo
                </span>
                <a
                  href="mailto:hola@sandrarangel.com"
                  className="mt-2 block text-lg font-semibold transition-colors hover:text-naranja"
                >
                  hola@sandrarangel.com
                </a>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
                  Diagnóstico
                </span>
                <a
                  href="#diagnostico"
                  className="mt-2 block text-lg font-semibold transition-colors hover:text-naranja"
                >
                  Diagnóstico inicial →
                </a>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
                  Ubicación
                </span>
                <p className="mt-2 text-lg font-semibold">Cartagena de Indias</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-crema p-7 text-marino sm:p-8"
              noValidate
            >
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
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
