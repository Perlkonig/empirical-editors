import { derived } from "svelte/store";

import { research } from "../stores/readResearch";
import { search } from "./writeSearch";

const reTerms = /[^\s"]+|"([^"]*)"/gi;

export const filteredResearch = derived([research, search], ([research, search]) => {
    const terms: string[] = [];
    let match = reTerms.exec(search.terms);
    while (match !== null) {
        terms.push(match[1] ? match[1] : match[0]);
        match = reTerms.exec(search.terms);
    }

    const sets: Set<string>[] = [];
    for (const term of terms) {
        const tSet: Set<string> = new Set<string>();
        for (const rec of research) {
            if (
                rec.abstract.toLowerCase().includes(term.toLowerCase()) ||
                rec.title.toLowerCase().includes(term.toLowerCase()) ||
                (rec.authors.join(" ")).toLowerCase().includes(term.toLowerCase())) {
                tSet.add(rec.id);
            }
        }
        sets.push(tSet);
    }
    if (sets.length === 0) {
        sets.push(new Set<string>(research.map(x => x.id)));
    }

    let finalSet: Set<string> = new Set<string>();
    if (search.andor === "and") {
        finalSet = sets[0];
        for (let i = 1; i < sets.length; i++) {
            finalSet = new Set<string>([...finalSet].filter(x => sets[i].has(x)));
        }
    } else {
        finalSet = new Set<string>();
        for (const set of sets) {
            set.forEach(item => finalSet.add(item));
        }
    }
    return research.filter(rec => finalSet.has(rec.id));
});

