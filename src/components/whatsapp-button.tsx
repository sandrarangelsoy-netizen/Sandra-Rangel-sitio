const PHONE = "573170494718";
const MESSAGE = "Hola Sandra, vi tu sitio web y me gustaría hablar sobre un diagnóstico.";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(31,42,68,0.3)] transition-transform hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.2 1.6 6.03L4 29l8.1-1.57a12 12 0 0 0 3.94.66h.01C22.69 28.1 28 22.7 28 16.07 28 12.86 26.75 9.84 24.48 7.57A11.9 11.9 0 0 0 16.04 3Zm0 21.97h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-3.79.74.77-3.7-.24-.38a9.96 9.96 0 0 1-1.53-5.3c0-5.5 4.48-9.98 9.99-9.98 2.66 0 5.17 1.04 7.05 2.93a9.9 9.9 0 0 1 2.92 7.06c0 5.5-4.48 9.99-9.99 9.99Zm5.48-7.48c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.41-1.49-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.24-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.08 4.5.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
