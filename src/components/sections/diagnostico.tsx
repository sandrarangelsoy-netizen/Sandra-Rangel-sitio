"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

type Answers = {
  tipo: string;
  aforo: string;
  ubicacion: string;
  estado: string;
  correo: string;
};

const initialAnswers: Answers = {
  tipo: "",
  aforo: "",
  ubicacion: "",
  estado: "",
  correo: "",
};

const TIPOS = [
  "Empresa privada (industrial, comercial o de servicios)",
  "Entidad pública o territorial",
  "Evento o espectáculo masivo",
  "Infraestructura u obra civil",
];

const AFOROS = [
  "Menos de 50 personas",
  "Entre 50 y 500 personas",
  "Entre 500 y 3.000 personas",
  "Más de 3.000 personas",
];

const ESTADOS = [
  "No tengo ningún plan formulado",
  "Tengo documentos, pero no están implementados",
  "Tengo plan, pero sin estrategia de comunicación",
  "Todo implementado y quiero fortalecer la cultura preventiva",
];

function buildResultado(a: Answers): { titulo: string; items: string[] } {
  const items: string[] = [];

  if (a.tipo === TIPOS[2]) {
    items.push(
      "Tu actividad requiere un Plan de Emergencia y Contingencia (PEC) radicado y aprobado ante la autoridad local de gestión del riesgo antes de operar."
    );
  } else {
    items.push(
      "Tu organización está obligada a formular e implementar el Plan de Gestión del Riesgo de Desastres de Entidades Públicas y Privadas (PGRDEPP), conforme al Decreto 2157 de 2017."
    );
  }

  if (a.aforo === AFOROS[2] || a.aforo === AFOROS[3]) {
    items.push(
      "Por tu volumen de personas expuestas, necesitas protocolos reforzados de control de multitudes y rutas de evacuación validadas por el CMGRD de tu municipio."
    );
  }

  if (a.estado === ESTADOS[0] || a.estado === ESTADOS[1]) {
    items.push(
      "El componente de comunicación comunitaria exigido por el Artículo 42 de la Ley 1523 de 2012 es el punto de partida: sin él, cualquier documento queda en el papel."
    );
  } else {
    items.push(
      "Ya tienes una base documental: el siguiente paso es diseñar la campaña de marketing social que convierta ese plan en comportamiento real de tu gente."
    );
  }

  items.push(
    "Te envío por correo una guía con los requerimientos aplicables a tu caso y los próximos pasos recomendados."
  );

  return {
    titulo:
      a.tipo === TIPOS[2]
        ? "Tu evento necesita un PEC y una estrategia de comunicación con asistentes"
        : "Tu organización necesita un PGRDEPP con componente de comunicación real",
    items,
  };
}

const steps = [
  { key: "tipo", label: "Tipo de actividad", options: TIPOS },
  { key: "aforo", label: "Personas expuestas", options: AFOROS },
  { key: "estado", label: "Estado actual de tus planes", options: ESTADOS },
] as const;

