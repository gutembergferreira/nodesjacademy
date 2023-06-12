import { Prof, Tecnologias } from "./helpersTypes";

export function listProfs(profs: Prof[]) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join("")}</ul>`;
}

export function tecnologiasNode(tecnologias: Tecnologias[]) {
    let list: Array<string> = [];
    tecnologias.forEach((element) => {
        if (element.poweredByNodejs) {
            list.push(`<li>${element.name}-${element.type}</li>`);
        }
    });
    return `<ul>${list.join("")}</ul>`;
}
