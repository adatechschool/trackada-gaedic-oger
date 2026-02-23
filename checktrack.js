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

//pour pour répéter sur les autres projets de track.json:
for (project of track.projects) {
}