export function Diagnostico() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = steps.length + 2; // + ubicación + correo
  const resultado = useMemo(() => buildResultado(answers), [answers]);

  const canAdvance = () => {
    if (step < steps.length) return Boolean(answers[steps[step].key as keyof Answers]);
    if (step === steps.length) return answers.ubicacion.trim().length > 1;
    return /\S+@\S+\.\S+/.test(answers.correo);
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent("Diagnóstico Express — solicitud de guía de cumplimiento");
    const body = encodeURIComponent(
      [
        "Hola Sandra,",
        "",
        "Acabo de completar el Diagnóstico Express en sandrarangel.com. Mis respuestas:",
        `- Tipo de actividad: ${answers.tipo}`,
        `- Personas expuestas: ${answers.aforo}`,
        `- Ubicación: ${answers.ubicacion}`,
        `- Estado actual de los planes: ${answers.estado}`,
        `- Correo de contacto: ${answers.correo}`,
        "",
        "Me gustaría recibir la guía de recomendaciones y agendar una llamada de diagnóstico.",
      ].join("\n")
    );
    return `mailto:hola@sandrarangel.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="diagnostico" className="bg-marino py-20 text-crema md:py-28">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-12">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel number="05" label="DIAGNÓSTICO" variant="light" />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-crema sm:text-4xl">
            Diagnóstico Express de Cumplimiento
          </h2>
          <p className="mt-4 text-crema/65">
            Ley 1523 de 2012 y Decreto 2157 de 2017, en 5 preguntas. Responde y recibe un
            resumen de lo que aplica a tu caso.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-crema/15 bg-marino/60 p-6 shadow-2xl shadow-marino/40 backdrop-blur sm:p-10">
            {!submitted ? (
              <>
                <div className="mb-8 flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i <= step ? "bg-naranja" : "bg-crema/15"
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step < steps.length && (
                      <fieldset>
                        <legend className="mb-5 font-display text-xl font-extrabold">
                          {step + 1}. {steps[step].label}
                        </legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {steps[step].options.map((opt) => {
                            const key = steps[step].key as keyof Answers;
                            const selected = answers[key] === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => setAnswers((a) => ({ ...a, [key]: opt }))}
                                className={`rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                                  selected
                                    ? "border-naranja bg-naranja/15 text-crema"
                                    : "border-crema/15 text-crema/70 hover:border-crema/35"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {step === steps.length && (
                      <div>
                        <label className="mb-5 block font-display text-xl font-extrabold">
                          4. ¿En qué ciudad o municipio opera?
                        </label>
                        <input
                          type="text"
                          value={answers.ubicacion}
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, ubicacion: e.target.value }))
                          }
                          placeholder="Ej. Cartagena de Indias, Bolívar"
                          className="w-full rounded-xl border border-crema/20 bg-marino px-4 py-3.5 text-sm text-crema placeholder:text-crema/35 focus:border-naranja focus:outline-none"
                        />
                      </div>
                    )}

                    {step === steps.length + 1 && (
                      <div>
                        <label className="mb-5 block font-display text-xl font-extrabold">
                          5. ¿A qué correo te envío la guía?
                        </label>
                        <input
                          type="email"
                          value={answers.correo}
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, correo: e.target.value }))
                          }
                          placeholder="nombre@empresa.com"
                          className="w-full rounded-xl border border-crema/20 bg-marino px-4 py-3.5 text-sm text-crema placeholder:text-crema/35 focus:border-naranja focus:outline-none"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-crema/60 transition-colors hover:text-crema disabled:opacity-0"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </button>

                  {step < totalSteps - 1 ? (
                    <button
                      type="button"
                      disabled={!canAdvance()}
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-naranja px-6 py-3 text-sm font-bold text-white transition-transform enabled:hover:-translate-y-0.5 enabled:hover:bg-naranja-600 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Siguiente
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={!canAdvance()}
                      onClick={() => setSubmitted(true)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-naranja px-6 py-3 text-sm font-bold text-white transition-transform enabled:hover:-translate-y-0.5 enabled:hover:bg-naranja-600 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Ver mi diagnóstico
                      <ClipboardCheck className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="mb-5 font-display text-2xl font-extrabold text-crema">
                  {resultado.titulo}
                </h3>
                <ul className="mb-8 space-y-3">
                  {resultado.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
                      <span className="text-sm leading-relaxed text-crema/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={mailtoHref()}
                  className="inline-flex items-center gap-2 rounded-full bg-naranja px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-naranja-600"
                >
                  <Mail className="h-4 w-4" />
                  Enviar este diagnóstico a mi correo
                </a>
                <p className="mt-4 text-xs text-crema/45">
                  Esto es una orientación general, no un concepto técnico formal. Para el
                  diagnóstico detallado de tu caso, agenda una llamada en la sección de
                  contacto.
                </p>
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
