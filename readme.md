# Prjet trackada- Script qui permet de vérifier l'initialisation des projets en local:

## Description

_Créer une script en JS grâce à des modules Node.js qui permet de vérifier si : ._

[ ] le dossier qui contient le projet est bien crée et bien nommé,
[ ] git est initialisé dans chaque dossier,
[ ] les fichiers d'initialisation sont bien présents,

## Technologies utilisées

- **JavaScript**
- **Node.js**

## Structure du projet

|\_\_checktrack.html

|\_\_track.json

|\_\_README.md

## Contenu du script :

Le script contient :

- Import des modules ES node suivants :
  -readFileSync
  -existsSync
  -join
  -homedir

- Liaisons entre le fichier JSON et le script + fichier JSON parsé,

- Condition de vérification de l'existence du dossier projet principal,

- Boucle principale qui itère sur les objets du tableau issu du fichier JSON :
  - Condition qui vérifie et affiche l'existence des sous dossiers projets cités dans le fichier JSON
  * Condition qui vérifie et affiche l'existence d'un dossier git dans chaque dossier.
  - Condition qui vérifie et affiche l'existence des fichiers requis dans chaque projet.

- Compteur en pourcentage d'avancement de l'initialisation des projets.

## Comment lancer le projet

1. Télécharger tous les fichiers du projet.
2. Ouvrir lancher le script dans un terminal de commande grâce à la commande : node checktrack.js

## Auteur·e

Projet trackada réalisé par Gaédic dans le cadre de la formation développeur.se web chez Ada Tech School.
