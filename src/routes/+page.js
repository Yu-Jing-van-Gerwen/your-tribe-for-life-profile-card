import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    return {
        persons: await directus.request(readItems('person')),
    };
}

export let csr = false;