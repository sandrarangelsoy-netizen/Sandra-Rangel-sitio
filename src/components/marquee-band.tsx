const WORDS = ["Prevenir", "Preparar", "Comunicar"];

export function MarqueeBand() {
  const items = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden border-y-2 border-marino bg-naranja py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-10 pr-10">
            {items.map((word, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {word}
                </span>
                <span className="h-2 w-2 rounded-full bg-marino" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
