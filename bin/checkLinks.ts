import fetch from "node-fetch";

type ResearchRecord = {
    id: string;
    title: string;
    authors: string[];
    year: number;
    link: string;
    abstract: string;
    dateAdded: number;
}

type CaseRecord = {
    id: string;
    title: string;
    link: string;
    notes: string;
    dateAdded: number;
}

const research: ResearchRecord[] = require("../public/data/research.json");
const cases: CaseRecord[] = require("../public/data/casestudies.json");

const link2href = (link: string): string => {
    if (link.startsWith("doi:")) {
        return "https://dx.doi.org/" + link.slice(4);
    } else {
        return link;
    }
};

for (const rec of research) {
    const link = link2href(rec.link);
    fetch(link)
        .then(response => {
            if ( (response.status >= 300) && (response.status !== 503) ) {
                console.log("Research: " + response.status + "\n\t" + link);
            }
        })
        .catch(error => {
            // console.log("Research\t: " + link + "\n\t" + error);
        });
}

for (const rec of cases) {
    const link = link2href(rec.link);
    fetch(link)
        .then(response => {
            if ( (response.status >= 300) && (response.status !== 503) ) {
                console.log("Case: " + response.status + "\n\t" + link);
            }
        })
        .catch(error => {
            // console.log("Case\t" + link + "\n\t" + error);
        });
}

console.log("Done");
