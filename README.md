# Andelor Exhibition | Projet étudiant mars 2023

repo projet version 1 (proffesseurs) : https://github.com/yacine-samba/AndelorProjet

**Introduction**

Andelor est une éxposition fictive créer par 5 étudiants en BUT MMI, l'objéctif était de réaliser un site de réservation avec la possibilité de réserver des billets pour l'exposition Andelor créer par l'agence [WebStory](https://www.webstory-agency.chambaudry.butmmi.o2switch.site/).

Le site de réservation inclus une partie back office pour l'administration et la visualisation des statistiques des réservations

**Fonctionnalités**

- Réservation de billets
- Gestion des réservations (modification et supression)

**Captures d'écran**

![Page d'accueil](https://andelor.samba.butmmi.o2switch.site/home.png)
![Page d'éxposition](https://andelor.samba.butmmi.o2switch.site/mobile.gif) 
![Back Office](https://andelor.samba.butmmi.o2switch.site/backoffice.png) 

**Stack utilisée**

- Javascript JSX
- PHP
- MYSQL
- CSS
- Tailwind
- Nodejs
- React
- React Router
- React Slick
- React Helmet
- Fontawesome
- Video React
- Axios
- Symfony
- Bundle Doctrine
- Apiplatform
- Json Web Token
- Composer

**Installation**

1. Cloner le repo

2. Installer les dépendances partie front

```bash
cd ./frontend
npm install
```

3. Lancer le serveur

```bash
npm run start
```

4. Installer les dépendances partie backend

```bash
cd ./backend
composer install
```

5. Connecter la bdd dans le fichier .env ligne 25

DATABASE_URL="mysql://root:root@localhost:port/bdd?serverVersion=8&charset=utf8mb4"

6. Lancer le serveur back ainsi que Xampp ou Wamp

```bash
symfony server:start
```

<!-- generer les cles jwt et conncter dans le fichier api/axios dans ./frontend  -->

7. Générer les keygen JWT avec Symfony6

```bash
cd ./backend
php bin/console lexik:jwt:generate-keypair
```

8. Modifier le lien de l'api axios par l'ip du serveur symfony

```bash
# ./frontend/src/api/axios.js
const Axios = axios.create({
  baseURL: "http://localhost:port",
});
```

**Guide de démarrage rapide :**

1. Visite du site
2. Page exposition
3. Réserver des billets
4. Confirmer la réservation
5. Réservation envoyer par mail

**Auteur**

- [Yacine Samba](https://www.linkedin.com/in/yacine-samba/)

