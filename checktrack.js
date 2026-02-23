// ES Modules

// (File System) — pour interagir avec les fichiers et dossiers
import { readFileSync, existsSync } from "fs";
// (path) - pour manipuler les chemins de fichiers
import { join } from "path";
// (Operating System) — pour obtenir des infos sur le système
// équivalent du "~" dans le terminal.
import { homedir } from "os";

const data = readFileSync("track.json", "utf-8");
const track = JSON.parse(data);
//console.log(track);

const home = homedir();
//console.log(home);
const adaPath = join(home, "documents", "ada");
//console.log(adaPath);

//Condition est-ce que le dossier existe :
if (existsSync(adaPath)) {
  console.log("✅ Dossier ada");
} else {
  console.log("❌ Dossier ada");
}

//Pour répéter sur les autres projets de track.json: il vérifie l'itinialisation git seuelement si le dossier existe:
for (let project of track.projects) {
  const projectPath = join(adaPath, project.name); //vérifier l'existence et stocker les chemins des dossiers
  const gitPath = join(adaPath, project.name, ".git"); //vérifier l'existence et stocker le chemin du git

  //console.log(projectPath);
  if (existsSync(projectPath)) {
    console.log("✅Dossier du projet : " + project.name);
    if (existsSync(gitPath)) {
    } else {
      console.log("- le repository git n'est pas initialisé");
    }
  } else {
    console.log("❌ Dossier du projet : " + project.name);
    console.log("- le dossier n'existe pas ou n'est pas nommé correctement");
  }

  for (let file of project.required) {
    const filePath = join(projectPath, file);
    if (existsSync(filePath)) {
    } else {
      console.log("-il manque " + file);
    }
  }
}

//Compteur pourcentage :
const numberProject = projects.lenght;
let acheviedProject = (acheviedProject / numberProject) * 100;
