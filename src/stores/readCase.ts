import { readable } from "svelte/store";

export type CaseRecord = {
    id: string;
    title: string;
    link: string;
    notes: string;
    dateAdded: number;
}

export const casestudies = readable([] as CaseRecord[], (set) => {
    fetch('./data/casestudies.json').then((data) => data.json()).then((rec) => {
        const list: CaseRecord[] = rec;
        set(list.sort((a, b) => {return (a.title < b.title) ? -1 : 1;}));
    }).catch(() => {
        set(null);
    })
});
