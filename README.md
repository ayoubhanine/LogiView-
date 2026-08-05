# 🚚 LogiView

LogiView est une application mobile développée avec **React Native**, **Expo** et **TypeScript**.

L'application permet de visualiser rapidement les **colis en cours** et les **véhicules disponibles** d'une entreprise de transport à travers un tableau de bord unique.

Ce projet a été réalisé dans le but d'apprendre les fondamentaux du développement mobile avec React Native.

---

# 📱 Aperçu

L'application contient un seul écran composé de :

- Un Header
- Une barre de recherche
- Un filtre des colis
- Une liste des colis
- Une liste des véhicules

Les données sont entièrement locales (aucune API et aucune base de données).

---

# ✨ Fonctionnalités

## Dashboard

- Affichage du nom de l'application
- Sous-titre descriptif
- Liste des colis
- Liste des véhicules

---

## Gestion des colis

Chaque colis affiche :

- Référence
- Destination
- Statut

Au clic sur une carte :

- Poids
- Date d'expédition

---

## Gestion des véhicules

Chaque véhicule affiche :

- Immatriculation
- Type
- Statut

Au clic sur une carte :

- Chauffeur assigné
- Kilométrage

---

## Recherche

Recherche en temps réel sur :

### Colis

- Référence
- Destination

### Véhicules

- Immatriculation
- Type

---

## Filtre

Filtrage des colis selon leur statut :

- Tous
- En transit
- Livré

Le filtre fonctionne en combinaison avec la recherche.

---

## Expansion des cartes

Au clic sur une carte :

- ouverture des détails
- fermeture au second clic

Une seule carte peut être ouverte par section.

---

## Gestion des résultats

Affichage d'un message lorsqu'aucun résultat ne correspond à la recherche.

---

# 🛠️ Technologies utilisées

- React Native
- Expo
- TypeScript

---

# 📚 Concepts React Native utilisés

## Composants natifs

- View
- Text
- ScrollView
- TextInput
- TouchableOpacity
- SafeAreaView

---

## Hooks React

- useState

---

## Style

- StyleSheet.create()
- Flexbox

---

## TypeScript

- Interfaces
- Props typées
- Union Types
- Type Guards

---

## JavaScript

- map()
- filter()
- includes()
- toLowerCase()

---

## Architecture

```
src
│
├── app
│   └── index.tsx
│
├── components
│   ├── Card.tsx
│   ├── FilterButton.tsx
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   └── SectionTitle.tsx
│
├── constants
│   └── colors.ts
│
├── data
│   └── data.ts
│
└── types
    └── index.ts
```

---

# 🎨 Composants réutilisables

## Header

Affiche :

- Nom de l'application
- Sous-titre

---

## SearchBar

Permet la recherche en temps réel.

---

## FilterButton

Boutons réutilisables pour le filtre des colis.

---

## SectionTitle

Affiche les titres des différentes sections.

---

## Card

Composant unique utilisé pour :

- les colis
- les véhicules

Le composant adapte automatiquement son contenu selon le type de données reçu.

---

# 📂 Données

Les données sont stockées localement dans :

```
src/data/data.ts
```

Aucune base de données.

Aucun appel API.

---

# 🎯 Fonctionnement

L'utilisateur peut :

- consulter les colis
- consulter les véhicules
- rechercher un élément
- filtrer les colis
- ouvrir une carte
- refermer une carte

Toutes les interactions sont réalisées localement.

---

# 🚀 Installation

## Cloner le projet

```bash
git clone https://github.com/VOTRE_USERNAME/LogiView.git
```

## Installer les dépendances

```bash
npm install
```

## Lancer le projet

```bash
npx expo start
```

Puis :

- Appuyer sur **a** pour Android
- Appuyer sur **w** pour le Web
- Scanner le QR Code avec **Expo Go**

---

# 📌 Contraintes respectées

- ✅ React Native
- ✅ Expo
- ✅ TypeScript
- ✅ Aucun type any
- ✅ Aucun JavaScript
- ✅ StyleSheet.create()
- ✅ Composants réutilisables
- ✅ Données locales
- ✅ Aucune API
- ✅ Aucune base de données
- ✅ Aucune librairie UI externe

---

# 📖 Ce que ce projet m'a permis d'apprendre

- Les bases de React Native
- Les composants natifs
- Le système de mise en page avec Flexbox
- La création de composants réutilisables
- La gestion de l'état avec useState
- Les événements tactiles avec TouchableOpacity
- Les formulaires avec TextInput
- Le typage avec TypeScript
- Le filtrage et la recherche de données
- La création d'une interface mobile responsive

---

# 👨‍💻 Auteur

**Ayoub Hanine**

Développeur Full Stack JavaScript

- React
- React Native
- Next.js
- Node.js
- Express.js
- MongoDB
- TypeScript