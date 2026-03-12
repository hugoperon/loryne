# Portfolio Loryne — École de joaillerie

Portfolio artistique réalisé avec Next.js pour une candidature en école de joaillerie.

## Structure du portfolio

- **I.** Dessins joailliers (ombres, lumière, gouache, croquis)
- **II.** Dans mon carnet
- **III.** Jeu de gemmes et de perles
- **IV.** Étude du métal (travail du fil, projets Abeilles & Fleur, découpe, colliers)
- **V.** Robe océan
- **VI.** Créer pour questionner
- **VII.** Arlequin, jeu de couleur
- **VIII.** Photographie
- **IX.** La couleur comme langage

## Développement local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Ajouter des images

Place tes images dans `public/assets/`. Elles seront accessibles via `/assets/nom-image.png`.

Pour les afficher dans le portfolio, modifie les composants `ImagePlaceholder` dans `src/app/page.tsx` en passant le chemin :

```tsx
<ImagePlaceholder src="/assets/ton-image.png" alt="Description" />
```

## Déploiement automatique (GitHub Pages)

À chaque `git push` sur `main`, le site est déployé automatiquement.

### Première configuration (à faire une seule fois)

1. Va dans les **Settings** du dépôt GitHub
2. **Pages** → **Build and deployment**
3. **Source** : sélectionne **GitHub Actions**

Le site sera disponible à : **https://hugoperon.github.io/loryne/**
