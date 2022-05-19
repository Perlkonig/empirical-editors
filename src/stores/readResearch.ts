import { readable } from "svelte/store";

export type ResearchRecord = {
    title: string;
    authors: string[];
    year: number;
    link: string;
    abstract: string;
    dateAdded: number;
}

export const research = readable([] as ResearchRecord[], (set) => {
    fetch('./data/research.json').then((data) => data.json()).then((rec) => {
        const list: ResearchRecord[] = rec;
        set(list);
    }).catch(() => {
        set(null);
    })
});
