import { Section } from "@/components/Section";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen lg:pl-0">
      <Hero />

      {/* I. Dessins joailliers */}
      <Section
        id="dessins-joailliers"
        title="I. Dessins joailliers"
        subtitle="Étude des ombres et de la lumière"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">
              Étude des ombres et de la lumière
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder alt="Rond" className="aspect-square" />
              <ImagePlaceholder alt="Pique" className="aspect-square" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">Gouache</h3>
            <ImagePlaceholder alt="Travaux gouache" className="aspect-[4/3]" />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-medium text-stone-700">Croquis</h3>
          <div className="space-y-4">
            <p className="text-stone-600">
              Présentation des croquis et études préparatoires.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <ImagePlaceholder alt="Croquis 1" className="aspect-[3/4]" />
              </div>
              <div>
                <ImagePlaceholder alt="Croquis 2" className="aspect-[3/4]" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* II. Dans mon carnet */}
      <Section id="carnet" title="II. Dans mon carnet">
        <p className="mb-8 text-stone-600">
          Extraits de mon carnet de croquis et explorations créatives.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ImagePlaceholder
              key={i}
              alt={`Carnet page ${i}`}
              className="aspect-[3/4]"
            />
          ))}
        </div>
      </Section>

      {/* III. Jeu de gemmes et de perles */}
      <Section
        id="gemmes-perles"
        title="III. Jeu de gemmes et de perles"
      >
        <p className="mb-8 text-stone-600">
          Exploration des gemmes, perles et matériaux précieux.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ImagePlaceholder alt="Gemmes" className="aspect-square" />
          <ImagePlaceholder alt="Perles" className="aspect-square" />
        </div>
      </Section>

      {/* IV. Étude du métal */}
      <Section id="etude-metal" title="IV. Étude du métal">
        <div className="space-y-12">
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">
              Grossissement du système
            </h3>
            <p className="mb-4 text-stone-600">Explication du système.</p>
            <ImagePlaceholder alt="Système" className="aspect-video" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">Colliers</h3>
            <ImagePlaceholder alt="Colliers" className="aspect-video" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium text-stone-700">
                Travail du fil
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder alt="Fil - Cœur" className="aspect-square" />
                <ImagePlaceholder alt="Fil" className="aspect-square" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-stone-700">
                Projet Abeilles
              </h3>
              <ImagePlaceholder alt="Projet Abeilles" className="aspect-square" />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium text-stone-700">
                Découpe et tracé
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <ImagePlaceholder
                    key={i}
                    alt={`Découpe ${i}`}
                    className="aspect-square"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-stone-700">
                Projet Fleur
              </h3>
              <ImagePlaceholder alt="Projet Fleur" className="aspect-square" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">
              Autre modèle
            </h3>
            <p className="mb-4 text-stone-600">
              Matière · Technique
            </p>
            <ImagePlaceholder alt="Autre modèle" className="aspect-video" />
          </div>
        </div>
      </Section>

      {/* V. Robe océan */}
      <Section id="robe-ocean" title="V. Robe océan">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <ImagePlaceholder alt="Robe océan 1" className="aspect-[3/4]" />
            <ImagePlaceholder alt="Robe océan 2" className="aspect-square" />
          </div>
          <div className="lg:col-span-2">
            <p className="mb-6 text-stone-600">
              Projet inspiré par l&apos;océan — exploration des formes fluides et
              des matières.
            </p>
            <ImagePlaceholder alt="Photo robe océan" className="aspect-video" />
          </div>
        </div>
      </Section>

      {/* VI. Créer pour questionner */}
      <Section id="creer-questionner" title="VI. Créer pour questionner">
        <p className="mb-8 text-stone-600">
          Réflexion sur la création comme moyen d&apos;interroger et
          d&apos;explorer.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ImagePlaceholder alt="Photoshop" className="aspect-[3/4]" />
            <p className="mt-2 text-sm text-stone-500">Rendu numérique</p>
          </div>
          <div>
            <ImagePlaceholder alt="Projet P.P" className="aspect-[3/4]" />
            <p className="mt-2 text-sm text-stone-500">Explication technique</p>
          </div>
          <div>
            <ImagePlaceholder alt="Paire" className="aspect-[3/4]" />
            <p className="mt-2 text-sm text-stone-500">Paire</p>
          </div>
          <div>
            <ImagePlaceholder alt="Robe - Croquis" className="aspect-[3/4]" />
            <p className="mt-2 text-sm text-stone-500">Croquis</p>
          </div>
        </div>
      </Section>

      {/* VII. Arlequin, jeu de couleur */}
      <Section id="arlequin" title="VII. Arlequin, jeu de couleur">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">
              Inspiration
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder alt="Inspiration 1" className="aspect-square" />
              <ImagePlaceholder alt="Inspiration 2" className="aspect-square" />
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-stone-700">
              Techniques
            </h3>
            <div className="space-y-4">
              <ImagePlaceholder alt="Gouache" className="aspect-video" />
              <ImagePlaceholder alt="Aquarelle" className="aspect-video" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium text-stone-700">
            Projet aquarelle
          </h3>
          <p className="mb-4 text-stone-600">
            Exploration du jeu des couleurs et des contrastes.
          </p>
          <ImagePlaceholder alt="Projet aquarelle" className="aspect-video" />
        </div>
      </Section>

      {/* VIII. Photographie */}
      <Section id="photographie" title="VIII. Photographie">
        <p className="mb-8 text-stone-600">
          Captures et mises en scène photographiques des créations.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ImagePlaceholder
              key={i}
              alt={`Photographie ${i}`}
              className="aspect-square"
            />
          ))}
        </div>
      </Section>

      {/* IX. La couleur comme langage */}
      <Section id="couleur-langage" title="IX. La couleur comme langage">
        <p className="mb-8 text-stone-600">
          La couleur comme vecteur d&apos;expression et de signification dans
          les créations.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ImagePlaceholder alt="Couleur 1" className="aspect-video" />
          <ImagePlaceholder alt="Couleur 2" className="aspect-video" />
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100 py-8 px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm text-stone-600">
            Vous souhaitez un site web professionnel ?
          </p>
          <div className="mt-2 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-xs text-stone-500">Développé par Hugo Dev Solutions</p>
            <a
              href="https://www.hugo-dev-solutions.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border border-stone-400 bg-white px-4 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:bg-stone-50"
            >
              Visiter le site
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            © {new Date().getFullYear()} Hugo Dev Solutions. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
}
