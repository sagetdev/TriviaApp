# TriviaApp

Application mobile de quiz développée avec Expo, React Native et TypeScript.

## Prérequis

- Node.js compatible avec la version d'Expo du projet
- npm
- Expo Go ou un émulateur/appareil configuré

## Installation

```bash
npm install
```

## Lancer l'application

```bash
npx expo start
```

Depuis le terminal Expo, ouvre l'application sur Android ou iOS, ou lance la version web avec la touche `w`.

## Vérifications

```bash
npx expo-doctor
npx tsc --noEmit
npx expo lint
```

## Structure

- `src/app/` : routes et écrans Expo Router
- `src/components/` : composants réutilisables
- `src/constants/` : thème et constantes
- `assets/` : images et ressources

> État actuel : la structure du dépôt est encore basée sur le template Expo. Les écrans de jeu, la banque de questions et la logique de score restent à implémenter ou à restaurer si le code attendu se trouve sur une autre branche.
