# Présentation du frontend

## Organisation des fichiers

Tous les fichiers du frontend sont dans \imports\client.

Le fichier main.js appelle renderRoutes de routes.js qui s'occupe du routage.

## Pages
Le frontend est composé de 3 pages :

* `/`         Cette page gère l'ajout d'une image dans la base de donnée.
* `/search`   Cette page gère la recherche d'une image dans la base donnée.
* `/tags`     Cette page gère la modification ou supression des tags.

Ces pages utilisent React et des composants de Material-UI.

Le routage utlise react-router et est définie dans routes.js. Ce fichier affiche aussi le header et les boutons permettant d'accéder aux pages.