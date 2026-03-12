"use client";

import Link from "next/link";

const sections = [
  { id: "dessins-joailliers", label: "I. Dessins joailliers" },
  { id: "carnet", label: "II. Dans mon carnet" },
  { id: "gemmes-perles", label: "III. Jeu de gemmes et de perles" },
  { id: "etude-metal", label: "IV. Étude du métal" },
  { id: "robe-ocean", label: "V. Robe océan" },
  { id: "creer-questionner", label: "VI. Créer pour questionner" },
  { id: "arlequin", label: "VII. Arlequin, jeu de couleur" },
  { id: "photographie", label: "VIII. Photographie" },
  { id: "couleur-langage", label: "IX. La couleur comme langage" },
];

export function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-20">
      {/* Traits bleus — tous différents : épaisseurs, nuances, formes variées */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Trait épais, bleu foncé — bas gauche vers POR */}
        <path
          d="M -60 850 Q 120 620 220 450 T 340 320 Q 400 280 450 320 T 500 400"
          stroke="#1e40af"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.85}
        />
        {/* Trait fin, bleu clair — parallèle au-dessus */}
        <path
          d="M -40 820 Q 100 660 200 500 T 320 360 Q 360 330 400 350"
          stroke="#93c5fd"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity={0.5}
        />
        {/* Trait sinueux, court — sous POR */}
        <path
          d="M 80 520 Q 160 480 220 460 Q 280 440 320 470"
          stroke="#3b82f6"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity={0.65}
        />
        {/* Gros trait — haut droit, spirale vers le centre */}
        <path
          d="M 1260 30 Q 1000 120 750 220 T 450 300 Q 350 340 400 420"
          stroke="#2563eb"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.8}
        />
        {/* Trait moyen, plus clair */}
        <path
          d="M 1180 100 Q 950 180 700 250 T 500 320 Q 420 360 450 400"
          stroke="#60a5fa"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          opacity={0.6}
        />
        {/* Petit gribouillis bleu ciel */}
        <path
          d="M 1100 180 Q 900 240 700 290 Q 550 320 480 280"
          stroke="#bfdbfe"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity={0.4}
        />
      </svg>

        {/* Titre : PORTF + cercle (O) + LIO = PORTFOLIO */}
        <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative flex flex-wrap items-center justify-center gap-0 text-stone-900">
          <span className="font-serif text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
            PORTF
          </span>

          {/* Grand cercle vide — représente le O central */}
          <div className="relative mx-1 flex items-center justify-center md:mx-2">
            <div className="h-28 w-28 rounded-full border-2 border-stone-900 md:h-36 md:w-36 lg:h-44 lg:w-44" />
            {/* Accents colorés à côté du cercle */}
            <div className="absolute -right-1 top-0 h-6 w-6 rounded bg-rose-200 md:h-7 md:w-7" />
            <div className="absolute -bottom-1 left-2 flex gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
          </div>

          <span className="font-serif text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
            LIO
          </span>
        </div>

        {/* Sous-titre — style manuscrit/cursive */}
        <p className="mt-8 font-handwriting text-xl text-stone-700 md:text-2xl">
          Collection de <span className="font-semibold">RÉFÉRENCES</span> ayant une
          esthétique commune : &apos;englober&apos;
        </p>

        {/* Sommaire — en dessous du titre, centré */}
        <nav className="mt-12 flex flex-col items-center gap-2">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-stone-500">
            Sommaire
          </p>
          <ul className="space-y-2 text-center">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="text-stone-700 transition-colors hover:text-stone-900 hover:underline"
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#dessins-joailliers"
          className="mt-10 rounded-full border border-stone-400 bg-white px-8 py-3 text-stone-800 transition-colors hover:border-stone-600"
        >
          Découvrir
        </Link>
      </div>
    </header>
  );
}
