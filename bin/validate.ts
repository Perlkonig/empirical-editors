export {};

type ResearchRecord = {
    id: string;
    title: string;
    authors: string[];
    year: number;
    link: string;
    abstract: string;
    dateAdded: number;
}
const research: ResearchRecord[] = require("../public/data/research.json");

// type CaseRecord = {
//     id: string;
//     title: string;
//     link: string;
//     notes: string;
//     dateAdded: number;
// }
// const cases: CaseRecord[] = require("../public/data/casestudies.json");

// Look for blank IDs
console.log("Looking for blank IDs");
research.forEach((rec) => {
    if ( (rec.id === null) || (rec.id === undefined) || (rec.id.length === 0) || (rec.id.match(/^\s*$/)) ) {
        console.log("\t" + rec.title);
    }
});
// Look for duplicate IDs
console.log("Looking for duplicate IDs");
const ids: Set<string> = new Set<string>();
for (const rec of research) {
    if (ids.has(rec.id)) {
        console.log("\t" + rec.id);
    }
    ids.add(rec.id);
}
// Look for duplicate titles
console.log("Looking for duplicate titles");
const titles: Set<string> = new Set<string>();
for (const rec of research) {
    if (titles.has(rec.title)) {
        console.log("\t" + rec.id);
    }
    titles.add(rec.title);
}
// Look for duplicate links
console.log("Looking for duplicate links");
const links: Set<string> = new Set<string>();
for (const rec of research) {
    if (links.has(rec.link)) {
        console.log("\t" + rec.id);
    }
    links.add(rec.link);
}

console.log("Done");
