import { writable } from "svelte/store";

type AndOr = "and"|"or";
interface ISearch {
    andor: AndOr;
    terms: string;
}

export const search = writable({andor: "and", terms: ""} as ISearch);
