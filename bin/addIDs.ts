import { writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";

type inRec = {
    title: string;
    link: string;
    notes: string;
    dateAdded: number;
}

type outRec = {
    id: string;
    title: string;
    link: string;
    notes: string;
    dateAdded: number;
}

const data: inRec[] = require("../public/data/casestudies.json");
const newData: outRec[] = [];
for (const rec of data) {
    const node: outRec = {
        id: uuidv4(),
        title: rec.title,
        link: rec.link,
        notes: rec.notes,
        dateAdded: rec.dateAdded
    };
    newData.push(node);
}
writeFileSync("public/data/casestudies-ids.json", JSON.stringify(newData));

const vdata: outRec[] = require("../public/data/casestudies-ids.json");
const idSet: Set<string> = new Set<string>();
for (const rec of vdata) {
    idSet.add(rec.id);
}
console.log(vdata.length);
console.log(idSet.size);
