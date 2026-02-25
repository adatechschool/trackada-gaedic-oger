// Import des module Node.js (ES Modules)

// Depuis File System (fs) — pour interagir avec les fichiers et dossiers
import { readFileSync, existsSync } from "fs";
// Depuis Path (path) - pour manipuler les chemins de fichiers
import { join } from "path";
// Depuis Operating System (os) — pour obtenir des infos sur le système
// Le chemin d'accès home "C:\Users\Gaedic" sur Windows
//(C'est l'équivalent du "~" dans le terminal.)
import { homedir } from "os";

// Je déclare la variable data pour lire le fichier json et indiquer avec quels caractères.
const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data); //Je déclare la variable track qui permet de parser le fichier json afin de le trasnformer en fichier JS lisible.
//console.log(track);

const home = homedir(); //Je déclare une variable pour stocker le chemin home
//console.log(home);
const adaPath = join(home, "documents", "ada"); // Je déclare une variable pour stocker le chemin vers le dossier principal ada.
//console.log(adaPath);

//Je veux vérifier si mon dossier principal ada existe :
if (existsSync(adaPath)) {
  console.log("✅ \x1b[32m Dossier ada \x1b[0m");
} else {
  console.log("❌ Dossier ada");
}

//Pour compteur de progression : Je déclare une variable pour stocker le nombre de projets contenus dans le fichier
const numberProject = track.projects.length; // je stocke le nombre de projet total comptés grâce à .length
//console.log(numberProject);

let acheviedProject = 0; //je stocke le nombre de projet achevés une fois les conditions suivantes remplies :

//Boucle: Itérer sur l'ensemble des projets contenus dans track : c'est un tableau d'objet, on utilise une boucle for of.
for (let project of track.projects) {
  //Je déclare une variable projet sur laquelle itérer:
  let projectReady = true;
  const projectPath = join(adaPath, project.name); //pour vérifier l'existence et stocker les chemins des dossiers grâce à join
  const gitPath = join(adaPath, project.name, ".git"); //pour vérifier l'existence et stocker le chemin
  // du git grâce à join, on ajouter ".git" car le chemin n'existe pas dans le track
  //console.log(projectPath);

  if (existsSync(projectPath)) {
    //si le chemin du projet existe :
    console.log("✅ \x1b[32m Dossier du projet : " + project.name + " \x1b[0m"); // affiche ok
    if (existsSync(gitPath)) {
      //si le chemin du git existe (on affiche rien)
    } else {
      //sinon
      console.log("- le repository git n'est pas initialisé"); //affiche que git n'est pas initialisé
      projectReady = false;
    }
  } else {
    //sinon
    console.log("❌ Dossier du projet : " + project.name); //affiche le dossier manquant
    console.log("- le dossier n'existe pas ou n'est pas nommé correctement");
    projectReady = false;
  }
  let missingFiles = [];

  for (let file of project.required) {
    //Boucle pour entrer dans le tableau required et vérifier les fichiers contenus dans required
    const filePath = join(projectPath, file); //stocker le chemin des fichiers
    if (existsSync(filePath)) {
      //si le fichier existe
    } else {
      //sinon
      missingFiles.push(file);
      projectReady = false;
    }
  }

  if (projectReady) {
    //Si mon projet est ok (true)
    acheviedProject += 1; //J'itère dans ma variable pour chaque projets réalisés si tous les chemins existent.
  } else { console.log("- il manque " + missingFiles.join(", "));}

  //Affichage compteur :
}

console.log(
  "\x1b[95m " +
    (acheviedProject / numberProject) * 100 +
    " % " +
    "de projets initialisés correctement (" +
    acheviedProject +
    "/" +
    numberProject +
    ")\x1b[0m",
);
